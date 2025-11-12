import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

app.use(cors());
app.use(express.json());

app.use(express.static(distPath));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body || {};
  if (!name || !email || !phone || !service) return res.status(400).json({ error: 'Missing required fields' });

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'your@email',
        pass: process.env.SMTP_PASS || 'password'
      }
    });

    const toEmail = process.env.CONTACT_TO || 'hayagrivaassociatesmncl@gmail.com';
    await transporter.sendMail({
      from: `Hayagriva Website <no-reply@hayagriva.com>`,
      to: toEmail,
      subject: `New Inquiry: ${service} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message || ''}`,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));

