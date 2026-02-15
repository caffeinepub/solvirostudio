import { useState } from 'react';
import { useActor } from './useActor';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (name: string, email: string, message: string) => {
    if (!actor) {
      setIsError(true);
      setError('Connection not available. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
    setError(null);

    try {
      await actor.submitContactForm(name, email, message);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    isError,
    error,
  };
}
