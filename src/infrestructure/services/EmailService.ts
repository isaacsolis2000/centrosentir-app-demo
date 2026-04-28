import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_hrpq7jg';
const TEMPLATE_ID = 'template_4vrj23c';
const PUBLIC_KEY = 'ptYmXPlf-gXSkt5Hq';

export interface ContactFormData {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export class EmailService {
  constructor() {
    emailjs.init(PUBLIC_KEY);
  }

  async sendContactForm(data: ContactFormData): Promise<{ ok: boolean; error?: string }> {
    try {
      const templateParams = {
        from_name: `${data.name} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      return { ok: true };
    } catch (error: unknown) {
      console.error('EmailJS error:', error);
      let message = 'No se pudo enviar el mensaje. Inténtalo más tarde.';
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'object' && error !== null && 'text' in error) {
        message = (error as { text: string }).text;
      }
      return { ok: false, error: message };
    }
  }
}

export const emailService = new EmailService();
