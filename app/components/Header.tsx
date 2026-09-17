'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Cómo Trabajamos', href: '#como-trabajamos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 h-20 sm:h-32 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center h-16 sm:h-32 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="little-david"
            width={120}
            height={120}
            priority
            className="object-contain w-16 sm:w-32 h-16 sm:h-32"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 dark:text-gray-300 hover:text-accent font-medium transition-colors text-sm lg:text-base"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <ul className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
