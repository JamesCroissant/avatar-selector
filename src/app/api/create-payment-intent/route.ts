import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {

  try {
    const { userId, email, name } = await req.json();

    // Create a new customer
    const customer = await stripe.customers.create({
      email: email,
      name: name,
      metadata: { userId: userId },
    });

    // create 
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: process.env.STRIPE_PRICE_ID }],
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000 as number,
      currency: 'usd',
      automatic_payment_methods: { enabled : true },
      metadata: { userId: userId },
      customer: customer.id,
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ error:  `Internal Server Error ${error}` }, { status: 500 });
  }
}
