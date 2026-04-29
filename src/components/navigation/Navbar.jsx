import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, ChevronRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function TopBar() {
  return (
    <div className="bg-medical-dark text-white/80 py-2 hidden lg:block border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-medical-gold" />
            <span>Kalikak pont de gué gué derrière l'ambassade du Brésil, Libreville, Gabon, 20049</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-medical-gold" />
            <span>Lun - Ven : 08h00 - 12h00, 13h00 - 17h30 | Sam : 08h00 - 11h30</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+24162526272" className="flex items-center gap-2 hover:text-medical-gold transition-colors font-semibold text-white">
            <Phone size={16} className="text-medical-gold" />
            <span>+241 62 52 62 72</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '#/services' },
    { name: 'Équipe', href: '#/equipe' },
    { name: 'Blog', href: '#/blog' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <div className="fixed w-full z-[100] transition-all duration-300">
      <TopBar />
      <nav className={`transition-all duration-300 ${scrolled || mobileMenu ? 'bg-medical-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-cinzel text-2xl lg:text-3xl text-white font-bold leading-none tracking-wider">
              CABINET DENTAIRE
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
              <a href="/" className="text-white/90 hover:text-medical-gold uppercase text-sm tracking-wider font-semibold transition-colors relative group">
                Accueil
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-medical-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>



            {navLinks.filter(l => l.name !== 'Accueil').map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 2) * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className="text-white/90 hover:text-medical-gold uppercase text-sm tracking-wider font-semibold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-medical-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <a href="#contact" className="group relative flex items-center justify-center gap-2 bg-medical-gold text-medical-dark px-6 py-3 rounded-full font-bold text-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Calendar size={18} className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
              <span>Prise de RDV</span>
              <div className="absolute inset-0 rounded-full ring-1 ring-medical-gold/60 animate-pulse-slow" />
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-medical-dark border-t border-white/10 overflow-hidden"
            >
              <ul className="flex flex-col p-6 gap-6">

                {navLinks.filter(l => l.name !== 'Accueil').map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={() => setMobileMenu(false)}
                      className="text-white text-lg font-semibold block uppercase tracking-wider hover:text-medical-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-4 border-t border-white/10">
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center justify-center gap-2 bg-medical-gold text-medical-dark px-6 py-4 rounded-full font-bold text-lg w-full"
                  >
                    <Calendar size={20} /> Prise de RDV
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default Navbar;
