import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import ServicesGrid from '../components/services/ServicesGrid';
import TrustSection from '../components/trust/TrustSection';
import PatientFlow from '../components/process/PatientFlow';
import Testimonials from '../components/testimonials/Testimonials';
import FinalCTA from '../components/cta/FinalCTA';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <TrustSection />
      <PatientFlow />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
