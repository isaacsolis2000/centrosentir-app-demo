import React from 'react';
import { FaInstagram, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-100 text-gray-900 border-t border-primary-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-700">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-primary-600 mr-3" />
                <span>99 99 92 63 08</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary-600 mr-3" />
                <a 
                  href="mailto:centrosentiroficial@gmail.com"
                  className="hover:text-primary-700 transition-colors"
                >
                  centrosentiroficial@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaClock className="text-primary-600 mr-3" />
                <div>
                  <p className="font-semibold">Horarios de atención:</p>
                  <p>Lunes a Viernes:  8:00 am a 8:00 pm</p>
                  <p>Sábados:  8:00 am a 8:00 pm</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/acerca" 
                  className="hover:text-primary-700 transition-colors"
                >
                  Acerca de mí
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios" 
                  className="hover:text-primary-700 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  to="/talleres" 
                  className="hover:text-primary-700 transition-colors"
                >
                  Talleres y Pláticas
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="hover:text-primary-700 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Sígueme</h3>
            <a 
              href="https://www.instagram.com/centrosentir?igsh=MTc2MTJtcGs2czVibQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-primary-50 px-6 py-3 rounded-lg transition-all duration-300"
            >
              <FaInstagram className="text-2xl mr-3" />
              <span className="font-semibold">@centrosentir</span>
            </a>
            
            <div className="mt-8">
              <p className="text-gray-700 text-sm">
                "Escribeme un mensaje y pronto te responderé; ¡Estaré feliz de ponerme en contacto contigo!"
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-300 mt-8 pt-8 text-center text-gray-700">
          <p>&copy; {new Date().getFullYear()} Alejandra Alvarado · Psicoterapia de adolescentes, adultos y parejas. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Sitio web desarrollado para tu bienestar emocional</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
