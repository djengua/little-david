'use client';

import {
  CodeBracketIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

const services = [
  {
    id: 1,
    icon: CodeBracketIcon,
    title: 'Desarrollo de Software',
    description: 'Aplicaciones web y móviles, portales, dashboards, APIs, sistemas administrativos e integraciones hechas a tu medida. React, Node.js, Java, .NET — lo que tu negocio necesite.',
    example: 'Ejemplo: Portal de clientes conectado a tu ERP, CRM, sistema de pagos y facturación.',
  },
  {
    id: 2,
    icon: SparklesIcon,
    title: 'Automatización e IA',
    description: 'Automatización de tareas repetitivas, RPA, flujos con APIs, chatbots e IA aplicada. Elimina trabajos manuales, reduce errores, ahorra tiempo.',
    example: 'Ejemplo: Leer facturas automáticamente, registrar datos y notificar aprobaciones sin captura manual.',
  },
  {
    id: 3,
    icon: MagnifyingGlassIcon,
    title: 'Consultoría Técnica',
    description: 'Auditoría inicial, diagnóstico profundo y roadmap de transformación digital. Sin obligación de ejecutar — te damos la claridad que necesitas para decidir.',
    example: 'Nos especializamos en: integración de sistemas, modernización, seguridad y recuperación de datos.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-24 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-8 sm:mb-16 font-mono">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl border-l-4 border-accent hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <IconComponent className="w-10 sm:w-12 h-10 sm:h-12 text-accent mb-4" />
              <h3 className="text-lg sm:text-2xl font-bold text-primary dark:text-white mb-3 sm:mb-4 font-mono">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed font-grotesk">
                {service.description}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic font-grotesk">
                {service.example}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
