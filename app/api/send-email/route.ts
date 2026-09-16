import { ContactFormSchema } from '@/types/contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validar datos
    const validatedData = ContactFormSchema.parse(body);

    // Verificar que la API key esté configurada
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada');
      return Response.json(
        { error: 'Servidor no configurado correctamente. Por favor, contacta al administrador.' },
        { status: 500 }
      );
    }

    // Importar Resend dinámicamente
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Enviar correo
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev', // Cambiar en producción a tu dominio
      to: process.env.CONTACT_EMAIL || 'contacto@little-david.com',
      subject: `Nueva consulta de ${validatedData.name}`,
      html: `
        <h2>Nueva consulta de contacto</h2>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
        <p><strong>Empresa:</strong> ${validatedData.company}</p>
        ${validatedData.phone ? `<p><strong>Teléfono:</strong> ${validatedData.phone}</p>` : ''}
        <h3>Mensaje:</h3>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: validatedData.email,
    });

    if (result.error) {
      return Response.json(
        { error: result.error.message },
        { status: 400 }
      );
    }

    return Response.json(
      { success: true, id: result.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return Response.json(
      { error: 'Error al enviar el correo' },
      { status: 500 }
    );
  }
}
