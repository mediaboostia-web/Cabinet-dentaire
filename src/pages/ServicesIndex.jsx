import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Sparkles, PlusSquare, ArrowRight, CheckCircle2, Phone, Calendar, Clock, Star, Users, Activity, Search, Shield, Zap, Heart } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import imgEsthetique from '../../asset/Images/Cabinet dentaire libreville.jpg';
import imgConfiance from '../../asset/Images/Dentiste du gabon cabinet guedet.jpg';
import imgUrgence from '../../asset/Images/Images patient-cabinet-guedet-libreville.jpg';
import imgPrevn from '../../asset/Images/Image-cabinet-dentaire.jpg';
import imgRemp from '../../asset/Images/Image-travail-cabinet-guedet-gabon.jpg';

const getIllustrationForService = (slug) => {
  const map = {
    'consultation-dentaire-generale': {
      icon: Search,
      color: "from-blue-400 to-cyan-400",
      bgShape: "bg-blue-100",
      textColor: "text-blue-600"
    },
    'detartrage-hygiene': {
      icon: Sparkles,
      color: "from-teal-400 to-emerald-400",
      bgShape: "bg-teal-100",
      textColor: "text-teal-600"
    },
    'traitement-caries': {
      icon: ShieldCheck,
      color: "from-amber-400 to-orange-400",
      bgShape: "bg-amber-100",
      textColor: "text-amber-600"
    },
    'endodontie': {
      icon: Activity,
      color: "from-rose-400 to-red-400",
      bgShape: "bg-rose-100",
      textColor: "text-rose-600"
    },
    'urgences-dentaires': {
      icon: Zap,
      color: "from-red-500 to-pink-500",
      bgShape: "bg-red-100",
      textColor: "text-red-600"
    },
    'soins-pediatriques': {
      icon: Heart,
      color: "from-purple-400 to-fuchsia-400",
      bgShape: "bg-purple-100",
      textColor: "text-purple-600"
    },
    'soins-esthetiques': {
      icon: Star,
      color: "from-medical-gold to-yellow-400",
      bgShape: "bg-yellow-100",
      textColor: "text-medical-gold"
    },
    'orthodontie': {
      icon: Users,
      color: "from-indigo-400 to-blue-500",
      bgShape: "bg-indigo-100",
      textColor: "text-indigo-600"
    },
    'implantologie': {
      icon: CheckCircle2,
      color: "from-medical-gold to-orange-400",
      bgShape: "bg-yellow-100",
      textColor: "text-medical-dark"
    },
    'protheses-dentaires': {
      icon: Shield,
      color: "from-slate-400 to-gray-400",
      bgShape: "bg-slate-100",
      textColor: "text-slate-600"
    },
  };
  return map[slug] || { icon: PlusSquare, color: "from-gray-400 to-gray-500", bgShape: "bg-gray-100", textColor: "text-gray-600" };
};

