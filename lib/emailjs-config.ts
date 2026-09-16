import { ContactForm } from '@/types/contact';

export const sendContactEmail = async (formData: ContactForm) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Error al enviar el correo');
  }

  return response.json();
};
