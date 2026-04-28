import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(cors({ origin: true }));
app.use(express.json());

const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
const fromName = process.env.FROM_NAME || 'Blog Psicóloga';
const toEmail = process.env.TO_EMAIL || '';

function isEmailConfigured() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASSWORD && toEmail);
}

app.post('/api/contact', async (req, res) => {
  if (!isEmailConfigured()) {
    return res.status(500).json({
      ok: false,
      error: 'El servidor no tiene configurado el envío de correos (revisa .env).',
    });
  }

  const { name, lastName, phone, email, service, message } = req.body || {};
  if (!name || !message) {
    return res.status(400).json({ ok: false, error: 'Faltan nombre o mensaje.' });
  }

  const fullName = [name, lastName].filter(Boolean).join(' ').trim() || name;

  try {
    const transporter = nodemailer.createTransport(emailConfig);
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: email || undefined,
      subject: `Contacto web: ${fullName}`,
      text: [
        `De: ${fullName}`,
        email ? `Email: ${email}` : '',
        phone ? `Teléfono: ${phone}` : '',
        service ? `Servicio de interés: ${service}` : '',
        '',
        'Mensaje:',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
      html: [
        '<p><strong>De:</strong> ' + escapeHtml(fullName) + '</p>',
        email ? '<p><strong>Email:</strong> ' + escapeHtml(email) + '</p>' : '',
        phone ? '<p><strong>Teléfono:</strong> ' + escapeHtml(phone) + '</p>' : '',
        service ? '<p><strong>Servicio:</strong> ' + escapeHtml(service) + '</p>' : '',
        '<p><strong>Mensaje:</strong></p>',
        '<p>' + escapeHtml(message).replace(/\n/g, '<br>') + '</p>',
      ]
        .filter(Boolean)
        .join(''),
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Error enviando correo:', err);
    res.status(500).json({
      ok: false,
      error: err.message || 'Error al enviar el correo.',
    });
  }
});

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

app.listen(PORT, () => {
  console.log(`Servidor API en http://localhost:${PORT}`);
  if (!isEmailConfigured()) {
    console.warn('Advertencia: SMTP no configurado. Define SMTP_USER, SMTP_PASSWORD y TO_EMAIL en .env');
  }
});
