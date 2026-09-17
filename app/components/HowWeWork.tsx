const workModels = [
  {
    id: 1,
    title: 'Consultoría por Diagnóstico',
    description:
      'Comenzamos con una auditoría profunda de tus sistemas, procesos y desafíos. Te entregamos un roadmap claro con prioridades, costos y tiempos. Sin presión para ejecutar — decides qué camino seguir con información en mano.',
  },
  {
    id: 2,
    title: 'Desarrollo a Medida',
    description:
      'Construimos exactamente lo que tu negocio necesita, no lo que un producto estándar te obliga a usar. Trabajamos con React, Node.js, Java, .NET y apps móviles. Entendemos que cada empresa es diferente.',
  },
  {
    id: 3,
    title: 'Resultados Medibles',
    description:
      'No entregamos código que nadie usa. Cada proyecto tiene objetivos claros: reducir costos operativos, mejorar velocidad, aumentar seguridad o generar nuevas oportunidades de negocio.',
  },
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-24 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-8 sm:mb-16 font-mono">
        Cómo Trabajamos
      </h2>
      <div className="space-y-6">
        {workModels.map((model) => (
          <div
            key={model.id}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-accent hover:shadow-lg transition-all"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-accent mb-2 sm:mb-3 font-mono">
              {model.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-grotesk">
              {model.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
