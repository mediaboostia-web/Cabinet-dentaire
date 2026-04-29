import React, { useState, useEffect } from 'react';
import Navbar from './components/navigation/Navbar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import ServicesIndex from './pages/ServicesIndex';
import EquipePage from './pages/EquipePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { servicesData } from './data/servicesData';
import Footer from './components/footer/Footer';


function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Détermination de la page à afficher selon le hash
  let content;
  
  if (currentHash === '#/services') {
    content = (
      <>
        <Navbar />
        <ServicesIndex />
      </>
    );
  } else if (currentHash === '#/equipe' || currentHash === '#equipe') {
    content = (
      <>
        <Navbar />
        <EquipePage />
      </>
    );
  } else if (currentHash === '#/blog' || currentHash === '#blog') {
    content = (
      <>
        <Navbar />
        <BlogPage />
      </>
    );
  } else if (currentHash === '#/contact' || currentHash === '#contact') {
    content = (
      <>
        <Navbar />
        <ContactPage />
      </>
    );
  } else if (currentHash.startsWith('#/services/')) {
    const serviceIdentifier = currentHash.replace('#/services/', '');
    const serviceData = servicesData.find(
      s => s.id.toString() === serviceIdentifier || s.slug === serviceIdentifier
    );
    content = <ServicePage serviceData={serviceData} />;
  } else {
    // Page d'accueil par défaut (hash vide, ou #accueil, etc.)
    content = (
      <>
        <Navbar />
        <Home />
      </>
    );
  }

  return (
    <>
      {content}
      <Footer />
    </>
  );
}

export default App;
