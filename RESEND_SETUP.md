# Configurar Resend para little-david

Resend es una plataforma moderna para enviar correos desde aplicaciones. Es más seguro que EmailJS porque los correos se envían desde el backend.

## 📋 Pasos de Configuración

### 1. Crear Cuenta en Resend

1. Ve a [resend.com](https://resend.com/)
2. Haz click en **"Sign Up"** (arriba a la derecha)
3. Regístrate con tu email o GitHub
4. Verifica tu email

### 2. Obtener tu API Key

1. En el dashboard de Resend, ve a **API Keys** (lado izquierdo)
2. Haz click en **"Create API Key"**
3. Dale un nombre (ej: "little-david-prod")
4. Copia la API Key (comienza con `re_`)

Ejemplo:
```
re_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
```

⚠️ **Importante:** Guarda esta clave en un lugar seguro. No la compartas.

### 3. Configurar Variables de Entorno

1. Abre o crea `.env.local` en la raíz del proyecto:

```bash
# Si no existe, créalo basado en .env.local.example
cp .env.local.example .env.local
```

2. Reemplaza los valores:

```env
RESEND_API_KEY=re_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
CONTACT_EMAIL=tu_email@example.com
```

### 4. Probar en Desarrollo

Durante el desarrollo, Resend usa un dominio de prueba: `onboarding@resend.dev`

1. Reinicia el servidor:
```bash
npm run dev
```

2. Haz click en **"Agendar Consulta"**

3. Completa el formulario y envía

4. Revisa los correos en el dashboard de Resend: [resend.com/emails](https://resend.com/emails)

---

## 🚀 Para Producción

Cuando despliegues a producción, necesitas configurar un dominio propio:

### Opción 1: Usar Resend Domain (Gratis)

1. En Resend Dashboard → **Domains**
2. Haz click en **"Add Domain"**
3. Escribe tu dominio (ej: `noreply.little-david.com`)
4. Sigue las instrucciones de DNS
5. Actualiza el archivo `app/api/send-email/route.ts`:

```typescript
from: 'contacto@little-david.com' // Tu dominio
```

### Opción 2: Usar un Dominio Existente

Si ya tienes un dominio:

1. En Resend → **Domains** → **Add Domain**
2. Añade registros DNS (te guiarán)
3. Actualiza el `from` email en la API route

---

## ✅ Checklist

- [ ] Cuenta Resend creada
- [ ] API Key obtenida
- [ ] `.env.local` configurado
- [ ] Servidor de desarrollo ejecutado
- [ ] Formulario probado exitosamente
- [ ] Correo recibido

---

## 📊 Cuota Gratis

- ✅ **100 correos/día** sin pagar
- 💰 Pagos después de eso ($0.20 por correo)

---

## 🔐 Seguridad

**Con Resend:**
- Tu API Key se mantiene en el servidor (`.env.local`)
- Nunca se expone en el navegador
- Más seguro que EmailJS

**Mejores prácticas:**
1. Nunca commits `.env.local` (está en `.gitignore`)
2. En producción, usa variables de entorno del hosting
3. Vercel, Netlify, etc. tienen soporte integrado para esto

---

## 📁 Archivos Importantes

| Archivo | Propósito |
|---------|-----------|
| `app/api/send-email/route.ts` | Endpoint que envía el correo |
| `lib/emailjs-config.ts` | Función para llamar a la API |
| `.env.local` | Variables secretas (no commitear) |

---

## 🆘 Solución de Problemas

**Error: "RESEND_API_KEY not found"**
- Verifica que `.env.local` exista en la raíz
- Reinicia el servidor: `npm run dev`

**Error: "Invalid API Key"**
- Copia exactamente la API Key desde Resend Dashboard
- Debe comenzar con `re_`

**Formulario se envía pero no llega correo**
- Revisa el dashboard de Resend en "Emails"
- Verifica que `CONTACT_EMAIL` sea correcto
- Comprueba la carpeta de spam

**Error 500 en el formulario**
- Abre la consola del navegador (F12)
- Ve a la pestaña "Network"
- Haz click en el formulario y busca la request a `/api/send-email`
- Verifica el error en la respuesta

---

## 📧 Cuerpo del Correo

El correo que recibirás incluye:
- Nombre completo del solicitante
- Email de contacto
- Empresa
- Teléfono (si lo proporciona)
- Mensaje completo
- Reply-To automático al email del solicitante

---

¡Listo! Tu formulario está enviando correos reales de forma segura. 🎉

Para más información: [resend.com/docs](https://resend.com/docs)
