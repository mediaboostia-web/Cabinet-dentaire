import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Calendar } from 'lucide-react';

import img1 from '../../../asset/Images/Cabinet dentaire libreville.jpg';
import img2 from '../../../asset/Images/Image-travail-cabinet-guedet-gabon.jpg';
import img3 from '../../../asset/Images/Service d\'operation dentaire au gabon.jpg';

const bgImages = [img1, img2, img3];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={bgImages[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.8, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Cabinet dentaire Guedet"
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-medical-dark/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-medical-dark via-transparent to-medical-dark/30" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20">
        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <div className="w-12 h-[1px] bg-medical-gold" />
            <span className="text-medical-gold font-semibold tracking-widest uppercase text-sm">Cabinet Dentaire</span>
            <div className="w-12 h-[1px] bg-medical-gold" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
          >
            L'excellence médicale<br />
            <span className="text-medical-gold">pour votre sourire.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-light"
          >
            Plongez dans une expérience de soins dentaires où la haute technologie rencontre l'humain.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="#contact" className="group relative flex items-center gap-3 bg-medical-gold text-medical-dark px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105">
              <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
              <span>Consultation</span>
              <div className="absolute inset-0 rounded-full ring-1 ring-medical-gold/50 animate-pulse-slow"></div>
            </a>

            <a 
              href="https://wa.me/24162526272" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              <PhoneCall size={20} className="group-hover:scale-110 transition-transform" />
              <span>Service Client</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
          <motion.div 
            className="w-full h-1/2 bg-medical-gold absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
