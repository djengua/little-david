# little-david

Sitio web profesional de little-david: Consultoría y desarrollo de software personalizado.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **State Management**: Zustand
- **Validaciones**: Zod
- **Imágenes**: Next.js Image optimization

## 📁 Estructura del Proyecto

```
app/
├── components/          # Componentes React reutilizables
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── HowWeWork.tsx
│   ├── Results.tsx
│   ├── CaseStudies.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── hooks/              # Custom hooks
│   └── useContactForm.ts
├── store/              # Zustand stores
│   └── contactStore.ts
├── layout.tsx          # Layout raíz
├── page.tsx            # Página principal
└── globals.css         # Estilos globales

types/
├── contact.ts          # Schemas y tipos de Zod

public/
└── images/
    └── logo.png        # Logo de little-david

tailwind.config.js      # Configuración de Tailwind
next.config.js          # Configuración de Next.js
tsconfig.json           # Configuración de TypeScript
postcss.config.js       # Configuración de PostCSS
```

## 🏗️ Instalación

1. **Instalar dependencias**:
```bash
npm install
```

2. **Ejecutar servidor de desarrollo**:
```bash
npm run dev
```

3. **Construir para producción**:
```bash
npm run build
```

4. **Iniciar servidor de producción**:
```bash
npm start
```

## 🎨 Paleta de Colores

- **Primario**: #0F172A (Azul profundo)
- **Accent**: #14B8A6 (Teal vibrante)
- **Fondo**: #F8FAFC (Gris muy claro)
- **Secundarios**: Grays 50-900

## 📝 Validaciones con Zod

El proyecto incluye un ejemplo de validación con Zod en `types/contact.ts`:

```typescript
const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
});
```

## 🗂️ State Management con Zustand

Ejemplo de store en `app/store/contactStore.ts`:

```typescript
export const useContactStore = create<ContactState>((set) => ({
  isSubmitting: false,
  message: null,
  submitForm: async (data) => { ... },
}));
```

## 🔗 Alias de Imports

```typescript
@/* → raíz del proyecto
@components/* → app/components
@lib/* → lib
@types/* → types
@hooks/* → app/hooks
@store/* → app/store
```

## 🌙 Dark Mode

El proyecto soporta dark mode automáticamente via Tailwind CSS.

## 📱 Responsive Design

Todos los componentes están diseñados mobile-first y son totalmente responsivos.

## 🚀 Próximos Pasos

- [ ] Crear página de contacto funcional
- [ ] Añadir animaciones con Framer Motion
- [ ] Implementar API routes para formularios
- [ ] Agregar SEO optimizations
- [ ] Crear sección de blog
- [ ] Agregar analytics

## 📄 Licencia

MIT
