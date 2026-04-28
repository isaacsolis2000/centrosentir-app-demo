import React, { useState, useRef } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { emailService } from '../../../infrestructure/services/EmailService';

interface FormData {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const turnstileRef = useRef<{ reset: () => void }>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const services = [
    'Terapia individual',
    'Terapia de pareja',
    'Talleres',
    'Pláticas',
    'Acompañamiento en crisis',
    'Otra consulta',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    if (!turnstileToken) {
      setStatus('error');
      setErrorMessage('Por favor completa la verificación de seguridad.');
      return;
    }

    const result = await emailService.sendContactForm(formData);
    if (result.ok) {
      setStatus('success');
      setFormData({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
      setTurnstileToken('');
      turnstileRef.current?.reset();
    } else {
      setStatus('error');
      setErrorMessage(result.error ?? 'No se pudo enviar el mensaje.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Nombre *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Nombre"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Apellidos *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Apellidos"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Teléfono *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="99 9999 9999"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">¿En qué tipo de servicio estás interesado? *</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">Selecciona una opción</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Comentario o mensaje *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Escribe tu mensaje aquí..."
        />
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
          Mensaje enviado correctamente. Te contactaremos pronto.
        </div>
      )}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
          {errorMessage}
        </div>
      )}

      <div className="mb-6 flex justify-center">
        <Turnstile
          ref={turnstileRef}
          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onSuccess={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken('')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || !turnstileToken}
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        {status === 'sending' ? 'Enviando...' : 'ENVIAR MENSAJE'}
      </button>
    </form>
  );
};

export default ContactForm;