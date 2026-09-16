import { create } from 'zustand';
import { ContactForm } from '@/types/contact';
import { sendContactEmail } from '@/lib/emailjs-config';

interface ContactState {
  isSubmitting: boolean;
  message: string | null;
  error: string | null;
  submitForm: (data: ContactForm) => Promise<void>;
  clearMessage: () => void;
}

export const useContactStore = create<ContactState>((set) => ({
  isSubmitting: false,
  message: null,
  error: null,

  submitForm: async (data: ContactForm) => {
    set({ isSubmitting: true, error: null });
    try {
      await sendContactEmail(data);
      set({
        message: '¡Gracias por tu mensaje! Nos contactaremos pronto.',
        isSubmitting: false,
      });
    } catch (err) {
      console.error('Error al enviar correo:', err);
      set({
        error: 'Hubo un error al enviar el formulario. Verifica tu conexión e intenta de nuevo.',
        isSubmitting: false,
      });
    }
  },

  clearMessage: () => {
    set({ message: null, error: null });
  },
}));
