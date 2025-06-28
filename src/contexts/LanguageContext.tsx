import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: { fr: string; en: string };
}

// Traductions temporaires - à compléter avec le contenu barbershop
const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.catalog': { fr: 'Services', en: 'Services' },
  'nav.products': { fr: 'Produits', en: 'Products' },
  'nav.about': { fr: 'À Propos', en: 'About' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  'nav.language': { fr: 'EN', en: 'FR' },

  // Hero section - Barbershop
  'hero.title': { fr: 'Votre Barbier Professionnel', en: 'Your Professional Barber' },
  'hero.heading': { fr: 'Votre Barbier Professionnel', en: 'Your Professional Barber' },
  'hero.subtitle': { fr: 'L\'art de la coiffure masculine depuis des générations', en: 'The art of men\'s grooming for generations' },
  'hero.description': { fr: 'Découvrez l\'excellence du service barbier traditionnel avec des techniques modernes.', en: 'Discover excellence in traditional barber service with modern techniques.' },
  'hero.cta': { fr: 'Prendre Rendez-vous', en: 'Book Appointment' },
  'hero.cta.scrollDown': { fr: 'Découvrir nos services', en: 'Discover our services' },

  // About section - Barbershop
  'about.title': { fr: 'L\'Histoire de Notre Barbershop', en: 'Our Barbershop Story' },
  'about.subtitle': { fr: 'Tradition, Excellence et Passion', en: 'Tradition, Excellence and Passion' },
  'about.description': { fr: 'Depuis notre ouverture, nous nous engageons à offrir un service de qualité supérieure, alliant techniques traditionnelles et innovations modernes pour vous garantir une expérience unique.', en: 'Since our opening, we are committed to providing superior service, combining traditional techniques with modern innovations to guarantee you a unique experience.' },
  'about.history.title': { fr: 'Notre Histoire', en: 'Our History' },
  'about.history.p1': { fr: 'Depuis plus de 25 ans, notre barbershop se distingue par son approche authentique et personnalisée. Nous perpétuons les traditions du métier tout en adoptant les techniques les plus modernes.', en: 'For more than 25 years, our barbershop has distinguished itself through its authentic and personalized approach. We perpetuate the traditions of the trade while adopting the most modern techniques.' },
  'about.history.p2': { fr: 'Chaque client est unique et mérite un service sur mesure. Notre équipe de barbiers expérimentés met tout en œuvre pour vous offrir une expérience exceptionnelle à chaque visite.', en: 'Each client is unique and deserves tailor-made service. Our team of experienced barbers does everything possible to offer you an exceptional experience with each visit.' },
  'about.experience': { fr: 'Années d\'expérience', en: 'Years of experience' },
  'about.vehiclesSold': { fr: 'Clients satisfaits', en: 'Satisfied clients' },
  'about.imageAlt': { fr: 'Intérieur du barbershop', en: 'Barbershop interior' },

  // Features section - Barbershop
  'features.title': { fr: 'L\'Expertise Barbier : Votre Garantie de Style', en: 'Barber Expertise: Your Style Guarantee' },
  'features.subtitle': { fr: 'Trois piliers qui font notre réputation', en: 'Three pillars that make our reputation' },
  'features.experience.title': { fr: 'Maîtrise Artisanale', en: 'Artisan Mastery' },
  'features.experience.description': { fr: 'Des barbiers expérimentés qui maîtrisent l\'art traditionnel de la coiffure masculine.', en: 'Experienced barbers who master the traditional art of men\'s grooming.' },
  'features.quality.title': { fr: 'Produits Premium', en: 'Premium Products' },
  'features.quality.description': { fr: 'Nous utilisons exclusivement des produits haut de gamme pour des résultats exceptionnels.', en: 'We exclusively use high-end products for exceptional results.' },
  'features.quality.desc': { fr: 'Nous utilisons exclusivement des produits haut de gamme pour des résultats exceptionnels.', en: 'We exclusively use high-end products for exceptional results.' },
  'features.price.title': { fr: 'Tarifs Transparents', en: 'Transparent Pricing' },
  'features.price.desc': { fr: 'Des prix justes et transparents pour tous nos services, sans surprise.', en: 'Fair and transparent prices for all our services, no surprises.' },
  'features.service.title': { fr: 'Service Personnalisé', en: 'Personalized Service' },
  'features.service.description': { fr: 'Chaque client reçoit une attention particulière et des conseils sur mesure.', en: 'Each client receives special attention and tailor-made advice.' },
  'features.service.desc': { fr: 'Chaque client reçoit une attention particulière et des conseils sur mesure.', en: 'Each client receives special attention and tailor-made advice.' },

  // Catalog section - Services
  'catalog.title': { fr: 'Nos Services', en: 'Our Services' },
  'catalog.subtitle': { fr: 'Découvrez notre gamme complète de services de barbier professionnel', en: 'Discover our complete range of professional barber services' },
  'catalog.viewAllServices': { fr: 'Voir Tous les Services', en: 'View All Services' },

  // Contact section
  'contact.title': { fr: 'Prenons Rendez-vous', en: 'Let\'s Schedule' },
  'contact.subtitle': { fr: 'Réservez votre créneau dès maintenant', en: 'Book your slot now' },
  'contact.form.title': { fr: 'Formulaire de Contact', en: 'Contact Form' },
  'contact.form.name': { fr: 'Votre nom complet', en: 'Your full name' },
  'contact.form.namePlaceholder': { fr: 'Entrez votre nom complet', en: 'Enter your full name' },
  'contact.form.email': { fr: 'Votre adresse email', en: 'Your email address' },
  'contact.form.emailPlaceholder': { fr: 'Entrez votre adresse email', en: 'Enter your email address' },
  'contact.form.phone': { fr: 'Votre numéro de téléphone', en: 'Your phone number' },
  'contact.form.phonePlaceholder': { fr: 'Entrez votre numéro de téléphone', en: 'Enter your phone number' },
  'contact.form.service': { fr: 'Service souhaité', en: 'Desired service' },
  'contact.form.message': { fr: 'Votre message', en: 'Your message' },
  'contact.form.messagePlaceholder': { fr: 'Précisez vos préférences ou questions...', en: 'Specify your preferences or questions...' },
  'contact.form.submit': { fr: 'Prendre Rendez-vous', en: 'Book Appointment' },
  'contact.form.sending': { fr: 'Envoi en cours...', en: 'Sending...' },
  'contact.form.successMessage': { fr: 'Message envoyé avec succès !', en: 'Message sent successfully!' },
  'contact.info.title': { fr: 'Informations de Contact', en: 'Contact Information' },
  'contact.info.address': { fr: '123 Rue Principale, Montréal, QC H2X 1Y4', en: '123 Main Street, Montreal, QC H2X 1Y4' },
  'contact.info.address.title': { fr: 'Adresse', en: 'Address' },
  'contact.info.address.line1': { fr: '123 Rue Principale', en: '123 Main Street' },
  'contact.info.address.line2': { fr: 'Montréal, QC H2X 1Y4', en: 'Montreal, QC H2X 1Y4' },
  'contact.info.address.line3': { fr: 'Canada', en: 'Canada' },
  'contact.info.phone': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'contact.info.phone.title': { fr: 'Téléphone', en: 'Phone' },
  'contact.info.phone.number': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'contact.info.email.label': { fr: 'Email', en: 'Email' },
  'contact.info.email.title': { fr: 'Email', en: 'Email' },
  'contact.info.email.address': { fr: 'contact@barbershop.com', en: 'contact@barbershop.com' },
  'contact.info.hours': { fr: 'Horaires d\'ouverture', en: 'Opening Hours' },
  'contact.info.hours.title': { fr: 'Horaires d\'ouverture', en: 'Opening Hours' },
  'contact.info.hours.weekdays': { fr: 'Lun - Ven: 9h00 - 18h00', en: 'Mon - Fri: 9:00 AM - 6:00 PM' },
  'contact.info.hours.weekend': { fr: 'Sam: 8h00 - 17h00, Dim: Fermé', en: 'Sat: 8:00 AM - 5:00 PM, Sun: Closed' },
  'contact.info.hours.saturday': { fr: 'Samedi: 8h00 - 17h00', en: 'Saturday: 8:00 AM - 5:00 PM' },
  'contact.info.hours.sunday': { fr: 'Dimanche: Fermé', en: 'Sunday: Closed' },

  // HomePage sections
  'home.hero.title1': { fr: 'Un style.', en: 'One style.' },
  'home.hero.title2': { fr: 'Une signature.', en: 'One signature.' },
  'home.hero.description': { fr: 'L\'art de la coiffure masculine rencontre l\'excellence du service. Découvrez l\'expérience barbershop qui révèle votre personnalité.', en: 'The art of men\'s grooming meets service excellence. Discover the barbershop experience that reveals your personality.' },
  'home.hero.cta': { fr: 'Voir nos coupes', en: 'View our cuts' },
  
  // Catalog section
  'home.catalog.title': { fr: 'Nos Services', en: 'Our Services' },
  'home.catalog.cta': { fr: 'Voir tous les services', en: 'View all services' },
  
  // About section
  'home.about.title': { fr: 'L\'Art du Barbershop', en: 'The Art of Barbershop' },
  'home.about.description1': { fr: 'Depuis plus de 20 ans, notre passion pour l\'art de la coiffure masculine nous pousse à redéfinir les standards d\'excellence. Dans notre salon, chaque client vit une expérience unique où tradition et modernité se rencontrent.', en: 'For more than 20 years, our passion for the art of men\'s grooming has driven us to redefine standards of excellence. In our salon, each client experiences a unique encounter where tradition and modernity meet.' },
  'home.about.description2': { fr: 'Nos maîtres barbiers, formés aux techniques les plus avancées, transforment chaque coupe en une signature personnelle. De la coupe classique intemporelle aux styles les plus contemporains, nous créons le look qui révèle votre personnalité.', en: 'Our master barbers, trained in the most advanced techniques, transform each cut into a personal signature. From timeless classic cuts to the most contemporary styles, we create the look that reveals your personality.' },
  'home.about.stats.years': { fr: 'Années d\'expérience', en: 'Years of experience' },
  'home.about.stats.clients': { fr: 'Clients satisfaits', en: 'Satisfied clients' },
  'home.about.stats.passion': { fr: 'Passion du métier', en: 'Passion for the craft' },
  
  // Contact section
  'home.contact.title': { fr: 'Réservez votre rendez-vous', en: 'Book your appointment' },
  'home.contact.description': { fr: 'Prêt à transformer votre style ? Contactez-nous pour réserver votre créneau et découvrir l\'expérience barbershop d\'exception.', en: 'Ready to transform your style? Contact us to book your slot and discover the exceptional barbershop experience.' },
  'home.contact.form.name': { fr: 'Nom complet', en: 'Full name' },
  'home.contact.form.namePlaceholder': { fr: 'Votre nom et prénom', en: 'Your first and last name' },
  'home.contact.form.email': { fr: 'Adresse e-mail', en: 'Email address' },
  'home.contact.form.emailPlaceholder': { fr: 'votre@email.com', en: 'your@email.com' },
  'home.contact.form.message': { fr: 'Message', en: 'Message' },
  'home.contact.form.messagePlaceholder': { fr: 'Décrivez le style que vous recherchez ou posez vos questions...', en: 'Describe the style you\'re looking for or ask your questions...' },
  'home.contact.form.submit': { fr: 'Envoyer le message', en: 'Send message' },
  'home.contact.form.success': { fr: 'Message envoyé ! Nous vous répondrons rapidement.', en: 'Message sent! We will respond quickly.' },
  'home.contact.info.title': { fr: 'Informations pratiques', en: 'Practical information' },
  'home.contact.info.address.label': { fr: 'Adresse', en: 'Address' },
  'home.contact.info.address.street': { fr: '123 Rue Principale', en: '123 Main Street' },
  'home.contact.info.address.city': { fr: 'Montréal, QC H2X 1Y4', en: 'Montreal, QC H2X 1Y4' },
  'home.contact.info.phone.label': { fr: 'Téléphone', en: 'Phone' },
  'home.contact.info.phone.number': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'home.contact.info.email.label': { fr: 'Email', en: 'Email' },
  'home.contact.info.email.address': { fr: 'contact@barbershop.com', en: 'contact@barbershop.com' },
  'home.contact.hours.title': { fr: 'Horaires d\'ouverture', en: 'Opening hours' },
  'home.contact.hours.weekdays': { fr: 'Lundi - Vendredi', en: 'Monday - Friday' },
  'home.contact.hours.weekdaysTime': { fr: '9h00 - 20h00', en: '9:00 AM - 8:00 PM' },
  'home.contact.hours.saturday': { fr: 'Samedi', en: 'Saturday' },
  'home.contact.hours.saturdayTime': { fr: '8h00 - 18h00', en: '8:00 AM - 6:00 PM' },
  'home.contact.hours.sunday': { fr: 'Dimanche', en: 'Sunday' },
  'home.contact.hours.sundayTime': { fr: '10h00 - 17h00', en: '10:00 AM - 5:00 PM' },
  
  // Products section
  'home.products.title': { fr: 'Produits Premium', en: 'Premium Products' },
  'home.products.description': { fr: 'Prolongez l\'expérience barbershop chez vous avec notre sélection de produits haut de gamme. Qualité professionnelle pour un style impeccable au quotidien.', en: 'Extend the barbershop experience at home with our selection of high-end products. Professional quality for impeccable style every day.' },
  'home.products.cta': { fr: 'Découvrir tous nos produits', en: 'Discover all our products' },
  
  // Product Display
  'products.title': { fr: 'PRODUITS', en: 'PRODUCTS' },
  'products.description': { fr: 'Découvrez notre sélection de {count} produits premium pour le styling professionnel', en: 'Discover our selection of {count} premium products for professional styling' },
  'products.categories.coiffage': { fr: 'COIFFAGE', en: 'STYLING' },
  'products.categories.soins': { fr: 'SOINS', en: 'CARE' },
  'products.categories.nettoyage': { fr: 'NETTOYAGE', en: 'CLEANING' },
  
  // Cut Card
  'cutCard.duration': { fr: 'Durée', en: 'Duration' },
  'cutCard.book': { fr: 'Réserver', en: 'Book' },
  'cutCard.difficulty.easy': { fr: 'Facile', en: 'Easy' },
  'cutCard.difficulty.intermediate': { fr: 'Intermédiaire', en: 'Intermediate' },
  'cutCard.difficulty.advanced': { fr: 'Avancé', en: 'Advanced' },
  
  // Navbar
  'navbar.siteName': { fr: 'BarberShop', en: 'BarberShop' },
  'navbar.menuLabel': { fr: 'Menu principal', en: 'Main menu' },
  
  // Common
  'common.seeMore': { fr: 'Découvrir', en: 'Discover' },
  'common.loading': { fr: 'Chargement...', en: 'Loading...' },
  
  // Footer
  'footer.description': { fr: 'Votre barbershop de confiance pour une expérience de coiffure authentique et moderne.', en: 'Your trusted barbershop for an authentic and modern grooming experience.' },
  'footer.quickLinks': { fr: 'Liens Rapides', en: 'Quick Links' },
  'footer.services': { fr: 'Services', en: 'Services' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.followUs': { fr: 'Suivez-nous', en: 'Follow Us' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
};

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  t: (key: string, params?: { [key: string]: string | number }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

  const t = (key: string, params?: { [key: string]: string | number }): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    
    let text = translation[currentLanguage];
    
    // Interpolation de variables
    if (params) {
      Object.keys(params).forEach(paramKey => {
        text = text.replace(`{${paramKey}}`, String(params[paramKey]));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 