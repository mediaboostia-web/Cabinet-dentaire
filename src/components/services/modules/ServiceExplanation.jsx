import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function ServiceExplanation({ data }) {
  return (
    <section className="py-24 bg-medical-dark relative overflow-hidden">
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[140%] bg-medical-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block">
              Expertise Médicale
            </span>
            <h2 className="font-cinzel text-4xl lg:text-5xl text-white font-bold mb-8 leading-tight">
              {data.explanation.title}
            </h2>
            <div className="w-20 h-1 bg-medical-gold mb-8" />
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {data.explanation.content}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl relative">
              <ShieldCheck className="absolute top-6 right-6 text-medical-gold/20 w-32 h-32" />
              <h3 className="font-cinzel text-2xl text-medical-gold font-bold mb-6 relative z-10">
                Pourquoi c'est important ?
              </h3>
              <p className="text-white/90 text-lg leading-relaxed relative z-10 italic">
                "{data.explanation.importance}"
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
