'use client';

import ContactForm from './ContactForm';

export default function ContactFormModal() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-2 font-mono">
        Agendar Consulta
      </h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 font-grotesk">
        Completa el formulario y nos pondremos en contacto contigo pronto para
        agendar una consulta personalizada.
      </p>
      <ContactForm />
    </div>
  );
}
