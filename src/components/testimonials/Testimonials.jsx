import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Marie L.",
    city: "Libreville",
    text: "J'avais très peur du dentiste, mais l'équipe a su me rassurer. Le soin s'est passé sans aucune douleur. Un cabinet vraiment exceptionnel où l'on se sent écouté.",
    rating: 5,
    tag: "Urgence dentaire"
  },
  {
    id: 2,
    name: "Jean-Paul M.",
    city: "Akanda",
    text: "Des équipements ultra modernes et une hygiène irréprochable. On se sent vraiment en sécurité. Le résultat de mon blanchiment est absolument parfait.",
    rating: 5,
    tag: "Esthétique"
  },
  {
    id: 3,
    name: "Sophie T.",
    city: "Owendo",
    text: "Le meilleur cabinet que j'ai visité au Gabon. Le standing est international et l'accueil chaleureux. Une prise en charge immédiate pour toute la famille.",
    rating: 5,
    tag: "Soins familiaux"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-medical-dark relative overflow-hidden">
      {/* Decorative text watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
        <span className="font-cinzel text-[15vw] font-bold text-white whitespace-nowrap">
          CONFIANCE
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Header Left */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block">
              Témoignages
            </span>
            <h2 className="font-cinzel text-4xl md:text-5xl text-white font-bold mb-6">
              Ils ont retrouvé le sourire.
            </h2>
            <p className="text-white/60 mb-8">
              La satisfaction de nos patients est notre plus grande fierté. Découvrez leurs expériences au sein de notre cabinet.
            </p>
            
            {/* Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={prev}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-medical-gold hover:border-medical-gold transition-colors"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-medical-gold hover:border-medical-gold transition-colors"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Testimonial Right */}
          <div className="lg:w-2/3 w-full">
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-3xl">
              <Quote className="absolute top-10 right-10 text-white/10 w-24 h-24" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-medical-gold fill-medical-gold" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-10 italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-8">
                    <div>
                      <p className="text-xl font-bold text-white">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-medical-gold">
                        {testimonials[currentIndex].city}
                      </p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm">
                      {testimonials[currentIndex].tag}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
