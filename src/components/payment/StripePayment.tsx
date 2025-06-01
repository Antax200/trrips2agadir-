import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface StripePaymentProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

const StripePayment: React.FC<StripePaymentProps> = ({ amount, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // In a real implementation, you would call your backend to create a payment intent
      // and then use the client secret to confirm the payment
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            // In a real implementation, you would use Stripe Elements
            // This is just a placeholder
          },
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      onSuccess();
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          {t('booking.payment.title')}
        </h3>
        <p className="text-sm text-gray-500">
          {t('booking.payment.secure')}
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">{t('booking.payment.total')}</span>
          <span className="text-lg font-bold">${amount}</span>
        </div>
      </div>

      <Button
        variant="primary"
        onClick={handlePayment}
        disabled={loading}
        fullWidth
      >
        {loading ? t('booking.payment.processing') : t('booking.form.submit')}
      </Button>
    </div>
  );
};

export default StripePayment;