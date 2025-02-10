import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/utils/supabase/server';
import { insertPayment, upsertCustomer, upsertSubscription } from '@/utils/supabase/admin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const supabase = await createClient();
  const signature = req.headers.get("stripe-signature")!;
  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET_KEY!
    );
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  try {
    if (event.type === 'charge.succeeded') {
      const charge = event.data.object as Stripe.Charge;
      const paymentIntentId = charge.payment_intent as string;

      // Fetch the payment intent to get customer and subscription information
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      const customerId = paymentIntent.customer as string;

      // 1. Insert or update payment information
      await insertPayment(
        paymentIntent.metadata.userId, // ユーザーID
        paymentIntent.id, // PaymentIntent ID
        charge.amount, // 支払い金額
        charge.currency, // 通貨
        'succeeded' // 支払いステータス
      );

      // 2. customersテーブルに顧客情報を保存
      if (customerId) {
        await upsertCustomer(
          paymentIntent.metadata.userId, // ユーザーID
          customerId // Stripe顧客ID
        );
      }

      // if (subscriptionId) {
      //   let subscription: Stripe.Subscription;
      //   if (typeof subscriptionId === 'string') {
      //     subscription = await stripe.subscriptions.retrieve(subscriptionId);
      //   } else {
      //     subscription = subscriptionId;
      //   }
      //   await upsertSubscription(
      //     paymentIntent.metadata.userId, // ユーザーID
      //     subscription.id, // StripeサブスクリプションID
      //     subscription.status // サブスクリプションのステータス
      //   );
      // }

    }
  } catch (error) {
    console.error('Error processing webhook event:', error);
    return NextResponse.json({ error: 'Error processing webhook event' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}