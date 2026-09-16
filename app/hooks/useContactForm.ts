import { useState } from 'react';
import { ContactForm, ContactFormSchema } from '@/types/contact';
import { useContactStore } from '@/app/store/contactStore';
import { ZodError } from 'zod';

export function useContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { submitForm, isSubmitting, message, error, clearMessage } =
    useContactStore();

  const handleSubmit = async (data: Partial<ContactForm>) => {
    try {
      setErrors({});
      const validatedData = ContactFormSchema.parse(data);
      await submitForm(validatedData);
    } catch (err) {
      if (err instanceof ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          const path = error.path.join('.');
          fieldErrors[path] = error.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return {
    handleSubmit,
    errors,
    isSubmitting,
    message,
    error,
    clearMessage,
  };
}
