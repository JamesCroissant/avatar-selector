// app/api/cancel-subscription/route.ts
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: Request) {
  const supabase = await createClient();
  const { subscriptionId } = await req.json();

  try {
    // Stripeでサブスクリプションをキャンセル
    const canceledSubscription = await stripe.subscriptions.cancel(subscriptionId);

    // Supabaseのsubscriptionsテーブルを更新
    const { data, error } = await supabase
      .from('subscriptions')
      .update({ status: 'canceled' })
      .eq('stripe_subscription_id', subscriptionId);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ canceledSubscription });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to cancel subscription' }, { status: 500 });
  }
}