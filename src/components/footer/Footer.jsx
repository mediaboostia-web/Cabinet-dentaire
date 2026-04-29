import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medical-dark pt-20 pb-10 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-16">
          
          <div className="flex flex-col gap-6">
            <span className="font-cinzel text-3xl text-white font-bold tracking-wider">
              CABINET DENTAIRE
            </span>
            <p className="text-white/70 leading-relaxed font-light">
              L'excellence dentaire à Libreville. Un cabinet haut de gamme dédié à la santé et l'esthétique de votre sourire.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-cinzel text-xl text-medical-gold font-bold">Contactez-nous</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 text-white/80">
                <Phone className="text-medical-gold flex-shrink-0 mt-1" size={20} /> 
                <span className="font-medium">+241 62 52 62 72</span>
              </li>
              <li className="flex items-start gap-4 text-white/80">
                <MapPin className="text-medical-gold flex-shrink-0 mt-1" size={20} /> 
                <span>Kalikak pont de gué gué derrière l'ambassade du Brésil, Libreville, Gabon, 20049</span>
              </li>
              <li className="flex items-start gap-4 text-white/80">
                <Mail className="text-medical-gold flex-shrink-0 mt-1" size={20} /> 
                <span>cabinetdentairegm@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Clock className="w-5 h-5 text-medical-gold shrink-0 mt-1" />
                <span>Lun - Ven : 08h00 - 12h00 / 13h00 - 17h30 <br/> Sam : 08h00 - 11h30</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-cinzel text-xl text-medical-gold font-bold">Prendre Rendez-vous</h4>
            <p className="text-white/70 font-light">
              Notre équipe est à votre disposition pour planifier votre consultation.
            </p>
            <a 
              href="https://wa.me/24162526272" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-medical-dark px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-medical-gold hover:text-white transition-all w-full lg:w-auto mt-2"
            >
              Contact via WhatsApp
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Cabinet Dentaire. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-medical-gold transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-medical-gold transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
