import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './presentation/components/layout/Navbar';
import Footer from './presentation/components/layout/Footer';
import HomePage from './presentation/pages/HomePage';
import AboutPage from './presentation/pages/AboutPage';
import ServicesPage from './presentation/pages/ServicesPage';
import WorkshopsPage from './presentation/pages/WorkshopsPage';
import ContactPage from './presentation/pages/ContactPage';
import WhoWeArePage from './presentation/pages/WhoWeArePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/acerca" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/talleres" element={<WorkshopsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/quienes-somos" element={<WhoWeArePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;