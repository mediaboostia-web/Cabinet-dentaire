import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall, ArrowRight } from 'lucide-react';
const bgImage = '/asset/Images/Equipement-dentiste-cabinet-guedet.jpg';

export default function FinalCTA() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Scale Animation on Hover/Scroll */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={bgImage} 
          alt="Équipement dentaire moderne" 
          className="w-full h-full object-cover"
        />
        {/* Deep blue gradient overlay for readability and premium feel */}
        <div className="absolute inset-0 bg-medical-dark/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-medical-dark/30" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-medical-gold/20 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-medical-gold/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-3xl"
        >
          <span className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block">
            Passez à l'action
          </span>
          
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-6 leading-tight">
            N'attendez plus pour <br/> <span className="text-medical-gold italic">sourire à la vie.</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
            Notre équipe est prête à vous accueillir dans un cadre prestigieux et apaisant. Prenez rendez-vous dès aujourd'hui.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary CTA */}
            <a href="#/contact" className="group relative flex items-center justify-center gap-3 bg-medical-gold text-medical-dark px-10 py-5 rounded-full font-bold text-lg w-full sm:w-auto overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              <Calendar size={24} className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
              <span>Réserver ma consultation</span>
              <div className="absolute inset-0 rounded-full ring-2 ring-medical-gold/60 animate-pulse-slow" />
            </a>

            {/* Secondary CTA */}
            <a 
              href="https://wa.me/24162526272" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-white text-medical-dark px-10 py-5 rounded-full font-bold text-lg w-full sm:w-auto hover:bg-gray-100 transition-all"
            >
              <PhoneCall size={24} className="text-green-600 group-hover:rotate-12 transition-transform" />
              <span>Service Client</span>
              <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
