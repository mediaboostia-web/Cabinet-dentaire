import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall } from 'lucide-react';

export default function ServiceCTA({ data }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-medical-dark p-8 sm:p-12 md:p-20 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl"
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-medical-gold/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              Consultation & Réservation
            </motion.span>
            <h2 className="font-cinzel text-4xl md:text-5xl text-white font-bold mb-6">
              Prêt à retrouver le sourire ?
            </h2>
            <p className="text-white/80 text-xl font-light mb-12 max-w-2xl mx-auto">
              N'attendez plus. Notre équipe est prête à vous recevoir pour votre {data.seo.h1.toLowerCase()} dans les meilleures conditions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#contact" className="group relative flex items-center justify-center gap-2 bg-medical-gold text-medical-dark px-10 py-5 rounded-full font-bold text-lg w-full sm:w-auto overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                <Calendar size={24} className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
                <span>Réserver ma consultation</span>
                <div className="absolute inset-0 rounded-full ring-2 ring-medical-gold/60 animate-pulse-slow" />
              </a>

              <a 
                href="https://wa.me/24162526272" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg w-full sm:w-auto hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <PhoneCall size={24} className="text-green-400 group-hover:rotate-12 transition-transform" />
                <span>WhatsApp Rapide</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
