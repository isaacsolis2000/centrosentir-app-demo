import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Psicoterapia Integrativa para
            <span className="text-primary-600 block">Adolescentes, Adultos y Parejas</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Acompañamiento terapéutico desde un enfoque humano e integral, 
            donde cada proceso es único porque cada persona lo es.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Agendar consulta
            </Link>
            <Link
              to="/servicios"
              className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-4 px-8 rounded-lg border-2 border-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              Conocer servicios
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-200 rounded-full opacity-20"></div>
    </section>
  );
};

export default HeroSection;