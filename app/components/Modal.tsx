'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { useModalStore } from '@/app/store/modalStore';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const { isOpen, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Cerrar"
        >
          <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        {children}
      </div>
    </div>
  );
}
