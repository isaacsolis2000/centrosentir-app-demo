// src/presentation/pages/AboutPage.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fondoFilosofia from '../../assets/fondo-filosofia.png';
import { FaGraduationCap, FaCertificate, FaUser, FaHeart, FaBookOpen } from 'react-icons/fa';

const AboutPage: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const diplomas = [
    "Diplomado en psicoterapia integrativa - Universidad Valle de México",
    "Diplomado en inteligencia emocional - en línea Universidad Anahuac",
    "Diplomado en estrategias cognitivo conductual para el manejo de ansiedad y estrés - en línea ITESM",
    "Diplomado en crianza positiva - en línea Universidad Iberoamericana (UIA)",
  ];

  return (
    <div className="min-h-screen bg-soft-beige">
          {/* Hero Section with fondo-filosofia background */}
          <section
            className="relative min-h-[30vh] py-24 md:py-32 overflow-hidden bg-cover bg-[position:top_left]"
            style={{ backgroundImage: `url(${fondoFilosofia})` }}
          >
            <div className="absolute inset-0 bg-white/40"></div>

            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Acerca de mí
                </h1>
                <p className="text-xl text-gray-600">
                  Conoce mi formación, mi enfoque terapéutico y mi filosofía de acompañamiento
                </p>
              </div>
            </div>
          </section>

      {/* Contenido principal */}
      <section className="py-12 md:py-20" data-aos="fade-up">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columna izquierda - Presentación personal */}
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" data-aos="fade-up">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-100 rounded-lg mr-4">
                    <FaUser className="text-2xl text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Presentación Personal</h2>
                </div>
                
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed whitespace-pre-line">
  {`Soy Alejandra Alvarado, psicóloga clínica y psicoterapeuta. Más allá de la teoría, los títulos, y la práctica, soy un ser humano que conoce lo que significa transformarse desde adentro.

No hablo de crecimiento desde la distancia: lo he vivido, lo he caminado y hoy acompaño con la misma profundidad con la que yo misma he transformado mi vida.

Acompaño a personas que desean comprender su historia, sanar sus heridas emocionales y reconectar con partes de sí mismas que habían quedado en silencio, para renacer y transformarse desde un lugar auténtico. Mi enfoque es clínico e integrativo, pero sobre todo humano.`}
</p>
                </div>
              </div>

              {/* Enfoque terapéutico */}
              <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <FaHeart className="text-2xl text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Mi Enfoque Terapéutico</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Mi práctica es integrativa, combinando herramientas de distintas corrientes terapéuticas,
                  incluyendo conocimientos en psicoanálisis, adaptadas a las necesidades de cada paciente.
                </p>
                
                <p className="text-gray-700">
                  Acompaño a niños, adolescentes y familias en procesos de sanación, transformación
                  emocional y desarrollo personal.
                </p>
              </div>
            </div>

            {/* Columna derecha - Formación */}
            <div className="space-y-8" data-aos="fade-left">
              {/* Formación académica */}
              <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="zoom-in" data-aos-delay="0">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <FaGraduationCap className="text-2xl text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Formación Académica</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-500 pl-4 py-2">
                    <h3 className="font-semibold text-gray-800">Maestría en Psicoterapia</h3>
                    <p className="text-gray-600 text-sm">Con enfoques psicoanalíticos</p>
                    <p className="text-gray-500 text-sm">Universidad Humanista</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4 py-2">
                    <h3 className="font-semibold text-gray-800">Licenciatura en Psicología Clínica</h3>
                    <p className="text-gray-500 text-sm">Universidad del Valle de Grijalva</p>
                  </div>
                </div>
              </div>

              {/* Diplomados */}
              <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="zoom-in" data-aos-delay="100">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <FaCertificate className="text-2xl text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Diplomados y Formación</h2>
                </div>
                
                <div className="space-y-4">
                  {diplomas.map((diploma, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">{diploma}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white" data-aos="zoom-in" data-aos-delay="200">
                <div className="flex items-center mb-4">
                  <FaBookOpen className="text-2xl mr-3" />
                  <h3 className="text-xl font-bold">Mi Misión</h3>
                </div>
                <p className="opacity-90">
                  Que cada persona pueda descubrir su poder, su valor, su fuerza y la 
                  posibilidad real de transformarse desde un lugar propio y sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;