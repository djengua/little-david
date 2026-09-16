'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-6xl mx-auto px-8 h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center h-32">
          <Image
            src="/images/logo.png"
            alt="little-david"
            width={120}
            height={120}
            priority
            className="object-contain"
          />
        </Link>
        <ul className="flex gap-8">
          <li>
            <a
              href="#servicios"
              className="text-gray-600 dark:text-gray-300 hover:text-accent font-medium transition-colors"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#como-trabajamos"
              className="text-gray-600 dark:text-gray-300 hover:text-accent font-medium transition-colors"
            >
              Cómo Trabajamos
            </a>
          </li>
          <li>
            <a
              href="#resultados"
              className="text-gray-600 dark:text-gray-300 hover:text-accent font-medium transition-colors"
            >
              Resultados
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-gray-600 dark:text-gray-300 hover:text-accent font-medium transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
