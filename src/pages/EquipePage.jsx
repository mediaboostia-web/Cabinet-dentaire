import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Users, Star, ArrowRight, Quote, CheckCircle, Activity, Target, Zap } from 'lucide-react';

// Import Assets locaux
const heroVideo = '/asset/video/Video-background.mp4';
const drGuedetImg = '/asset/Images/Dentiste du gabon cabinet guedet.jpg';
const equipementImg = '/asset/Images/Equipement-dentiste-cabinet-guedet.jpg';
const patientImg = '/asset/Images/Images patient-cabinet-guedet-libreville.jpg';
const travailImg = '/asset/Images/Image-travail-cabinet-guedet-gabon.jpg';
const operationImg = "/asset/Images/Service d'operation dentaire au gabon.jpg";

export default function EquipePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-medical-light overflow-hidden">
      
      {/* SECTION 1 — HERO & DESCRIPTION DE LA STRUCTURE */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-medical-dark/60 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-medical-dark/40 to-medical-dark z-10"></div>
          
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-medical-gold mb-6 backdrop-blur-md mx-auto">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">L'Humain au cœur du soin</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Cabinet Guedet Mackana <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-gold via-[#FFE898] to-medical-gold">
                L'Excellence Dentaire
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
              Depuis sa création, notre clinique s'engage à offrir une dentisterie d'avant-garde, combinant expertise médicale rigoureuse et accompagnement chaleureux pour chaque patient.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#mot-du-docteur" className="btn-primary flex items-center gap-2 px-8 py-4 bg-medical-gold text-medical-dark font-bold rounded-full hover:bg-white transition-all shadow-lg hover:scale-105">
                Découvrir notre équipe <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — LE MOT DU DOCTEUR */}
      <section id="mot-du-docteur" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <img src={drGuedetImg} alt="Dr Guedet Mackana, Dentiste du Gabon" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">Dr. Guedet Mackana</h3>
                  <p className="text-medical-gold font-medium">Chirurgien-Dentiste Fondateur</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <Quote className="w-20 h-20 text-medical-gold/20 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-8 leading-tight">
                "Redonner le sourire est un acte qui transforme la vie."
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Notre mission dépasse le simple soin dentaire. Nous avons créé ce cabinet avec une conviction profonde : chaque patient mérite d'être écouté, compris et soigné avec les meilleurs standards mondiaux, ici même au Gabon.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Chaque jour, nous mettons un point d'honneur à allier technologie de pointe et douceur, pour que votre passage chez le dentiste devienne une expérience sereine et positive.
              </p>
              <div className="inline-flex items-center gap-4 text-medical-dark font-bold text-xl border-l-4 border-medical-gold pl-6">
                Une approche humaine <br/> et bienveillante
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — LES COMPÉTENCES ET LES MÉDECINS */}
      <section id="medecins" className="py-24 bg-medical-ivory relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-medical-dark mb-6">L'Expertise à Votre Service</h2>
            <p className="text-gray-600 text-lg">Une équipe de praticiens passionnés, continuellement formés aux dernières avancées de la médecine dentaire moderne.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Equipe 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={travailImg} alt="Equipe de soins" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-medical-dark/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-medical-gold text-medical-dark text-xs font-bold uppercase py-1 px-3 rounded-full">
                  Implantologie & Chirurgie
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-medical-dark mb-3">Pôle Chirurgical</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Des chirurgiens-dentistes experts en reconstruction globale, alliant précision chirurgicale et sens esthétique pour des résultats naturels et durables.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-medical-dark font-medium"><CheckCircle className="w-5 h-5 text-medical-gold" /> Spécialistes Implants 3D</li>
                  <li className="flex items-center gap-3 text-medical-dark font-medium"><CheckCircle className="w-5 h-5 text-medical-gold" /> Extractions complexes</li>
                </ul>
              </div>
            </motion.div>

            {/* Equipe 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={operationImg} alt="Opération dentaire" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-medical-dark/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-medical-blue text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                  Soins & Esthétique
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-medical-dark mb-3">Pôle Esthétique & Soins</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Reconnus pour leur douceur et leur patience, nos praticiens sont spécialisés dans les soins conservateurs, la gestion de la douleur et l'esthétique dentaire.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-medical-dark font-medium"><CheckCircle className="w-5 h-5 text-medical-blue" /> Facettes & Smile Design</li>
                  <li className="flex items-center gap-3 text-medical-dark font-medium"><CheckCircle className="w-5 h-5 text-medical-blue" /> Gestion de l'anxiété patient</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — STATISTIQUES ET RECOMMANDATIONS */}
      <section className="py-24 bg-medical-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-gold rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">L'Excellence Prouvée en Chiffres</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Notre équipement de pointe et notre rigueur médicale nous permettent de garantir des soins d'une qualité exceptionnelle. Les chiffres parlent d'eux-mêmes.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "Années d'expérience", icon: <Award className="w-8 h-8 text-medical-gold mb-4" /> },
                  { number: "5000+", label: "Sourires Restaurés", icon: <Heart className="w-8 h-8 text-medical-gold mb-4" /> },
                  { number: "98%", label: "Taux de Satisfaction", icon: <Star className="w-8 h-8 text-medical-gold mb-4" /> },
                  { number: "100%", label: "Stérilisation Normée", icon: <ShieldCheck className="w-8 h-8 text-medical-gold mb-4" /> }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                    {stat.icon}
                    <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-white/70 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <img src={equipementImg} alt="Équipement dentiste" className="w-full h-full object-cover aspect-[4/3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/90 via-medical-dark/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <Quote className="w-10 h-10 text-medical-gold mb-4" />
                <p className="text-xl text-white font-medium italic mb-4">"Une technologie de pointe au service de votre bien-être. C'est ça, la promesse Guedet Mackana."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LE CHOIX */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-medical-dark mb-6">Pourquoi faire de nous Votre Choix ?</h2>
            <p className="text-gray-600 text-lg">Découvrez ce qui fait du Cabinet Guedet Mackana le lieu idéal pour votre santé dentaire au Gabon.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 w-full relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="absolute inset-0 bg-medical-blue/20 rounded-3xl transform -rotate-3 scale-105 transition-transform group-hover:-rotate-6"></div>
                <img src={patientImg} alt="Patient satisfait" className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
                
                {/* Floating element */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-medical-dark font-bold">Confiance & Sécurité</div>
                    <div className="text-gray-500 text-sm">Accompagnement VIP</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 space-y-6 w-full">
              {[
                { title: "Plateau Technique Ultra-Moderne", desc: "Radiographie 3D, scanners intra-oraux, et lasers dentaires pour des diagnostics ultra-précis.", icon: <Zap className="w-6 h-6 text-white" /> },
                { title: "Douleur Zéro", desc: "Protocoles anesthésiques avancés et ambiance apaisante pour une relaxation totale.", icon: <Heart className="w-6 h-6 text-white" /> },
                { title: "Transparence Totale", desc: "Des devis clairs, détaillés et expliqués. Pas de mauvaises surprises.", icon: <Users className="w-6 h-6 text-white" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group cursor-pointer bg-medical-ivory hover:bg-medical-dark p-6 rounded-3xl transition-all duration-300 border border-transparent hover:border-medical-gold/30"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-medical-dark group-hover:bg-medical-gold flex items-center justify-center shrink-0 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-medical-dark group-hover:text-white mb-2 transition-colors">{item.title}</h3>
                      <p className="text-gray-600 group-hover:text-white/80 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <div className="pt-8">
                <a href="#/services" className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-medical-gold text-medical-dark font-bold rounded-full hover:bg-medical-dark hover:text-white transition-all shadow-xl">
                  Explorer nos services <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
