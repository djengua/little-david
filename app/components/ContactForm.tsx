'use client';

import { useState } from 'react';
import { useContactForm } from '@/app/hooks/useContactForm';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const { handleSubmit, errors, isSubmitting, message, error, clearMessage } =
    useContactForm();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(formData);
    if (!error) {
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setTimeout(clearMessage, 3000);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
      {message && (
        <div className="p-3 sm:p-4 bg-green-100 text-green-700 rounded-lg text-sm sm:text-base">
          {message}
        </div>
      )}

      {error && (
        <div className="p-3 sm:p-4 bg-red-100 text-red-700 rounded-lg text-sm sm:text-base">{error}</div>
      )}

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Nombre
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          placeholder="Tu nombre"
        />
        {errors.name && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Empresa
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          placeholder="Nombre de tu empresa"
        />
        {errors.company && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.company}</p>
        )}
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Teléfono (opcional)
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Mensaje
        </label>
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={5}
          className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          placeholder="Cuéntanos sobre tu proyecto..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-dark disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all transform hover:-translate-y-1 shadow-accent text-sm sm:text-base"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
}
