import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND);

try {
  const data = resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ['dennisjcarvalho@gmail.com'],
    subject: 'Testando Email',
    html: `
      <h1>Teste de email</h1>
      <p>Até aqui funcionou ...</p>
    `
  });
} catch (e) {
  console.log(e);
}