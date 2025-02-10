// app/api/payment-success/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: Request) {
  const supabase = await createClient();
  const { paymentIntentId, userId, amount, currency } = await req.json();

  const { data, error } = await supabase
    .from('payments')
    .insert([
      {
        user_id: userId,
        stripe_payment_intent_id: paymentIntentId,
        amount: amount,
        currency: currency,
        status: 'succeeded',
      },
    ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}