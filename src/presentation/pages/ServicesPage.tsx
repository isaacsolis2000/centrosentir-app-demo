import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHeart,
  FaUsers,
  FaBalanceScale,
  FaUtensils,
  FaFirstAid,
  FaHome,
  FaUserCircle,
  FaStar
} from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  specialties: string[];
}

const ServicesPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const services: Service[] = [
    {
      id: 1,
      title: "Terapia Individual",
      description: "Acompañamiento personalizado para adolescentes y adultos en procesos de autoconocimiento, sanación y crecimiento personal.",
      icon: <FaUserCircle className="text-4xl text-primary-600" />,
      specialties: [
        "Ansiedad, depresión y estrés",
        "Conflictos de identidad",
        "Problemas de autoestima",
        "Manejo de emociones",
        "Procesos de transformación personal"
      ]
    },
    {
      id: 2,
      title: "Terapia de Pareja",
      description: "Espacio seguro para trabajar dinámicas relacionales, mejorar la comunicación y fortalecer el vínculo emocional.",
      icon: <FaUsers className="text-4xl text-secondary-600" />,
      specialties: [
        "Acompañamiento en relaciones de pareja",
        "Dinámicas interpersonales",
        "Resolución de conflictos",
        "Fortalecimiento del vínculo",
        "Crisis de pareja"
      ]
    },
    {
      id: 3,
      title: "Intervención en Crisis",
      description: "Atención inmediata y acompañamiento en momentos de crisis emocionales, duelos y situaciones traumáticas.",
      icon: <FaFirstAid className="text-4xl text-red-500" />,
      specialties: [
        "Intervención en crisis",
        "Procesos de duelo",
        "Trauma y heridas emocionales"
      ]
    },
    {
      id: 4,
      title: "Orientación Familiar",
      description: "Asesoramiento en dinámicas familiares, crianza positiva y mejora de las relaciones intrafamiliares.",
      icon: <FaHome className="text-4xl text-green-600" />,
      specialties: [
        "Orientación en crianza",
        "Dinámicas familiares"
      ]
    },
    {
      id: 5,
      title: "Trastornos Alimenticios",
      description: "Acompañamiento especializado en trastornos de la conducta alimentaria desde un enfoque integral.",
      icon: <FaUtensils className="text-4xl text-pink-600" />,
      specialties: [
        "Trastornos alimenticios"
      ]
    },
    {
      id: 6,
      title: "Adicciones",
      description: "Tratamiento integral para el consumo de sustancias y dependencias emocionales.",
      icon: <FaBalanceScale className="text-4xl text-purple-600" />,
      specialties: [
        "Consumo de sustancias"
      ]
    }
  ];

  const allSpecialties = [
    "Acompañamiento en relaciones de pareja y dinámicas interpersonales",
    "Ansiedad, depresión y estrés",
    "Conflictos de identidad",
    "Consumo de sustancias (adicciones)",
    "Dependencia emocional",
    "Habilidades sociales básicas",
    "Intervención en crisis y duelos",
    "Manejo de emociones / regulación emocional",
    "Orientación en crianza y dinámicas familiares",
    "Procesos de transformación personal y etapas de vida",
    "Problemas de autoestima y amor propio",
    "Trastornos alimenticios",
    "Trauma y heridas emocionales profundas"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-aos="fade-up">
            Mis Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco un acompañamiento terapéutico integral, adaptado a las necesidades
            específicas de cada persona. Cada proceso es único y personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${service.id * 100}`}
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-700 mb-3">
                    Especialidades relacionadas:
                  </h4>
                  <ul className="space-y-2">
                    {service.specialties.map((specialty, index) => (
                      <li key={index} className="flex items-start">
                        <FaStar className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg" data-aos="fade-up">
          <style>{`
            .heart-anim { color: #ef4444; display: inline-block; animation: heartColor 3s ease-in-out infinite; transform-origin: center; }
            @keyframes heartColor {
              0% { color: #ef4444; transform: scale(1); }
              50% { color: #f1be16; transform: scale(1.06); }
              100% { color: #ef4444; transform: scale(1); }
            }
          `}</style>

          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Todas nuestras especialidades
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allSpecialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <FaHeart className="heart-anim mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Listo para comenzar tu proceso de transformación?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Agenda una consulta inicial para explorar juntos cómo puedo acompañarte
            en tu camino hacia el bienestar emocional.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
