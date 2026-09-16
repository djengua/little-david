'use client';

import {
  ArrowsRightLeftIcon,
  BoltIcon,
  CubeIcon,
} from '@heroicons/react/24/solid';

const caseStudies = [
  {
    id: 1,
    label: 'Integración',
    icon: ArrowsRightLeftIcon,
    title: 'Dashboard de Ventas y Cobranza',
    description:
      'Tu equipo de ventas no ve en tiempo real qué clientes están al día, cuáles tienen pagos pendientes, o dónde están estancados los proyectos. Construimos un dashboard que conecta facturación, CRM y ventas en una sola vista.',
  },
  {
    id: 2,
    label: 'Automatización',
    icon: BoltIcon,
    title: 'Integración con Facturación, E-commerce y WhatsApp',
    description:
      'Cada venta dispara automáticamente una factura, se registra en tu inventario y el cliente recibe una confirmación por WhatsApp. Sin tocar nada manualmente.',
  },
  {
    id: 3,
    label: 'Desarrollo Custom',
    icon: CubeIcon,
    title: 'Sistema Administrativo que No Existe como Producto Estándar',
    description:
      'Necesitas un flujo específico para tu industria: gestión de proyectos con integración a proveedores, reportes personalizados, permisos granulares. Lo construimos como lo necesitas.',
  },
];

export default function CaseStudies() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-4xl font-bold text-primary dark:text-white mb-16 font-mono">
        Casos Comunes que Resolvemos
      </h2>
      <div className="space-y-6">
        {caseStudies.map((caseStudy) => {
          const IconComponent = caseStudy.icon;
          return (
            <div
              key={caseStudy.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-accent hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-dark text-white px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider font-mono">
                <IconComponent className="w-4 h-4" />
                {caseStudy.label}
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-3 font-mono">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-grotesk">
                {caseStudy.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
