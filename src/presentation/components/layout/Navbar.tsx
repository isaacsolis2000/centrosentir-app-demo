// src/presentation/components/layout/Navbar.tsx
import React, { useState } from 'react';
import logoSentir from '../../../assets/logo-sentir.png'
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/quienes-somos', label: '¿Quiénes somos?' },
    { path: '/acerca', label: 'Acerca de mí' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/talleres', label: 'Talleres y Pláticas' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo "Sentir" */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoSentir} alt="Logo Sentir" className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800 tracking-tight">Centro Sentir</span>
              <span className="text-xs text-gray-500">Psicoterapia Integrativa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-primary-600 font-semibold border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-500'
                } transition-colors duration-200 py-2`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 ${
                  location.pathname === item.path
                    ? 'bg-primary-50 text-primary-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                } transition-colors duration-200 rounded-lg`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;