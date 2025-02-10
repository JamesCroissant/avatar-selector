import { CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { currentUser } from '@/app/actions/auth';


interface CheckoutFormProps {
  onOpenChange: (open: boolean) => void
}

export const CheckoutForm = ({ onOpenChange }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const user = await currentUser();

    if (!user) {
      toast({
        title: 'Error',
        description: 'You must be logged in to make a payment',
        duration: 3000,
      });
      return;
    }

    if (!stripe || !elements) {
      setLoading(false)
      return;
    }

    const { error: submitError } = await elements.submit()
    if (submitError) {
      setError(submitError.message || "There was an issue with your payment")
      setLoading(false)
      return
    }

    // Fetch clientSecret from the backend
    const { clientSecret } = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.id,
        email: user.email,
        name: user.name || 'guest',
      }),
    })
      .then((res) => res.json())
      .catch((error) => {
        toast({
          title: 'Error',
          description: 'Failed to create payment intent',
          duration: 3000,
        });
        throw error;
      });

    // Confirm the card payment
    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/stripe/payment-success`, // 支払い成功後のリダイレクト先
      },
    })

    if (stripeError) {
      setError(stripeError.message || 'There was an issue with your payment');
    } else {
      toast({
        title: 'Success!',
        description: 'Your card has been charged',
        duration: 3000,
      })
      onOpenChange(false);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <PaymentElement />
      </div>
      <div className="text-[13px] leading-5 text-gray-600 mb-2">
        By clicking on Confirm you&apos;ll start your Premium plan subscription of{" "}
        <span className="text-gray-900 font-medium">$10/month</span>, with a renewal date of the{" "}
        <span className="text-gray-900 font-medium">24th of each month</span>.
      </div>
      <div className="flex justify-end gap-2 pt-2">
        <Button
          type='button'
          variant="outline"
          className="h-9 px-4 bg-white hover:bg-gray-50 text-gray-700 text-sm font-normal border-gray-300 rounded-lg"
          onClick={() => onOpenChange(false)}
        >
          Cancel
        </Button>
        <Button 
          type='submit'
          className={`h-9 min-w-[150px] bg-purple-600 hover:bg-purple-700 text-white text-sm font-normal rounded-lg`}
          disabled={!stripe || loading}
        >
          {loading ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            'Add Card and Pay'
          )}
        </Button>
      </div>
      {error && <div className='mt-2 text-end text-red-500 text-sm'>※{error}</div>}
    </form>
  );
};