const ServiceCard = ({ service, delay }) => {
  const illu = getIllustrationForService(service.slug);
  const Icon = illu.icon;
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500"
    >
      {/* Illustration Section (replaces images) */}
      <div className={`relative h-48 w-full flex items-center justify-center overflow-hidden bg-gradient-to-br ${illu.color}`}>
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full mix-blend-overlay filter blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full mix-blend-overlay filter blur-2xl transform -translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
        
        {/* Main Icon Illustration */}
        <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-xl border border-white/40 transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500">
          <Icon className="w-10 h-10 text-white drop-shadow-md" />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col relative bg-white">
        <h4 className={`text-xl font-extrabold mb-2 ${illu.textColor} group-hover:text-medical-dark transition-colors duration-300`}>
          {service.title}
        </h4>
        
        {service.cardInfo ? (
          <div className="flex-1 flex flex-col space-y-4 mb-6 mt-2">
            <p className="text-sm font-semibold text-gray-800 flex items-start gap-2">
              <span className="text-base">🎯</span>
              <span>{service.cardInfo.goal}</span>
            </p>
            
            <ul className="text-sm text-gray-600 space-y-2 flex-1">
              {service.cardInfo.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${illu.color}`}></div>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className={`p-3 rounded-xl ${illu.bgShape} border border-white/50 text-sm font-medium text-gray-700 flex items-start gap-2`}>
              <span className="text-base">👉</span>
              <span className="leading-tight">{service.cardInfo.highlight}</span>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
            Découvrez notre expertise pour ce traitement adapté à vos besoins spécifiques.
          </p>
        )}
        
        {/* CTA Button */}
        <a 
          href={`#/services/${service.slug}`}
          className={`mt-auto flex items-center justify-between w-full px-5 py-3 bg-gray-50 text-gray-700 font-bold rounded-xl group-hover:bg-medical-dark group-hover:text-white transition-all duration-300 shadow-sm border border-gray-100`}
          aria-label={`Réserver ou en savoir plus sur : ${service.title}`}
        >
          <span>Consulter les détails</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
};

const ServicesIndex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group services
  const soinsGeneraux = servicesData.filter(s => ['consultation-dentaire-generale', 'detartrage-hygiene', 'traitement-caries', 'endodontie', 'urgences-dentaires', 'soins-pediatriques'].includes(s.slug));
  const soinsEsthetiques = servicesData.filter(s => ['soins-esthetiques', 'orthodontie'].includes(s.slug));
  const soinsReparateurs = servicesData.filter(s => ['implantologie', 'protheses-dentaires'].includes(s.slug));

  const needs = [
    {
      title: "Urgence & Douleur",
      desc: "Soulagement immédiat et traitement rapide des infections ou traumatismes.",
      icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
      color: "from-rose-500/20 to-transparent",
      image: imgUrgence
    },
    {
      title: "Esthétique & Sourire",
      desc: "Retrouvez un sourire éclatant et aligné qui vous redonne confiance.",
      icon: <Sparkles className="w-8 h-8 text-medical-gold" />,
      color: "from-medical-gold/20 to-transparent",
      image: imgEsthetique
    },
    {
      title: "Prévention & Hygiène",
      desc: "Préservez votre capital dentaire et évitez les complications futures.",
      icon: <ShieldCheck className="w-8 h-8 text-medical-blue" />,
      color: "from-medical-blue/20 to-transparent",
      image: imgPrevn
    },
    {
      title: "Remplacement & Reconstruction",
      desc: "Des solutions durables pour remplacer vos dents manquantes.",
      icon: <PlusSquare className="w-8 h-8 text-medical-dark" />,
      color: "from-medical-dark/20 to-transparent",
      image: imgRemp
    }
  ];

  return (
    <main className="min-h-screen bg-medical-light">
      {/* SECTION 1 — HERO ORIENTÉ PROBLÈME */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgEsthetique} 
            alt="Consultation cabinet dentaire Guedet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-medical-dark/80 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-medical-dark via-medical-dark/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-medical-gold mb-6 backdrop-blur-md"
            >
              <Activity className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Chaque problème a une solution</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Ne laissez plus vos <span className="text-medical-gold">douleurs dentaires</span> gâcher votre quotidien.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 mb-10 leading-relaxed"
            >
              Sensibilité au froid, douleurs lancinantes, ou gêne esthétique ? Nous identifions la cause exacte et vous guidons vers le traitement le plus adapté pour retrouver un sourire sain et confiant.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#besoins" className="btn-primary flex items-center justify-center gap-2 px-8 py-4 bg-medical-gold text-medical-dark font-bold rounded-full hover:bg-white hover:scale-105 transition-all">
                Identifier mon besoin
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/24162526272" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition-all">
                Urgence ? Contactez-nous
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRI INTELLIGENT DES BESOINS */}
      <section id="besoins" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Que ressentez-vous aujourd'hui ?</h2>
            <p className="text-gray-600 text-lg">Choisissez ce qui correspond le mieux à votre situation pour découvrir nos solutions adaptées.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {needs.map((need, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img src={need.image} alt={need.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${need.color} to-medical-dark/90`}></div>
                </div>
                
                <div className="relative p-8 h-full min-h-[320px] flex flex-col justify-end">
                  <div className="mb-4 bg-white/20 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
                    {need.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{need.title}</h3>
                  <p className="text-white/80 mb-6 text-sm">{need.desc}</p>
                  <a href="#services-list" className="inline-flex items-center gap-2 text-medical-gold font-semibold group-hover:translate-x-2 transition-transform">
                    Voir les solutions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ARCHITECTURE DES SOINS */}
      <section id="services-list" className="py-24 bg-medical-ivory">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">L'Excellence Dentaire à Libreville</h2>
            <p className="text-gray-600 text-lg">Le Cabinet Guedet Mackana couvre l'intégralité de vos besoins grâce à une expertise médicale complète et des équipements de dernière génération.</p>
          </div>

          <div className="space-y-32">
            {/* Soins Généraux */}
            <div className="relative">
              <div className="mb-12 max-w-3xl">
                <h3 className="text-3xl font-bold text-medical-dark mb-4 flex items-center gap-4">
                  <span className="p-3 bg-medical-gold/10 text-medical-gold rounded-2xl"><ShieldCheck className="w-8 h-8" /></span> 
                  Soins Généraux & Prévention
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  La base d'une santé bucco-dentaire optimale. De la simple consultation de contrôle au traitement des caries en passant par la gestion de vos urgences dentaires, nous assurons la pérennité de votre dentition avec douceur et professionnalisme.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {soinsGeneraux.map((service, idx) => (
                  <ServiceCard key={idx} service={service} delay={idx} />
                ))}
              </div>
            </div>

            {/* Soins Esthétiques */}
            <div className="relative">
              <div className="mb-12 max-w-3xl">
                <h3 className="text-3xl font-bold text-medical-dark mb-4 flex items-center gap-4">
                  <span className="p-3 bg-medical-gold/10 text-medical-gold rounded-2xl"><Sparkles className="w-8 h-8" /></span> 
                  Soins Esthétiques
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  L'harmonie et l'éclat de votre sourire influencent votre confiance en vous. Découvrez nos solutions esthétiques, du blanchiment professionnel à l'orthodontie invisible, pour obtenir le sourire de vos rêves.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {soinsEsthetiques.map((service, idx) => (
                  <ServiceCard key={idx} service={service} delay={idx} />
                ))}
              </div>
            </div>

            {/* Soins Réparateurs */}
            <div className="relative">
              <div className="mb-12 max-w-3xl">
                <h3 className="text-3xl font-bold text-medical-dark mb-4 flex items-center gap-4">
                  <span className="p-3 bg-medical-gold/10 text-medical-gold rounded-2xl"><HeartPulse className="w-8 h-8" /></span> 
                  Soins Réparateurs
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Restaurer la fonction et la beauté de vos dents. Nos solutions d'implantologie et de prothèses (couronnes, bridges) sont réalisées sur-mesure pour vous redonner une mastication parfaite et un confort durable.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {soinsReparateurs.map((service, idx) => (
                  <ServiceCard key={idx} service={service} delay={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PARCOURS PATIENT */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Votre parcours de soin simplifié</h2>
            <p className="text-gray-600 text-lg">Trois étapes simples pour retrouver le sourire sans stress ni complication.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Diagnostic & Écoute",
                desc: "Un premier rendez-vous pour comprendre votre besoin, réaliser un bilan complet et établir un diagnostic précis.",
                icon: <Users className="w-10 h-10 text-medical-blue" />
              },
              {
                step: "02",
                title: "Plan de Traitement",
                desc: "Nous vous proposons un plan d'action sur mesure, transparent et adapté à vos attentes et votre budget.",
                icon: <CheckCircle2 className="w-10 h-10 text-medical-gold" />
              },
              {
                step: "03",
                title: "Soins & Suivi",
                desc: "Réalisation des soins en douceur avec un suivi personnalisé pour garantir la pérennité de votre traitement.",
                icon: <HeartPulse className="w-10 h-10 text-medical-blue" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative bg-medical-ivory p-8 rounded-3xl"
              >
                <div className="text-6xl font-black text-medical-dark/5 absolute top-4 right-6">{item.step}</div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-medical-dark mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PREUVE & CONFIANCE */}
      <section className="py-24 bg-medical-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi faire confiance au Cabinet Guedet ?</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Notre engagement est de vous offrir des soins dentaires de la plus haute qualité, dans un environnement rassurant et avec les technologies les plus avancées du Gabon.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Équipe de praticiens qualifiés et expérimentés",
                  "Plateau technique de dernière génération",
                  "Protocoles stricts d'hygiène et de stérilisation",
                  "Accompagnement personnalisé et sans douleur"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-medical-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-medical-gold" />
                    </div>
                    <span className="text-white/90">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square">
                <img src={imgConfiance} alt="Cabinet Dentaire Guedet Confiance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="flex gap-2 text-medical-gold mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-white font-medium italic">"Une prise en charge exceptionnelle. Dès la première consultation, j'ai été rassuré et le résultat des soins est parfait."</p>
                  <p className="text-white/70 text-sm mt-4">— Patient vérifié</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA FINAL */}
      <section className="py-24 bg-gradient-to-br from-medical-blue to-medical-dark relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-gold rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-gold font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Prendre Rendez-vous
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Prêt à retrouver votre sourire ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Prenez rendez-vous dès aujourd'hui pour une première consultation. Notre équipe est prête à vous accueillir au Cabinet Guedet Mackana.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <a href="https://wa.me/24162526272" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#128C7E] hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg shadow-lg shadow-[#25D366]/30">
              <Phone className="w-6 h-6" /> Discuter sur WhatsApp
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-medical-dark font-bold rounded-full hover:bg-medical-ivory hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg shadow-xl">
              <Calendar className="w-6 h-6" /> Réserver en ligne
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesIndex;
