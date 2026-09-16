'use client';

import ContactForm from './ContactForm';

export default function ContactFormModal() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary dark:text-white mb-2 font-mono">
        Agendar Consulta
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 font-grotesk">
        Completa el formulario y nos pondremos en contacto contigo pronto para
        agendar una consulta personalizada.
      </p>
      <ContactForm />
    </div>
  );
}
