import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fondoFilosofia from '../../assets/fondo-filosofia.png';
import { 
  FaSearch, 
  FaUserShield, 
  FaHeartbeat, 
  FaRecycle,
  FaUserCircle,
  FaUsers
} from 'react-icons/fa';



interface Workshop {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  duration: string;
  format: string;
  topics: string[];
}

const WorkshopsPage: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const workshops: Workshop[] = [
    {
      id: 1,
      title: "Exploración Interna y Autoconciencia",
      description: "Taller diseñado para profundizar en el autoconocimiento, identificar patrones emocionales y desarrollar mayor consciencia sobre uno mismo.",
      icon: <FaSearch className="text-3xl" />,
      color: "from-blue-400 to-cyan-400",
      duration: "3 horas y media",
      format: "Grupal (máx. 10 personas)",
      topics: [
        "Autoconocimiento profundo",
        "Identificación de patrones emocionales",
        "Mindfulness y presencia",
        "Diálogo interno saludable"
      ]
    },
    {
      id: 2,
      title: "Fortalecimiento del Yo y Límites Saludables",
      description: "Espacio para desarrollar una identidad sólida, autoestima y aprender a establecer límites claros en relaciones personales y profesionales.",
      icon: <FaUserShield className="text-3xl" />,
      color: "from-green-400 to-emerald-400",
      duration: "3 horas y media",
      format: "Grupal (máx. 12 personas)",
      topics: [
        "Desarrollo de autoestima",
        "Establecimiento de límites",
        "Comunicación asertiva",
        "Prevención de dependencias emocionales"
      ]
    },
    {
      id: 3,
      title: "Regulación Emocional y Resiliencia",
      description: "Taller enfocado en desarrollar herramientas prácticas para gestionar emociones intensas y construir resiliencia emocional.",
      icon: <FaHeartbeat className="text-3xl" />,
      color: "from-purple-400 to-pink-400",
      duration: "3 horas y media",
      format: "Grupal (máx. 15 personas)",
      topics: [
        "Gestión de emociones intensas",
        "Estrategias de regulación emocional",
        "Desarrollo de resiliencia",
        "Manejo del estrés y ansiedad"
      ]
    },
    {
      id: 4,
      title: "Reestructuración de Hábitos y Bienestar",
      description: "Proceso psicoeducativo para identificar y transformar hábitos que afectan el bienestar, construyendo rutinas saludables.",
      icon: <FaRecycle className="text-3xl" />,
      color: "from-orange-400 to-yellow-400",
      duration: "3 horas y media",
      format: "Grupal (máx. 12 personas)",
      topics: [
        "Identificación de hábitos nocivos",
        "Estrategias de cambio conductual",
        "Construcción de rutinas saludables",
        "Bienestar integral"
      ]
    },
    {
      id: 5,
      title: "Reconexión con la Autoestima y la Identidad",
      description: "Taller para reconectar con el amor propio, fortalecer la identidad personal y sanar la relación con uno mismo.",
      icon: <FaUserCircle className="text-3xl" />,
      color: "from-red-400 to-rose-400",
      duration: "3 horas y media",
      format: "Individual o grupal",
      topics: [
        "Desarrollo de amor propio",
        "Reconexión con la identidad",
        "Sanación de autocrítica",
        "Aceptación y autocompasión"
      ]
    },
    {
      id: 6,
      title: "Crianza Consciente y Vínculos Emocionales Seguros",
      description: "Dirigido a padres, madres y cuidadores para desarrollar crianza respetuosa y fortalecer vínculos emocionales seguros.",
      icon: <FaUsers className="text-3xl" />,
      color: "from-teal-400 to-cyan-400",
      duration: "3 horas y media",
      format: "Grupal o familiar",
      topics: [
        "Comunicación familiar efectiva",
        "Disciplina positiva",
        "Gestión emocional infantil",
        "Fortalecimiento del apego seguro"
      ]
    }
  ];

  const gradientMap: Record<string, [string, string]> = {
    'from-blue-400 to-cyan-400': ['#6DD5FA', '#1B9FFF'],
    'from-green-400 to-emerald-400': ['#6FFFB0', '#00C85A'],
    'from-purple-400 to-pink-400': ['#E7A1FF', '#FF7ACB'],
    'from-orange-400 to-yellow-400': ['#FFD27A', '#FF9A3C'],
    'from-red-400 to-rose-400': ['#FF8AA2', '#FF5C7A'],
    'from-teal-400 to-cyan-400': ['#60F0E4', '#00B4FF'],
  };

  return (
    <div className="min-h-screen bg-soft-beige">
      <section
        className="relative min-h-[30vh] py-24 md:py-32 overflow-hidden bg-cover bg-[position:top_left]"
        style={{ backgroundImage: `url(${fondoFilosofia})` }}
      >
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Talleres y Pláticas
            </h1>

            <div className="bg-white/80 rounded-2xl p-8 md:p-12 mx-4" data-aos="fade-up" data-aos-delay="200">
              <p className="text-lg text-gray-700 mb-6">
                Imparto talleres y pláticas tanto grupales como individuales con un enfoque 
                psicoeducativo e integrativo. El propósito es ofrecer información clara sobre 
                distintos aspectos de la psicología y, al mismo tiempo, brindar herramientas 
                prácticas que cada persona puede aplicar en su vida cotidiana.
              </p>

              <p className="text-lg text-gray-700">
                Estos espacios no solo buscan transmitir conocimiento, sino también generar 
                reflexión, autoconocimiento y conexión. A través de ellos, acompaño a las 
                personas a reconocer sus recursos internos, fortalecer áreas específicas de 
                su vida y abrirse a nuevas maneras de comprenderse y relacionarse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Talleres Disponibles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada taller está diseñado para ofrecer herramientas prácticas y transformadoras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <div
                data-aos="zoom-in"
                data-aos-delay={`${workshop.id * 100}`}
                key={workshop.id} 
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                {/** Animated gradient header using mapped colors */}
                <div
                  className={`p-6 text-white workshop-header`}
                  style={{
                    ['--c-strong' as any]: (gradientMap as any)[workshop.color]?.[1] || '#06B6D4',
                    ['--c-light' as any]: (gradientMap as any)[workshop.color]?.[0] || '#60A5FA'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      {workshop.icon}
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {workshop.format.split(' ')[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-4">{workshop.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    {workshop.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Temas que trabajaremos:</h4>
                    <ul className="space-y-2">
                      {workshop.topics.map((topic, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Duración</p>
                        <p className="font-medium text-gray-800 text-sm">{workshop.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Formato</p>
                        <p className="font-medium text-gray-800 text-sm">{workshop.format}</p>
                      </div>
                    </div>
                  </div>
                </div>
            
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Inline keyframes for animated gradient headers */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Removed hue-rotate to preserve original color tones during animation */

        @keyframes gradientPulse {
          0% { box-shadow: 0 6px 12px rgba(0,0,0,0.04); transform: translateY(0) scale(1); }
          50% { box-shadow: 0 12px 28px rgba(0,0,0,0.10); transform: translateY(-2px) scale(1.01); }
          100% { box-shadow: 0 6px 12px rgba(0,0,0,0.04); transform: translateY(0) scale(1); }
        }

        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 0; transform: scale(1); }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Apply a subtle pulse on the header and continuous gradient movement on the background */
        .workshop-header.aos-animate {
          animation: gradientPulse 2s ease-in-out 1 forwards;
        }

        /* Pseudo-element holds the gradient so hue-rotate doesn't affect text color */
        .workshop-header {
          position: relative;
          overflow: hidden;
        }


        /* Two layered gradients: strong (before) and light (after). We fade from strong -> light on AOS, then keep subtle motion. */
        .workshop-header::before,
        .workshop-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background-size: 400% 400%;
          z-index: 0;
          transition: opacity .3s ease, transform .3s ease;
          /* Gentle horizontal movement only (preserve hue/color tones) */
          animation: gradientShift 8s linear infinite;
        }

        .workshop-header::before {
          background: linear-gradient(90deg, var(--c-strong), var(--c-light));
          opacity: 1;
        }

        .workshop-header::after {
          background: linear-gradient(90deg, var(--c-light), var(--c-strong));
          opacity: 0;
        }

        /* On AOS activation, fade strong out and light in */
        .workshop-header.aos-animate::before {
          animation: fadeOut 1.6s ease-in-out 1 forwards;
        }

        .workshop-header.aos-animate::after {
          animation: fadeIn 1.6s ease-in-out 1 forwards, gradientShift 8s linear infinite;
        }

        .workshop-header > * {
          position: relative;
          z-index: 1;
        }
      `}</style>

        <section className="py-12 md:py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white" data-aos="fade-up">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              ¿Interesado en llevar un taller a tu organización?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Puedo adaptar los contenidos a las necesidades específicas de tu grupo, 
              empresa o institución. Contáctame para más información.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Contactar ahora
              </a>
              <a
                href="https://www.instagram.com/centrosentir"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Ver próximos eventos en Instagram
              </a>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="opacity-80">
                Horarios disponibles para talleres: Lunes a Viernes de 8:00 am a 8:00 pm
              </p>
              <p className="opacity-80 mt-2">
                Contacto: centrosentiroficial@gmail.com | Tel: 99 99 92 63 08
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;
