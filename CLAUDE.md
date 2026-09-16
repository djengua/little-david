# little-david Project Guide

## Descripción

Little-david es un sitio web profesional para una consultoría de TI que ofrece:
- Desarrollo de software personalizado (React, Node.js, Java, .NET)
- Automatización e IA (RPA, chatbots, integración de APIs)
- Consultoría técnica y diagnósticos

## Stack Tecnológico

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Para type safety
- **Tailwind CSS** - Utilidades de estilos (colores personalizados)
- **Zustand** - State management ligero
- **Zod** - Validaciones y type inference
- **Node.js** - Runtime

## Colores de la Marca

```
Primary: #0F172A (Azul profundo)
Accent: #14B8A6 (Teal vibrante)
Background: #E2E8F0 (Gris claro)
```

Están definidos en `tailwind.config.js` bajo `theme.extend.colors`

## Estructura de Carpetas

```
app/
  ├── components/         # Componentes React (Client & Server)
  ├── hooks/             # Custom hooks (useContactForm, etc)
  ├── store/             # Zustand stores (contactStore)
  ├── layout.tsx         # Layout raíz
  ├── page.tsx           # Página principal
  └── globals.css        # Estilos globales con CSS custom properties

types/
  └── contact.ts         # Schemas Zod y tipos TypeScript

lib/
  └── utils.ts           # Funciones utilitarias

public/
  └── images/
      └── logo.png       # Logo de little-david (120x120)
```

## Componentes Principales

### Header.tsx
- Navegación sticky con logo
- Links a sections (servicios, como trabajamos, resultados, contacto)
- Responsive

### Hero.tsx
- Propuesta de valor con gradient
- Botones CTA

### Services.tsx
- 3 servicios principales
- Tarjetas con iconos y descripción

### HowWeWork.tsx
- Modelo de consultoría por diagnóstico
- Desarrollo a medida
- Resultados medibles

### Results.tsx
- Métricas de impacto
- Beneficios cuantificados

### CaseStudies.tsx
- 3 casos de uso reales
- Labels con categorías

### CTA.tsx
- Call-to-action para contacto
- Email directo

### ContactForm.tsx (NUEVO)
- Formulario con validación Zod
- Integrado con Zustand store
- Manejo de errores

## Validaciones con Zod

En `types/contact.ts`:
```typescript
export const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
  phone: z.string().optional(),
});
```

## State Management

Zustand store en `app/store/contactStore.ts`:
- `isSubmitting` - Booleano para mostrar loading
- `message` - Mensaje de éxito
- `error` - Mensaje de error
- `submitForm()` - Función para enviar el formulario
- `clearMessage()` - Limpiar mensajes

## Hooks Personalizados

### useContactForm.ts
```typescript
const { handleSubmit, errors, isSubmitting, message, error, clearMessage } = useContactForm();
```
- Valida datos con Zod
- Integra con Zustand store
- Retorna errores por campo

## Deployment

1. Build: `npm run build`
2. Start: `npm start`

Listo para deployar en:
- Vercel (recomendado)
- Netlify
- AWS, GCP, etc.

## Email Configuration

El proyecto usa **Resend** para enviar correos de forma segura desde el backend:

**Configuración:**
1. Variables de entorno en `.env.local`:
   - `RESEND_API_KEY` - Tu API Key de Resend
   - `CONTACT_EMAIL` - Email donde recibirás consultas

2. API Route: `app/api/send-email/route.ts`
3. Función de envío: `lib/emailjs-config.ts`
4. Store de contacto: `app/store/contactStore.ts`
5. Hook personalizado: `app/hooks/useContactForm.ts`

**Flujo:**
- Cliente → Valida con Zod → Llama API Route → Resend → Correo

Ver `RESEND_SETUP.md` para instrucciones completas de configuración.

## Próximas Features

- [ ] Página de servicios individual
- [ ] Sección de blog/case studies detallados
- [ ] Animaciones con Framer Motion
- [ ] Analytics (Google Analytics, Mixpanel)
- [ ] Testimonios de clientes
- [ ] FAQ interactivo
- [ ] Sistema de notificaciones por Slack/Discord

## Notas de Desarrollo

- Los componentes usan `'use client'` para interactividad
- Tailwind CSS está configurado con colores personalizados
- Los alias de imports funcionan (@components, @lib, @types, etc)
- TypeScript strict mode está activo
