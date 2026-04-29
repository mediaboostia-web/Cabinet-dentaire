import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Droplet, 
  Sparkles, 
  Activity, 
  Syringe, 
  ShieldCheck, 
  Layers, 
  AlertCircle, 
  Baby, 
  Scaling
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Consultation Dentaire Générale",
    subtitle: "Le point d'entrée de tout parcours",
    description: "Examen complet de la bouche et des dents. Diagnostic des caries, infections, douleurs. Radiographie si nécessaire et plan de traitement personnalisé.",
    icon: Stethoscope,
    slug: "consultation-dentaire-generale"
  },
  {
    id: 2,
    title: "Détartrage & Hygiène",
    subtitle: "Prévention et santé des gencives",
    description: "Nettoyage professionnel, élimination du tartre et prévention des maladies parodontales pour des gencives parfaitement saines.",
    icon: Droplet,
    slug: "detartrage-hygiene"
  },
  {
    id: 3,
    title: "Soins Esthétiques",
    subtitle: "Amélioration du sourire",
    description: "Le 'make-up médical' de votre sourire : blanchiment dentaire, facettes et alignement esthétique léger pour une harmonie parfaite.",
    icon: Sparkles,
    slug: "soins-esthetiques"
  },
  {
    id: 4,
    title: "Traitement des Caries",
    subtitle: "Soigner les dents abîmées",
    description: "Obturations modernes, résine composite esthétique et reconstruction des dents pour soulager vos douleurs instantanément.",
    icon: Activity,
    slug: "traitement-caries"
  },
  {
    id: 5,
    title: "Endodontie",
    subtitle: "Sauver les dents infectées",
    description: "Traitement de racine précis, nettoyage interne des canaux et dévitalisation pour éviter l'extraction et soulager les douleurs profondes.",
    icon: Syringe,
    slug: "endodontie"
  },
  {
    id: 6,
    title: "Implantologie Dentaire",
    subtitle: "Remplacement des dents manquantes",
    description: "La reconstruction premium. Pose d'implants et couronnes pour une solution fixe durable, restaurant fonction et esthétique.",
    icon: ShieldCheck,
    slug: "implantologie"
  },
  {
    id: 7,
    title: "Prothèses Dentaires",
    subtitle: "Remplacement des dents perdues",
    description: "Prothèses fixes (couronnes, bridges) ou amovibles conçues sur mesure pour retrouver une mastication et un sourire parfaits.",
    icon: Layers,
    slug: "protheses-dentaires"
  },
  {
    id: 8,
    title: "Urgences Dentaires",
    subtitle: "Intervention rapide",
    description: "Prise en charge immédiate des douleurs aiguës, abcès, dents cassées ou traumatismes. Un service critique pour vous soulager.",
    icon: AlertCircle,
    slug: "urgences-dentaires"
  },
  {
    id: 9,
    title: "Soins Pédiatriques",
    subtitle: "Dentisterie infantile",
    description: "Suivi de croissance, prévention et traitement tout en douceur pour éduquer vos enfants à l'hygiène bucco-dentaire.",
    icon: Baby,
    slug: "soins-pediatriques"
  },
  {
    id: 10,
    title: "Orthodontie",
    subtitle: "Alignement des dents",
    description: "Correction des mâchoires et de la position des dents via des appareils modernes ou aligneurs transparents pour un suivi à long terme.",
    icon: Scaling,
    slug: "orthodontie"
  }
];

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-medical-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Nos Expertises
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-medical-dark font-bold"
          >
            L'Art du Soin Dentaire
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Interactive List */}
          <div className="lg:w-1/2 flex flex-col gap-2">
            {services.map((service, index) => {
              const isActive = activeService.id === service.id;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveService(service)}
                  className={`group cursor-pointer p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive 
                      ? 'bg-medical-dark border-medical-dark shadow-xl' 
                      : 'bg-transparent border-transparent hover:bg-medical-ivory'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-cinzel font-bold text-lg ${isActive ? 'text-medical-gold' : 'text-medical-dark/30 group-hover:text-medical-gold/50'}`}>
                      {service.id.toString().padStart(2, '0')}
                    </span>
                    <h3 className={`font-semibold text-lg md:text-xl transition-colors ${isActive ? 'text-white' : 'text-medical-dark group-hover:text-medical-dark/80'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <service.icon 
                    size={24} 
                    className={`transition-all duration-300 ${isActive ? 'text-medical-gold rotate-12 scale-110' : 'text-medical-dark/20 group-hover:text-medical-dark/40'}`} 
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Right: Dynamic Detail Panel */}
          <div className="lg:w-1/2 relative min-h-[400px] flex items-center">
            <div className="absolute inset-0 bg-medical-ivory rounded-3xl -z-10 transform rotate-3 scale-105 transition-transform duration-500" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_50px_rgba(16,40,63,0.05)] border border-medical-dark/5 w-full relative overflow-hidden"
              >
                {/* Decorative background icon */}
                <activeService.icon 
                  className="absolute -right-10 -bottom-10 text-medical-ivory opacity-50 w-64 h-64 -z-0" 
                />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-medical-dark rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <activeService.icon size={32} className="text-medical-gold" />
                  </div>
                  
                  <h4 className="text-medical-gold font-bold tracking-widest uppercase text-sm mb-3">
                    {activeService.subtitle}
                  </h4>
                  
                  <h3 className="font-cinzel text-3xl md:text-4xl text-medical-dark font-bold mb-6 leading-tight">
                    {activeService.title}
                  </h3>
                  
                  <p className="text-medical-dark/70 text-lg leading-relaxed mb-10">
                    {activeService.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <a href={`#/services/${activeService.slug}`} className="inline-flex items-center gap-2 bg-medical-dark text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-medical-gold transition-colors">
                      En savoir plus <Scaling size={16} className="rotate-45" />
                    </a>
                    <a href="#/contact" className="inline-flex items-center gap-2 border-b-2 border-medical-gold pb-1 text-medical-dark font-bold uppercase tracking-wider text-sm hover:text-medical-gold transition-colors">
                      Prendre rendez-vous <Scaling size={16} className="rotate-45" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
