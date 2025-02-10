// components/CancelSubscriptionButton.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface CancelSubscriptionButtonProps {
  subscriptionId: string;
}

export const CancelSubscriptionButton = ({ subscriptionId }: CancelSubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleCancelSubscription = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/cancel-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscriptionId }),
      });

      if (!response.ok) {
        throw new Error('Failed to cancel subscription');
      }

      toast({
        title: 'Success!',
        description: 'Your subscription has been canceled.',
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to cancel subscription. Please try again.',
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCancelSubscription}
      disabled={loading}
      className="bg-red-600 hover:bg-red-700 text-white"
    >
      {loading ? 'Canceling...' : 'Cancel Subscription'}
    </Button>
  );
};