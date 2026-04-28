import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fondo2 from '../../assets/fondo_2.jpeg';

const WhoWeArePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-primary-50">
      <section
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo2})` }}
      >
        <div className="absolute inset-0 bg-primary-50/70"></div>
        <div className="container relative z-10">
          {/* Título */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ¿Quiénes somos?
            </h1>
          </div>

          {/* Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50/95 rounded-2xl shadow-lg p-8 md:p-12 border border-primary-200" data-aos="fade-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Centro Sentir
              </h2>
              <div className="space-y-6 text-gray-800">
                <p className="text-lg leading-relaxed">
                  Es un espacio psicoterapéutico enfocado en el bienestar emocional y el acompañamiento de cada persona.
                </p>
                <p className="text-lg leading-relaxed">
                  Aquí ofrecemos un lugar seguro, confidencial y humano, donde cada proceso es
                  respetado en su ritmo y singularidad.
                </p>
                <p className="text-lg leading-relaxed">
                  El enfoque es integrativo, adaptándose a las necesidades de cada persona, con el
                  objetivo de acompañar a cada paciente en su proceso de sanación y transformación
                  emocional.
                </p>
              </div>
            </div>

            <div className="bg-primary-50/95 rounded-2xl shadow-lg p-8 md:p-12 border border-primary-200 mt-8" data-aos="fade-left" data-aos-delay="100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Nuestra misión
              </h2>
              <div className="space-y-6 text-gray-800">
                <p className="text-lg leading-relaxed">
                  Acompañamos procesos de sanación y transformación para que cada persona descubra su poder,
                  su valor, active su poder personal y transforme su vida desde un lugar consciente, propio y sostenible.
                </p>
              </div>
            </div>

            <div className="bg-primary-50/95 rounded-2xl shadow-lg p-8 md:p-12 border border-primary-200 mt-8" data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Visión
              </h2>
              <div className="space-y-6 text-gray-800">
                <p className="text-lg leading-relaxed">
                  Ser un centro de referencia en psicoterapia integrativa, reconocido por la profundidad de sus procesos,
                  la calidad humana de su acompañamiento y su capacidad de generar cambios reales y sostenibles en la vida de las personas.
                </p>
              </div>
            </div>

            <div className="bg-primary-50/95 rounded-2xl shadow-lg p-8 md:p-12 border border-primary-200 mt-8" data-aos="fade-left" data-aos-delay="300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Valores
              </h2>
              <ul className="space-y-3 text-gray-800">
                {['Empatía', 'Conciencia', 'Ética', 'Humanidad', 'Transformación real'].map((value) => (
                  <li key={value} className="flex items-center gap-3 text-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-500 flex-shrink-0"></span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeArePage;
