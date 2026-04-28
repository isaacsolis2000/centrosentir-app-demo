import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHeart,
  FaUsers,
  FaBrain,
  FaHandsHelping,
  FaArrowRight,
  FaLeaf,
  FaBalanceScale
} from 'react-icons/fa';
import heroBg from '../../assets/hero-bg.png';
import fondoFilosofia from '../../assets/fondo-filosofia.png';

interface SpecialtyItem {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const HomePage: React.FC = () => {
  const specialties: SpecialtyItem[] = [
    {
      icon: <FaUsers />,
      title: 'Acompañamiento en relaciones de pareja y dinámicas interpersonales',
    },
    {
      icon: <FaBrain />,
      title: 'Ansiedad, depresión y estrés',
    },
    {
      icon: <FaHeart />,
      title: 'Conflictos de identidad',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Consumo de sustancias (adicciones)',
    },
    {
      icon: <FaHeart />,
      title: 'Dependencia emocional',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Habilidades sociales básicas',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Intervención en crisis y duelos',
    },
    {
      icon: <FaLeaf />,
      title: 'Manejo de emociones / regulación emocional',
    },
    {
      icon: <FaUsers />,
      title: 'Orientación en crianza y dinámicas familiares',
    },
    {
      icon: <FaHeart />,
      title: 'Procesos de transformación personal y etapas de vida',
    },
    {
      icon: <FaHeart />,
      title: 'Problemas de autoestima y amor propio',
    },
    {
      icon: <FaBrain />,
      title: 'Trastornos alimenticios',
    },
    {
      icon: <FaHeart />,
      title: 'Trauma y heridas emocionales profundas',
    },
  ];

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
        className="relative min-h-[30vh] py-24 md:py-32 overflow-hidden bg-cover bg-[position:top_left]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-10" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight text-primary-700">
                Centro psicoterapéutico
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
              <Link to="/contacto" className="btn-primary">
                Agendar consulta
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras especialidades
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-primary-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((item, index) => (
              <div
                key={index}
                className="bg-primary-100 border border-primary-300 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-[2rem]"
                    style={{ backgroundColor: '#f7f1eb', color: '#94877b' }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 leading-relaxed">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoFilosofia})` }}
      >
        <div className="absolute inset-0 bg-primary-50/70"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50/95 rounded-2xl shadow-lg p-8 md:p-12 border border-primary-200" data-aos="fade-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Nuestra filosofía
              </h2>

              <div className="space-y-6 text-gray-800">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold">
                    Creo que no somos solo un cerebro y un cuerpo superficialmente vistos desde afuera.
                  </span>{' '}
                  Somos emociones, historia y una esencia que merece ser escuchada con verdad.
                </p>

                <p className="text-lg leading-relaxed">
                  En cada persona existe un tesoro único e invaluable, a veces oculto bajo lo que ha vivido.
                  Cuando comenzamos a trabajar y sanar desde adentro, ese tesoro se revela.
                </p>

                <p className="text-lg leading-relaxed">
                  Cada experiencia, cada momento, forma parte de ese camino que nos invita a descubrirnos
                  más auténticos y a vivir con mayor claridad y conciencia.
                </p>
              </div>
            </div>

          </div>
        </div>

        
      </section>

      <section className="py-20 bg-primary-50" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modalidades de Acompañamiento
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Ofrezco diferentes formas de trabajo terapéutico adaptadas a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-100 rounded-2xl p-8 border border-primary-300 hover:border-primary-500 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Terapia Individual</h3>
              <p className="text-gray-700 mb-6">
                Espacio personal para adolescentes y adultos. Trabajamos en procesos de
                autoconocimiento, sanación emocional y desarrollo personal.
              </p>
              <Link to="/servicios" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Más información
                <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="bg-primary-100 rounded-2xl p-8 border border-primary-300 hover:border-primary-500 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Terapia de Pareja</h3>
              <p className="text-gray-700 mb-6">
                Acompañamiento para parejas que buscan mejorar su comunicación,
                resolver conflictos y fortalecer su vínculo emocional.
              </p>
              <Link to="/servicios" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Más información
                <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="bg-primary-100 rounded-2xl p-8 border border-primary-300 hover:border-primary-500 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Talleres y Pláticas</h3>
              <p className="text-gray-700 mb-6">
                Espacios grupales psicoeducativos para el crecimiento personal
                y desarrollo de habilidades emocionales.
              </p>
              <Link to="/talleres" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Ver talleres
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-300 to-primary-100 text-gray-900" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-800">
            Te acompaño a comprender tu historia, sanar heridas emocionales y reconectar
            con partes de ti mismo que habían quedado en silencio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/contacto"
              className="bg-primary-700 text-primary-50 hover:bg-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Contactar ahora
            </Link>
            <a
              href="https://www.instagram.com/centrosentir?igsh=MTc2MTJtcGs2czVibQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-700 text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Seguir en Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
