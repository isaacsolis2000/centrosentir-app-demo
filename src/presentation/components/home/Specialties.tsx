import React from 'react';
import { 
  FaHeart, 
  FaUsers, 
  FaBrain, 
  FaHandsHelping, 
  FaBalanceScale,
  FaLeaf,
  FaStar
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Specialties: React.FC = () => {
  const specialties = [
    {
      icon: <FaBrain className="text-3xl text-primary-600" />,
      title: "Ansiedad y Depresión",
      description: "Manejo de trastornos de ansiedad, depresión y estrés"
    },
    {
      icon: <FaUsers className="text-3xl text-secondary-600" />,
      title: "Terapia de Pareja",
      description: "Acompañamiento en relaciones y dinámicas interpersonales"
    },
    {
      icon: <FaHeart className="text-3xl text-red-500" />,
      title: "Autoestima y Amor Propio",
      description: "Fortalecimiento de la identidad y valor personal"
    },
    {
      icon: <FaHandsHelping className="text-3xl text-green-600" />,
      title: "Intervención en Crisis",
      description: "Acompañamiento en duelos y situaciones límite"
    },
    {
      icon: <FaBalanceScale className="text-3xl text-purple-600" />,
      title: "Regulación Emocional",
      description: "Manejo y comprensión de las emociones"
    },
    {
      icon: <FaLeaf className="text-3xl text-teal-500" />,
      title: "Transformación Personal",
      description: "Procesos de cambio y crecimiento personal"
    }
  ];

  return (
    <section
      className="py-20 rounded-2xl"
      style={{ background: 'linear-gradient(90deg, #fff5e0 0%, #fff2d6 50%, #fff9ee 100%)' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Especialidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajo con diferentes enfoques terapéuticos adaptados a tus necesidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start mb-6">
                <div className="p-4 bg-white rounded-xl shadow-sm mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {getSpecialtyItems(item.title).map((subItem, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaStar className="text-yellow-500 mr-2 text-sm" />
                    <span className="text-sm">{subItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/servicios"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
          >
            Ver todas las especialidades
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

function getSpecialtyItems(title: string): string[] {
  const items: Record<string, string[]> = {
    "Ansiedad y Depresión": [
      "Trastornos de ansiedad",
      "Depresión y melancolía",
      "Estrés crónico",
      "Ataques de pánico"
    ],
    "Terapia de Pareja": [
      "Comunicación asertiva",
      "Resolución de conflictos",
      "Intimidad y conexión",
      "Crisis de pareja"
    ],
    "Autoestima y Amor Propio": [
      "Autoconcepto positivo",
      "Autocuidado",
      "Superar autocrítica",
      "Aceptación personal"
    ],
    "Intervención en Crisis": [
      "Procesos de duelo",
      "Situaciones traumáticas",
      "Apoyo inmediato",
      "Primeros auxilios psicológicos"
    ],
    "Regulación Emocional": [
      "Identificación emocional",
      "Manejo de emociones intensas",
      "Resiliencia emocional",
      "Mindfulness"
    ],
    "Transformación Personal": [
      "Crecimiento personal",
      "Cambios de vida",
      "Propósito y significado",
      "Desarrollo personal"
    ]
  };
  
  return items[title] || [];
}

export default Specialties;
