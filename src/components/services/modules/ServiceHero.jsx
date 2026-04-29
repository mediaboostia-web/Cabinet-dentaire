import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Calendar } from 'lucide-react';

export default function ServiceHero({ data }) {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={data.hero.bgImage} 
          alt={data.seo.h1} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-medical-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-medical-dark/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="w-12 h-[1px] bg-medical-gold" />
            <span className="text-medical-gold font-semibold tracking-widest uppercase text-sm">
              Service Dentaire
            </span>
          </div>

          <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {data.seo.h1}
          </h1>

          <h2 className="text-2xl text-medical-gold/90 mb-6 font-light">
            {data.seo.subtitle}
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            {data.hero.intro}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="#/contact" className="group relative flex items-center justify-center gap-2 bg-medical-gold text-medical-dark px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] w-full sm:w-auto">
              <Calendar size={20} className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
              <span>Prendre RDV</span>
              <div className="absolute inset-0 rounded-full ring-1 ring-medical-gold/50 animate-pulse-slow" />
            </a>

            <a href="https://wa.me/24162526272" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors w-full sm:w-auto">
              <PhoneCall size={20} className="text-green-400 group-hover:rotate-12 transition-transform" />
              <span>+241 62 52 62 72</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
