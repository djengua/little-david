'use client';

import {
  ChartBarIcon,
  LockClosedIcon,
  GlobeAltIcon,
  LinkIcon,
} from '@heroicons/react/24/solid';

const results = [
  {
    id: 1,
    metric: '80%',
    suffix: '↓',
    description: 'Menos caídas y problemas operativos',
    icon: null,
  },
  {
    id: 2,
    metric: '90%',
    suffix: '↓',
    description: 'Menos trabajo manual y errores de captura',
    icon: null,
  },
  {
    id: 3,
    metric: null,
    description: 'Mejor control de ventas, inventario, cobranza y clientes',
    icon: ChartBarIcon,
  },
  {
    id: 4,
    metric: null,
    description: 'Seguridad y recuperación ante pérdida de datos',
    icon: LockClosedIcon,
  },
  {
    id: 5,
    metric: null,
    description: 'Trabajo remoto ordenado y seguro',
    icon: GlobeAltIcon,
  },
  {
    id: 6,
    metric: null,
    description: 'Integración entre sistemas que antes operaban aislados',
    icon: LinkIcon,
  },
];

export default function Results() {
  return (
    <section id="resultados" className="max-w-6xl mx-auto px-8 py-24 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-4xl font-bold text-primary dark:text-white mb-16 font-mono">
        Resultados que Entregamos
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {results.map((result) => {
          const IconComponent = result.icon;
          return (
            <div
              key={result.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              {result.metric ? (
                <div className="text-5xl font-bold text-accent mb-2 font-mono">
                  {result.metric}
                  <span className="text-3xl ml-1">{result.suffix}</span>
                </div>
              ) : (
                IconComponent && (
                  <IconComponent className="w-16 h-16 text-accent mx-auto mb-4" />
                )
              )}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-grotesk">
                {result.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
