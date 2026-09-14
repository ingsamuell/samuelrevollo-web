import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 2_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanField(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = cleanField(payload.name, 120);
  const email = cleanField(payload.email, 254).toLowerCase();
  const company = cleanField(payload.company, 160);
  const projectType = cleanField(payload.projectType, 120);
  const budget = cleanField(payload.budget, 120);
  const message = cleanField(payload.message);
  const website = cleanField(payload.website, 200);

  // Honeypot: bots often fill a field that is hidden from real visitors.
  if (website) return NextResponse.json({ ok: true });

  if (!name || !email || !projectType || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const recipient = process.env.CONTACT_RECIPIENT;

  if (!gmailUser || !gmailAppPassword || !recipient) {
    return NextResponse.json({ error: "Contact service is unavailable." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `Samuel Revollo Web <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `[Portafolio] ${projectType} — ${name}`,
      text: [
        "Nueva consulta desde samuelrevollo.com",
        "",
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Empresa / proyecto: ${company || "No indicado"}`,
        `Servicio: ${projectType}`,
        `Presupuesto: ${budget || "No indicado"}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });
  } catch {
    return NextResponse.json({ error: "Contact service is unavailable." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
