'use client';

import { useModalStore } from '@/app/store/modalStore';

export default function CTA() {
  const { openModal } = useModalStore();

  return (
    <section id="contacto" className="bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-white mb-6 font-mono">
          Hablemos de tu Proyecto
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 font-grotesk">
          ¿Tienes un desafío técnico, sistemas que no hablan entre sí, o procesos que consumen demasiado tiempo manual? Nos encanta resolver problemas reales.
        </p>
        <button
          onClick={openModal}
          className="inline-block px-10 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-all transform hover:-translate-y-1 shadow-accent hover:shadow-accent-lg"
        >
          Agendar Consulta
        </button>
      </div>
    </section>
  );
}
