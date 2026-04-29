import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../../asset/Images/Images patient-cabinet-guedet-libreville.jpg';
import img2 from '../../../asset/Images/Image-cabinet-dentaire.jpg';

const steps = [
  {
    id: "01",
    title: "Le Premier Contact",
    description: "Un échange simple et rapide via WhatsApp ou téléphone pour comprendre votre besoin et planifier votre venue sans aucun stress.",
    image: img1,
  },
  {
    id: "02",
    title: "Diagnostic & Écoute",
    description: "Lors de votre consultation, nous prenons le temps de vous écouter, d'examiner votre sourire et de vous expliquer chaque étape avec transparence.",
    image: img2,
  },
  {
    id: "03",
    title: "Soins & Sérénité",
    description: "Des traitements réalisés en douceur avec un plateau technique de pointe. Repartez avec le sourire que vous méritez.",
    image: img1, // Reusing image since we only have a few suitable ones, could use a different one
  }
];

export default function PatientFlow() {
  return (
    <section className="py-24 bg-medical-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Le Parcours Patient
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-medical-dark font-bold"
          >
            Une expérience apaisante.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              className="relative group h-[500px] rounded-3xl overflow-hidden cursor-default"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-medical-dark/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-cinzel text-5xl text-medical-gold/50 font-bold block mb-4">
                    {step.id}
                  </span>
                  <h3 className="font-cinzel text-2xl text-white font-bold mb-4">
                    {step.title}
                  </h3>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-white/80 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
