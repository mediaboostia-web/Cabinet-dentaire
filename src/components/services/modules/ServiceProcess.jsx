import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceProcess({ data }) {
  return (
    <section className="py-32 bg-medical-ivory relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Déroulement du soin
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-4xl md:text-5xl text-medical-dark font-bold"
          >
            Un processus pensé pour vous.
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-medical-dark/10 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {data.process.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-medical-ivory shadow-lg flex items-center justify-center z-10">
                    <span className="font-cinzel font-bold text-medical-gold text-lg">
                      {step.step}
                    </span>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-medical-dark/5">
                      <h3 className="font-cinzel text-2xl font-bold text-medical-dark mb-3">
                        {step.title}
                      </h3>
                      <p className="text-medical-dark/70 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
