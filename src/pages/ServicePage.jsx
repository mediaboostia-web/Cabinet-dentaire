import React, { useEffect } from 'react';
import ServiceHero from '../components/services/modules/ServiceHero';
import ServiceProblems from '../components/services/modules/ServiceProblems';
import ServiceExplanation from '../components/services/modules/ServiceExplanation';
import ServiceProcess from '../components/services/modules/ServiceProcess';
import ServiceCTA from '../components/services/modules/ServiceCTA';
import Navbar from '../components/navigation/Navbar';

export default function ServicePage({ serviceData }) {
  
  // Scroll to top when loading the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceData]);

  if (!serviceData) return <div className="pt-40 text-center text-2xl font-cinzel">Service introuvable</div>;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* MODULE 1: Hero SEO & Impact */}
      <ServiceHero data={serviceData} />
      
      {/* MODULE 2: Identification & Symptômes */}
      <ServiceProblems data={serviceData} />
      
      {/* MODULE 3: Autorité Médicale & Explication */}
      <ServiceExplanation data={serviceData} />
      
      {/* MODULE 4: Déroulement & UX Simplifié */}
      <ServiceProcess data={serviceData} />
      
      {/* MODULE 5: CTA Final Conversion */}
      <ServiceCTA data={serviceData} />
      
    </div>
  );
}
