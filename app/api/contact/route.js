import { Resend } from "resend";
import content from "../../../content.json";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || content.site.email;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Rasgo Media <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = content.contacto.form.mensajeMax;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  const nombre = typeof body.nombre === "string" ? body.nombre.trim() : "";
  const correo = typeof body.correo === "string" ? body.correo.trim() : "";
  const mensaje = typeof body.mensaje === "string" ? body.mensaje.trim() : "";

  if (!nombre || !correo || !mensaje) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(correo)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }
  if (mensaje.length > MAX_MESSAGE) {
    return Response.json({ error: "message_too_long" }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "email_not_configured" }, { status: 503 });
  }

  const escape = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: correo,
      subject: `Nuevo proyecto — ${nombre}`,
      html: `<p><strong>Nombre:</strong> ${escape(nombre)}</p><p><strong>Email:</strong> ${escape(
        correo
      )}</p><p><strong>Mensaje:</strong></p><p>${escape(mensaje).replace(/\n/g, "<br/>")}</p>`,
    });

    if (error) {
      return Response.json({ error: "send_failed" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
}
