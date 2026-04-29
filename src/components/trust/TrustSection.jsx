import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Stethoscope, Microscope } from 'lucide-react';
import trustImage from '../../../asset/Images/Dentiste du gabon cabinet guedet.jpg';

const pillars = [
  {
    title: "Savoir-Faire Médical",
    description: "Une équipe d'experts appliquant des protocoles internationaux stricts pour des diagnostics fiables et des soins durables.",
    icon: Stethoscope
  },
  {
    title: "Technologie de Pointe",
    description: "Des équipements de dernière génération et une imagerie avancée pour garantir précision, sécurité et confort.",
    icon: Microscope
  },
  {
    title: "Hygiène & Stérilisation",
    description: "Nous appliquons les standards de sécurité sanitaire les plus élevés pour protéger chaque patient à chaque instant.",
    icon: ShieldCheck
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-medical-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side - Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src={trustImage} 
                alt="Dentiste du gabon cabinet guedet" 
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-medical-dark/20 mix-blend-multiply" />
            </div>
            {/* Decorative block behind image */}
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border-r-2 border-b-2 border-medical-gold/30 -z-10 rounded-br-3xl" />
          </motion.div>

          {/* Content Side - Right */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block">
                Votre Confiance
              </span>
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight">
                L'engagement de <br/> l'excellence.
              </h2>
              <p className="text-white/70 text-lg mb-12">
                Nous ne faisons aucun compromis sur la qualité de nos soins. Au Cabinet Dentaire Guedet Mackana, chaque détail est pensé pour votre sécurité et votre sérénité.
              </p>
            </motion.div>

            <div className="space-y-10">
              {pillars.map((pillar, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.2), duration: 0.6 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-medical-gold/10 group-hover:border-medical-gold/30 transition-all duration-300">
                    <pillar.icon size={28} className="text-medical-gold" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-2xl text-white font-bold mb-2 group-hover:text-medical-gold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12"
            >
              <a href="#contact" className="inline-block bg-medical-gold text-medical-dark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                Prendre rendez-vous
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
