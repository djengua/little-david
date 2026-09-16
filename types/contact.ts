import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  company: z.string().min(2, 'El nombre de la empresa es requerido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  phone: z.string().optional(),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;
