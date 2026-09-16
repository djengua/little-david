import type { Metadata } from 'next';
import './globals.css';
import { jetbrainsMono, spaceGrotesk } from './fonts';
import EmailJSInitializer from './components/EmailJSInitializer';

export const metadata: Metadata = {
  title: 'little-david | Consultoría y Desarrollo de Software',
  description: 'Soluciones de software personalizadas, automatización e IA para empresas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-gray-50 dark:bg-primary">
        <EmailJSInitializer />
        {children}
      </body>
    </html>
  );
}
