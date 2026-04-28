import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUserCircle, 
  FaUsers, 
  FaComments,
  FaGraduationCap
} from 'react-icons/fa';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: <FaUserCircle className="text-4xl text-primary-600" />,
      title: "Terapia Individual",
      description: "Espacio personalizado para el autoconocimiento y sanación emocional.",
      features: ["Adultos", "Adolescentes", "Sesiones personalizadas"],
      link: "/servicios"
    },
    {
      icon: <FaUsers className="text-4xl text-secondary-600" />,
      title: "Terapia de Pareja",
      description: "Acompañamiento para fortalecer la relación y mejorar la comunicación.",
      features: ["Comunicación", "Conflictos", "Reconexión emocional"],
      link: "/servicios"
    },
    {
      icon: <FaComments className="text-4xl text-green-600" />,
      title: "Talleres Grupales",
      description: "Espacios psicoeducativos para el crecimiento y desarrollo personal.",
      features: ["Grupales", "Psicoeducación", "Herramientas prácticas"],
      link: "/talleres"
    },
    {
      icon: <FaGraduationCap className="text-4xl text-purple-600" />,
      title: "Pláticas y Conferencias",
      description: "Charlas informativas sobre temas de psicología y bienestar emocional.",
      features: ["Empresas", "Instituciones", "Comunidades"],
      link: "/talleres"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mis Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada proceso terapéutico es diseñado considerando tus necesidades únicas 
            y objetivos específicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gray-50 rounded-2xl mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="inline-block bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={service.link}
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  Más información
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para comenzar tu proceso de transformación?
              </h3>
              <p className="text-primary-100">
                La primera consulta es un espacio para conocernos, identificar tus necesidades 
                y diseñar juntos un plan terapéutico personalizado.
              </p>
            </div>
            
            <div>
              <Link
                to="/contacto"
                className="inline-block bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg"
              >
                Contactar ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;