import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, MessageCircle, Clock, Navigation } from 'lucide-react';
const videoBackground = '/asset/video/Video-background.mp4';
const ctaImage = '/asset/Images/Image-travail-cabinet-guedet-gabon.jpg';

const ContactPage = () => {
  return (
    <div className="bg-medical-ivory min-h-screen">
      
      {/* SECTION 1 — HERO VIDEO */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-medical-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-medical-dark to-transparent" />
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-medical-gold font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block"
          >
            Gardons le contact
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-cinzel text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Nous Sommes Là Pour <span className="text-medical-gold">Vous</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-light"
          >
            Une urgence, une question ou simplement envie de prendre rendez-vous ? 
            N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — COORDONNÉES GÉOGRAPHIQUES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-medical-dark mb-4">Notre Emplacement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Le Cabinet Guedet Mackana est idéalement situé à Libreville pour faciliter votre accès aux soins dentaires d'excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-medical-dark text-white rounded-3xl p-10 flex flex-col justify-center shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-medical-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <MapPin className="text-medical-gold w-8 h-8" />
                Adresse & Accès
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-medical-gold font-semibold mb-2">Adresse Principale</h4>
                  <p className="text-white/80 leading-relaxed">
                    Kalikak pont de gué gué derrière l'ambassade du Brésil,<br />
                    Libreville, Gabon, 20049
                  </p>
                </div>
                
                <hr className="border-white/10" />
                
                <div>
                  <h4 className="text-medical-gold font-semibold mb-2">Repères d'accès</h4>
                  <ul className="text-white/80 space-y-2">
                    <li className="flex items-center gap-2">
                      <Navigation size={16} className="text-medical-gold/60" /> Quartier Kalikak
                    </li>
                    <li className="flex items-center gap-2">
                      <Navigation size={16} className="text-medical-gold/60" /> Pont de Gué Gué
                    </li>
                    <li className="flex items-center gap-2">
                      <Navigation size={16} className="text-medical-gold/60" /> Derrière l'ambassade du Brésil
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 h-[400px] md:h-auto rounded-3xl overflow-hidden shadow-xl"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7570188619623!2d9.444908099999999!3d0.4287813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3bb16efef621%3A0xc3f58066bbbe754f!2sKalikak%20Libreville!5e0!3m2!1sfr!2sga!4v1714000000000!5m2!1sfr!2sga" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte du Cabinet Dentaire Guedet"
                className="w-full h-full object-cover"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DÉMARCHES & CONTACT */}
      <section className="py-24 bg-medical-ivory">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-medical-dark mb-4">Nos Canaux de Contact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choisissez le moyen le plus adapté pour nous joindre. Notre équipe est réactive et à votre écoute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MessageCircle className="w-10 h-10 text-[#25D366]" />,
                title: "WhatsApp",
                desc: "Réponse rapide pour vos prises de rendez-vous et urgences.",
                action: "Discuter maintenant",
                href: "https://wa.me/24162526272",
                color: "group-hover:bg-[#25D366] group-hover:text-white"
              },
              {
                icon: <Phone className="w-10 h-10 text-medical-gold" />,
                title: "Appel Direct",
                desc: "Pour une assistance vocale immédiate avec notre secrétariat.",
                action: "+241 62 52 62 72",
                href: "tel:+24162526272",
                color: "group-hover:bg-medical-gold group-hover:text-white"
              },
              {
                icon: <Mail className="w-10 h-10 text-medical-blue" />,
                title: "Email",
                desc: "Pour l'envoi de documents médicaux ou demandes spécifiques.",
                action: "cabinetdentairegm@gmail.com",
                href: "mailto:cabinetdentairegm@gmail.com",
                color: "group-hover:bg-medical-blue group-hover:text-white"
              },
              {
                icon: <Clock className="w-10 h-10 text-gray-600" />,
                title: "Horaires",
                desc: "Lun-Ven: 08h-12h, 13h-17h30\nSamedi: 08h-11h30",
                action: "Voir l'accès",
                href: "#",
                color: "group-hover:bg-gray-800 group-hover:text-white"
              }
            ].map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                target={method.title === 'WhatsApp' ? "_blank" : undefined}
                rel={method.title === 'WhatsApp' ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col h-full"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-medical-dark mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow whitespace-pre-line">{method.desc}</p>
                <div className={`mt-auto font-semibold text-medical-dark py-3 px-6 rounded-xl bg-gray-50 text-center transition-all duration-300 ${method.color}`}>
                  {method.action}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA MODERN FRAME */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-medical-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl max-w-6xl mx-auto">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-gold/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-medical-blue/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <span className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block">
                  Passez à l'action
                </span>
                <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Prenez le Contrôle de Votre Sourire
                </h2>
                <p className="text-white/80 text-lg mb-10 leading-relaxed">
                  L'équipe du Cabinet Guedet est prête à vous accueillir dans un cadre moderne et rassurant. N'attendez plus pour bénéficier des meilleurs soins dentaires au Gabon.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+24162526272" 
                    className="bg-medical-gold text-medical-dark px-8 py-4 rounded-full font-bold text-center hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Appeler Maintenant
                  </a>
                  <a 
                    href="https://wa.me/24162526272" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative hidden md:block"
              >
                {/* Modern Frame Effect */}
                <div className="absolute inset-0 border-2 border-medical-gold/30 rounded-3xl translate-x-4 translate-y-4" />
                <div className="absolute inset-0 border-2 border-medical-blue/30 rounded-3xl -translate-x-4 -translate-y-4" />
                
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-medical-dark/50">
                  <img 
                    src={ctaImage} 
                    alt="Cabinet Dentaire Moderne Libreville" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                      <p className="text-white font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                        Ouvert et à votre écoute
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
