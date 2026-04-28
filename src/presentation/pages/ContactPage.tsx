import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp 
} from 'react-icons/fa';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "9999926308";
    const message = "Hola, estoy interesado/a en información sobre tus servicios de psicoterapia.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estaré feliz de ponerme en contacto contigo. Juntos podemos explorar cómo puedo acompañarte en tu camino hacia el bienestar emocional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-1 space-y-8" data-aos="fade-right">

            <div className="bg-white rounded-2xl shadow-lg p-6" data-aos="zoom-in" data-aos-delay="0">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FaPhone className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Teléfono</h3>
                    <p className="text-gray-600">99 99 92 63 08</p>
                    <button
                      onClick={handleWhatsAppClick}
                      className="mt-2 inline-flex items-center text-green-600 hover:text-green-700"
                    >
                      <FaWhatsapp className="mr-2" />
                      Escribir por WhatsApp
                    </button>
                  </div>
                </div>


                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Correo electrónico</h3>
                    <a
                      href="mailto:centrosentiroficial@gmail.com"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      centrosentiroficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Ubicación</h3>
                    <p className="text-gray-600">Fraccionamiento Juan Pablo II, calle 36 #340 x 17 diagonal y 17a (diagonal), Mérida, Yucatán</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FaClock className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Horarios de atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 am a 8:00 pm</p>
                    <p className="text-gray-600">Sábados: 8:00 am a 8:00 pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FaInstagram className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Redes sociales</h3>
                    <a
                      href="https://www.instagram.com/centrosentir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      @centrosentir
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-2" data-aos="fade-left">
            <ContactForm />

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">¿Qué esperar después de contactar?</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4" data-aos="zoom-in" data-aos-delay="200">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">Respuesta rápida</h4>
                  <p className="text-sm text-gray-600">Te responderé en menos de 24 horas hábiles</p>
                </div>

                <div className="text-center p-4" data-aos="zoom-in" data-aos-delay="300">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">Consulta inicial</h4>
                  <p className="text-sm text-gray-600">Agendaremos una primera sesión para conocernos</p>
                </div>

                <div className="text-center p-4" data-aos="zoom-in" data-aos-delay="400">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">Plan personalizado</h4>
                  <p className="text-sm text-gray-600">Crearemos un plan adaptado a tus necesidades específicas</p>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Preguntas frecuentes</h2>

          <div className="space-y-4">
            {[
              {
                q: "¿Cuál es el costo de la primera consulta?",
                a: "Ofrezco una sesión inicial de evaluación sin costo para que podamos conocernos y determinar si mi enfoque es adecuado para ti."
              },
              {
                q: "¿Cómo son las sesiones de terapia?",
                a: "Las sesiones son de 50 minutos, pueden ser presenciales o en línea según tu preferencia. Trabajamos en un espacio seguro y confidencial."
              },
              {
                q: "¿Aceptas seguros médicos?",
                a: "Actualmente trabajo de manera particular, pero puedo emitir facturas para que puedas realizar el reembolso con tu aseguradora si tu póliza lo permite."
              },
              {
                q: "¿Cuánto tiempo dura un proceso terapéutico?",
                a: "La duración varía según las necesidades de cada persona. Algunos procesos son breves (8-12 sesiones) mientras que otros requieren un acompañamiento más extenso."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6" data-aos="fade-up" data-aos-delay={`${index * 80}`}>
                <h4 className="font-bold text-gray-800 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
