import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function ServiceProblems({ data }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Symptômes & Identification
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-4xl text-medical-dark font-bold"
          >
            Reconnaissez-vous ces signaux ?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.problems.map((prob, index) => (
            <motion.div 
              key={prob.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-medical-ivory p-8 rounded-3xl border border-medical-dark/5 hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <AlertCircle size={24} className="text-medical-gold" />
              </div>
              <h3 className="text-xl font-bold text-medical-dark mb-4">
                {prob.title}
              </h3>
              <p className="text-medical-dark/70 leading-relaxed">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
