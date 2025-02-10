import { createClient } from "@/utils/supabase/server";

export async function checkSubscription(userId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('subscriptions')
    .select('status')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();

  if (error || !data) {
    return false; // サブスクリプションが存在しないか、エラーが発生
  }

  return true; // アクティブなサブスクリプションが存在
}


// 顧客情報を保存または更新する関数
export async function upsertCustomer(userId: string, stripeCustomerId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('customers')
    .upsert([
      {
        user_id: userId,
        stripe_customer_id: stripeCustomerId,
      },
    ])
    .select();

  if (error) {
    console.error('Error upserting customer:', error);
    throw error;
  }

  return data;
}

// サブスクリプション情報を保存または更新する関数
export async function upsertSubscription(userId: string, stripeSubscriptionId: string, status: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('subscriptions')
    .upsert([
      {
        user_id: userId,
        stripe_subscription_id: stripeSubscriptionId,
        status: status,
      },
    ])
    .select();

  if (error) {
    console.error('Error upserting subscription:', error);
    throw error;
  }

  return data;
}

// 支払い情報を保存する関数
export async function insertPayment(userId: string, stripePaymentIntentId: string, amount: number, currency: string, status: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('payments')
    .insert([
      {
        user_id: userId,
        stripe_payment_intent_id: stripePaymentIntentId,
        amount: amount,
        currency: currency,
        status: status,
      },
    ])
    .select();

  if (error) {
    console.error('Error inserting payment:', error);
    throw error;
  }

  return data;
}