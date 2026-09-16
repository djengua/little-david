'use client';

import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useModalStore } from '@/app/store/modalStore';

export default function Hero() {
  const { openModal } = useModalStore();

  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-primary dark:text-white leading-tight font-mono">
            Soluciones de software que crecen con tu negocio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-grotesk">
            Consultoría y desarrollo personalizado para empresas que necesitan más que productos estándar. Desde diagnósticos hasta implementación, hacemos que tus sistemas trabajen juntos.
          </p>
          <div className="flex gap-6 flex-wrap">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-all transform hover:-translate-y-1 shadow-accent hover:shadow-accent-lg flex items-center gap-2"
            >
              Agendar consulta
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-accent to-primary rounded-2xl h-96 flex items-center justify-center shadow-accent-lg">
          <SparklesIcon className="w-24 h-24 text-white" />
        </div>
      </div>
    </section>
  );
}
