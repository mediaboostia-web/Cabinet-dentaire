import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, PlayCircle, Globe, Award, Sparkles, Phone, ArrowRight, BookOpen, Heart } from 'lucide-react';
const videoPresentation = '/asset/video/Video-presentation.mp4';
const imgBlog1 = '/asset/Images/blog joyeux noel.jpg';
const imgBlog2 = '/asset/Images/Images patient-cabinet-guedet-libreville.jpg';
const imgBlog3 = '/asset/Images/Cabinet dentaire libreville.jpg';
const imgHeroFallback = '/asset/Images/Image-cabinet-dentaire.jpg';
const imgEventBg = '/asset/Images/Equipement-dentiste-cabinet-guedet.jpg';
const imgEvent = '/asset/Images/Dentiste du gabon cabinet guedet.jpg';
const imgWorld = '/asset/Images/Image-travail-cabinet-guedet-gabon.jpg';
const imgCTABg = "/asset/Images/Service d'operation dentaire au gabon.jpg";

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const popularPosts = [
    {
      title: "Les secrets d'un sourire éclatant : Mythes et Réalités",
      category: "Esthétique",
      readTime: "5 min",
      image: imgBlog1,
      date: "12 Avril 2026"
    },
    {
      title: "Implants dentaires : Le guide complet avant de se lancer",
      category: "Implantologie",
      readTime: "8 min",
      image: imgBlog2,
      date: "05 Avril 2026"
    },
    {
      title: "Comment l'alimentation influence directement vos gencives",
      category: "Prévention",
      readTime: "4 min",
      image: imgBlog3,
      date: "28 Mars 2026"
    }
  ];

  return (
    <main className="min-h-screen bg-medical-light overflow-hidden">
      
      {/* SECTION 1 — HERO & VIDEO DE PRÉSENTATION EN BOUCLE */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-medical-dark/60 z-10 mix-blend-multiply"></div>
          {/* Fallback pattern / gradient over video */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-medical-dark/40 to-medical-dark z-10"></div>
          
          {/* Generic premium dental video background */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
            poster={imgHeroFallback}
          >
            <source src={videoPresentation} type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="w-20 h-20 bg-medical-gold/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-medical-gold/40 transition-all duration-300 ring-4 ring-medical-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.5)]">
              <PlayCircle className="w-10 h-10 text-medical-gold ml-1" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Le Journal de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-gold via-[#FFE898] to-medical-gold">
                l'Excellence Dentaire
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
              Découvrez nos dernières actualités, des conseils de prévention inédits et les coulisses de notre cabinet au Gabon.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#articles" className="btn-primary flex items-center gap-2 px-8 py-4 bg-medical-gold text-medical-dark font-bold rounded-full hover:bg-white transition-all shadow-lg hover:scale-105">
                Lire nos articles <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — ARTICLES POPULAIRES (HOVER EFFECTS & INTERACTION) */}
      <section id="articles" className="py-32 bg-medical-dark relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-medical-gold/30 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tendances & Découvertes</h2>
              <p className="text-white/60 text-lg">Les articles les plus lus par nos patients pour maintenir une santé bucco-dentaire optimale.</p>
            </div>
            <a href="#tout-voir" className="hidden md:flex items-center gap-2 text-medical-gold font-bold hover:text-white transition-colors mt-6 md:mt-0">
              Voir tout le blog <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {popularPosts.map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-medical-gold/50 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-medical-dark/80 backdrop-blur-md text-medical-gold text-xs font-bold uppercase py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-transparent opacity-80"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-medical-gold transition-colors">
                    <a href="#article-link" className="before:absolute before:inset-0">
                      {post.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 text-medical-gold text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ARTICLE D'ÉVÉNEMENT IMPACTANT */}
      <section className="relative py-32 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgEventBg} 
            alt="Événement Cabinet" 
            className="w-full h-full object-cover fixed"
            style={{ filter: "brightness(0.3) saturate(1.2)" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-medical-dark/60 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 md:p-16 max-w-5xl mx-auto shadow-2xl"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-blue/20 text-medical-blue border border-medical-blue/30 mb-6 font-bold text-sm tracking-widest uppercase">
                  <Sparkles className="w-4 h-4" /> Événement Exclusif
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Semaine de la <span className="text-medical-blue">Prévention Sourire</span> 2026
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Rejoignez-nous du 15 au 20 Juin pour une semaine portes ouvertes inédite au Gabon. Bilans gratuits, ateliers d'hygiène pour les enfants et présentation de nos nouvelles technologies 3D.
                </p>
                <div className="flex items-center gap-6">
                  <a href="#reserve" className="btn-primary px-8 py-4 bg-white text-medical-dark font-bold rounded-full hover:bg-medical-blue hover:text-white transition-all shadow-xl hover:shadow-medical-blue/30">
                    Réserver ma place
                  </a>
                  <span className="text-white/60 font-medium">Places limitées</span>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
                  <img src={imgEvent} alt="Consultation gratuite" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-medical-blue/20 mix-blend-overlay"></div>
                </div>
                {/* Floating Date Badge */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-medical-gold p-6 rounded-2xl shadow-xl text-center"
                >
                  <div className="text-medical-dark font-black text-3xl">15</div>
                  <div className="text-medical-dark/80 font-bold uppercase">Juin</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — L'IMPORTANCE DE CE MÉTIER (VALORISATION MONDIALE) */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-ivory transform -skew-x-12 translate-x-32 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-medical-gold font-bold uppercase tracking-widest mb-6">
                <Globe className="w-6 h-6" /> Vision Mondiale
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-medical-dark mb-8 leading-tight">
                Au-delà d'une dent, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-dark">La Santé Globale.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Aujourd'hui, l'Organisation Mondiale de la Santé (OMS) et les experts internationaux sont unanimes : la santé bucco-dentaire est le miroir de la santé générale. Une infection non traitée peut impacter le cœur, les articulations et affaiblir le système immunitaire.
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                La dentisterie moderne a évolué. Ce n'est plus un acte de dernier recours face à la douleur, mais une **médecine préventive, esthétique et reconstructrice** de haute volée. C'est pourquoi nous intégrons des protocoles internationaux stricts au cœur de Libreville.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-10">
                <div>
                  <Award className="w-10 h-10 text-medical-gold mb-4" />
                  <h4 className="text-xl font-bold text-medical-dark mb-2">Reconnaissance</h4>
                  <p className="text-gray-500 text-sm">Pratiques alignées sur les plus hauts standards médicaux européens et américains.</p>
                </div>
                <div>
                  <BookOpen className="w-10 h-10 text-medical-blue mb-4" />
                  <h4 className="text-xl font-bold text-medical-dark mb-2">Innovation</h4>
                  <p className="text-gray-500 text-sm">Utilisation de l'intelligence artificielle pour le diagnostic et le design du sourire.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img src={imgWorld} alt="Recherche dentaire mondiale" className="w-full object-cover aspect-[3/4]" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Statistic Card */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -left-16 bg-white p-6 rounded-3xl shadow-2xl z-20 max-w-xs border border-gray-100 hidden md:block"
              >
                <div className="text-4xl font-black text-medical-blue mb-2">Impact</div>
                <p className="text-gray-600 font-medium">Un sourire sain augmente l'espérance de vie et favorise la réussite professionnelle sociale mondiale.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CALL TO ACTION (INTERACTIF & ÉPOUSTOUFLANT) */}
      <section className="py-0 relative overflow-hidden">
        <div className="bg-medical-dark rounded-[3rem] mx-4 md:mx-10 mb-10 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          {/* Stunning Background with overlay */}
          <div className="absolute inset-0">
            <img 
              src={imgCTABg} 
              alt="Background CTA" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-medical-dark via-medical-dark/90 to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-gold/20 text-medical-gold mb-6 backdrop-blur-md font-bold uppercase tracking-widest text-sm border border-medical-gold/30">
                  <Heart className="w-4 h-4 fill-current" /> Passez à l'action
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Ne laissez plus votre sourire <span className="italic text-medical-gold font-serif">en attente.</span>
                </h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                  Qu'il s'agisse d'un contrôle de routine, d'une douleur persistante ou d'un désir esthétique, le Cabinet Guedet est prêt à vous offrir l'excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="#/contact" className="group relative px-8 py-5 bg-white text-medical-dark font-bold rounded-full overflow-hidden shadow-xl text-center">
                    <div className="absolute inset-0 bg-medical-ivory transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2 text-lg">
                      Prendre un rendez-vous <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  
                  <a href="https://wa.me/24162526272" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 px-8 py-5 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-center">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,211,102,0.5)]">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg">WhatsApp Rapide</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
