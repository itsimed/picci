import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

interface LanguageContextType {
  currentLanguage: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Navbar
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.catalog': { fr: 'Véhicules', en: 'Catalog' },
  'nav.about': { fr: 'Notre Expertise', en: 'About' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  
  // Hero Section
  'hero.title': { fr: 'Tiger Bec Cars', en: 'Tiger Bec Cars' },
  'hero.subtitle': { fr: 'Spécialiste Automobile d\'Élite', en: 'Elite Automotive Specialist' },
  'hero.heading': { fr: "Votre Spécialiste Automobile d'Exception", en: "Your Exceptional Automotive Specialist" },
  'hero.description': { fr: "Chez Tiger Bec Cars, chaque véhicule raconte une histoire d'excellence. Depuis des décennies, nous sélectionnons avec passion les automobiles d'exception qui méritent une seconde vie entre vos mains.", en: "At Tiger Bec Cars, every vehicle tells a story of excellence. For decades, we have been passionately selecting exceptional automobiles that deserve a second life in your hands." },
  'hero.cta.catalog': { fr: 'Découvrir nos Véhicules', en: 'Discover our Vehicles' },
  'hero.cta.contact': { fr: 'Nous Rencontrer', en: 'Meet Us' },
  'hero.cta.video': { fr: "Voir Notre Expertise", en: "See Our Expertise" },
  'hero.cta.scrollDown': { fr: 'Découvrir notre univers', en: 'Discover our world' },
  'hero.established': { fr: "Excellence depuis 1998", en: "Excellence since 1998" },
  
  // Features
  'features.title': { fr: 'L\'Expertise Tiger Bec Cars : Votre Garantie de Sérénité', en: 'Tiger Bec Cars Expertise: Your Guarantee of Peace of Mind' },
  'features.quality.title': { fr: 'Sélection Exceptionnelle', en: 'Exceptional Selection' },
  'features.quality.desc': { fr: 'Chaque automobile passe entre les mains expertes de nos techniciens spécialisés', en: 'Every automobile passes through the expert hands of our specialized technicians' },
  'features.price.title': { fr: 'Transparence Totale', en: 'Complete Transparency' },
  'features.price.desc': { fr: 'Des prix justes et honnêtes, sans surprise ni commission cachée', en: 'Fair and honest prices, without surprises or hidden fees' },
  'features.service.title': { fr: 'Accompagnement Personnel', en: 'Personal Guidance' },
  'features.service.desc': { fr: 'Un conseiller dédié vous guide dans votre choix avec expertise et bienveillance', en: 'A dedicated advisor guides you in your choice with expertise and kindness' },
  
  // Catalog
  'catalog.title': { fr: 'Collection Tiger Bec Cars', en: 'Tiger Bec Cars Collection' },
  'catalog.subtitle': { fr: 'Découvrez des automobiles d\'exception, chacune soigneusement sélectionnée pour son caractère unique et sa qualité irréprochable', en: 'Discover exceptional automobiles, each carefully selected for its unique character and impeccable quality' },
  'catalog.viewAll': { fr: 'Explorer toute la Collection', en: 'Explore the Full Collection' },
  'catalog.fullTitle': { fr: 'Collection Complète Tiger Bec Cars', en: 'Complete Tiger Bec Cars Collection' },
  'catalog.fullSubtitle': { fr: 'Explorez l\'intégralité de notre sélection premium - des trésors automobiles qui n\'attendent que vous', en: 'Explore our complete premium selection - automotive treasures waiting just for you' },
  'catalog.backHome': { fr: 'Retour à l\'Accueil', en: 'Back to Home' },
  'catalog.search': { fr: 'Rechercher', en: 'Search' },
  'catalog.searchPlaceholder': { fr: 'Votre rêve automobile...', en: 'Your automotive dream...' },
  'catalog.category': { fr: 'Style', en: 'Category' },
  'catalog.brand': { fr: 'Marque', en: 'Brand' },
  'catalog.sortBy': { fr: 'Trier par', en: 'Sort by' },
  'catalog.sort.nameAZ': { fr: 'Nom A-Z', en: 'Name A-Z' },
  'catalog.sort.priceDesc': { fr: 'Prix (décroissant)', en: 'Price (descending)' },
  'catalog.sort.yearDesc': { fr: 'Année (récent)', en: 'Year (recent)' },
  'catalog.resetFilters': { fr: 'Nouvelle recherche', en: 'New search' },
  'catalog.noResults': { fr: 'Votre automobile idéale ne figure pas dans cette sélection.', en: 'Your ideal automobile is not in this selection.' },
  'catalog.noResultsSuggestion': { fr: 'Contactez-nous ! Nous dénichons régulièrement de nouveaux trésors.', en: 'Contact us! We regularly find new treasures.' },
  'catalog.stats.exceptionalVehicles': { fr: "Automobiles d'Exception", en: 'Exceptional Automobiles' },
  'catalog.stats.electric': { fr: 'Électrique', en: 'Electric' },
  'catalog.stats.legendaryBrands': { fr: 'Marques Iconiques', en: 'Iconic Brands' },
  'catalog.stats.guaranteedInspection': { fr: 'Expertise Certifiée', en: 'Certified Expertise' },
  
  // Car Details
  'car.price': { fr: 'Prix', en: 'Price' },
  'car.year': { fr: 'Millésime', en: 'Year' },
  'car.mileage': { fr: 'Kilométrage', en: 'Mileage' },
  'car.fuel': { fr: 'Motorisation', en: 'Fuel' },
  'car.transmission': { fr: 'Transmission', en: 'Transmission' },
  'car.power': { fr: 'Puissance', en: 'Power' },
  'car.equipment': { fr: 'Équipements', en: 'Equipment' },
  'car.testDrive': { fr: 'Essai Personnalisé', en: 'Personal Test Drive' },
  'car.financing': { fr: 'Solutions Financement', en: 'Financing Solutions' },
  'car.contact': { fr: 'Nous Contacter', en: 'Contact Us' },
  'car.backCatalog': { fr: 'Retour à la Collection', en: 'Back to Collection' },
  'carNotFoundTitle': { fr: 'Automobile introuvable', en: 'Vehicle not found' },
  'carNotFoundDescription': { fr: "Cette automobile n'est plus disponible ou n'existe pas dans notre collection.", en: 'This automobile is no longer available or does not exist in our collection.' },
  'returnToCatalog': { fr: 'Retour à la collection', en: 'Back to collection' },
  
  // About
  'about.title': { fr: 'L\'Histoire Tiger Bec Cars', en: 'The Tiger Bec Cars Story' },
  'about.description': { fr: 'Depuis 1998, la famille Tiger Bec Cars cultive l\'art de dénicher des automobiles exceptionnelles. Ce qui a commencé comme une passion pour les belles mécaniques s\'est transformé en une expertise reconnue dans l\'univers des véhicules de caractère.', en: 'Since 1998, the Tiger Bec Cars family has cultivated the art of finding exceptional automobiles. What began as a passion for beautiful mechanics has evolved into recognized expertise in the world of character vehicles.' },
  'about.values.title': { fr: 'Nos Valeurs', en: 'Our Values' },
  'about.values.trust': { fr: 'Confiance', en: 'Trust' },
  'about.values.excellence': { fr: 'Excellence', en: 'Excellence' },
  'about.values.service': { fr: 'Service', en: 'Service' },
  'about.history.title': { fr: 'Notre Savoir-Faire', en: 'Our Expertise' },
  'about.history.p1': { fr: "Chez Tiger Bec Cars, nous ne vendons pas simplement des voitures, nous transmettons des émotions. Chaque automobile qui rejoint notre collection a été choisie pour son histoire, son caractère et sa capacité à procurer du plaisir de conduite.", en: "At Tiger Bec Cars, we don't simply sell cars, we transmit emotions. Every automobile that joins our collection has been chosen for its history, character and ability to provide driving pleasure." },
  'about.history.p2': { fr: "Notre processus de sélection rigoureux garantit que seules les automobiles méritant notre confiance intègrent la collection Tiger Bec Cars. Transparence, honnêteté et conseil expert sont les piliers de notre approche familiale.", en: "Our rigorous selection process ensures that only automobiles worthy of our trust join the Tiger Bec Cars collection. Transparency, honesty and expert advice are the pillars of our family approach." },
  'about.experience': { fr: "Années de Passion", en: "Years of Passion" },
  'about.vehiclesSold': { fr: "Histoires Partagées", en: "Stories Shared" },
  'about.imageAlt': { fr: "L'équipe Tiger Bec Cars", en: "The Tiger Bec Cars team" },
  
  // Contact
  'contact.title': { fr: 'Rencontrons-Nous', en: 'Let\'s Meet' },
  'contact.subtitle': { fr: 'Prêt à découvrir votre prochaine automobile ? Notre équipe vous accueille avec plaisir pour échanger sur vos projets.', en: 'Ready to discover your next automobile? Our team welcomes you with pleasure to discuss your projects.' },
  'contact.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.email': { fr: 'Email', en: 'Email' },
  'contact.address': { fr: 'Adresse', en: 'Address' },
  'contact.hours': { fr: 'Horaires', en: 'Hours' },
  'contact.hours.weekdays': { fr: 'Lun - Ven: 9h00 - 18h00', en: 'Mon - Fri: 9:00 AM - 6:00 PM' },
  'contact.hours.saturday': { fr: 'Sam: 9h00 - 17h00', en: 'Sat: 9:00 AM - 5:00 PM' },
  'contact.hours.sunday': { fr: 'Dim: Sur rendez-vous', en: 'Sun: By appointment' },
  'contact.hours.weekend': { fr: 'Sam: 9h00 - 17h00 | Dim: Sur rendez-vous', en: 'Sat: 9:00 AM - 5:00 PM | Sun: By appointment' },
  
  // Contact Info
  'contact.info.title': { fr: 'Nous Trouver', en: 'Find Us' },
  'contact.info.address.title': { fr: 'Showroom', en: 'Showroom' },
  'contact.info.address.line1': { fr: '123 Rue de l\'Automobile', en: '123 Rue de l\'Automobile' },
  'contact.info.address.line2': { fr: 'Quartier Premium', en: 'Quartier Premium' },
  'contact.info.address.line3': { fr: 'Montréal, QC H1A 1B2', en: 'Montréal, QC H1A 1B2' },
  'contact.info.phone.title': { fr: 'Appelez-nous', en: 'Call Us' },
  'contact.info.phone.number': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'contact.info.email.title': { fr: 'Écrivez-nous', en: 'Email Us' },
  'contact.info.email.address': { fr: 'contact@tigerbeccars.com', en: 'contact@tigerbeccars.com' },
  'contact.info.hours.title': { fr: 'Heures d\'Ouverture', en: 'Opening Hours' },
  'contact.info.hours.weekdays': { fr: 'Lundi - Vendredi: 9h00 - 18h00', en: 'Monday - Friday: 9:00 AM - 6:00 PM' },
  'contact.info.hours.weekend': { fr: 'Samedi: 9h00 - 17h00 | Dimanche: Sur rendez-vous', en: 'Saturday: 9:00 AM - 5:00 PM | Sunday: By appointment' },
  
  // Contact Form
  'contact.form.title': { fr: 'Parlons de Votre Projet', en: 'Let\'s Talk About Your Project' },
  'contact.form.name': { fr: 'Votre nom', en: 'Your name' },
  'contact.form.namePlaceholder': { fr: 'Comment vous appelle-t-on ?', en: 'What should we call you?' },
  'contact.form.email': { fr: 'Votre email', en: 'Your email' },
  'contact.form.emailPlaceholder': { fr: 'Pour vous recontacter...', en: 'To get back to you...' },
  'contact.form.phone': { fr: 'Votre téléphone', en: 'Your phone' },
  'contact.form.phonePlaceholder': { fr: 'Pour un contact direct', en: 'For direct contact' },
  'contact.form.message': { fr: 'Votre message', en: 'Your message' },
  'contact.form.messagePlaceholder': { fr: 'Parlez-nous de vos envies automobiles, vos critères, ou posez-nous toutes vos questions...', en: 'Tell us about your automotive desires, your criteria, or ask us any questions...' },
  'contact.form.submit': { fr: 'Envoyer le Message', en: 'Send Message' },
  'contact.form.sending': { fr: 'Envoi en cours...', en: 'Sending...' },
  'contact.form.successMessage': { fr: 'Merci pour votre message ! Un membre de notre équipe vous contactera très rapidement pour échanger sur votre projet.', en: 'Thank you for your message! A member of our team will contact you very quickly to discuss your project.' },
  
  // Footer
  'footer.description': { fr: 'Tiger Bec Cars - Votre partenaire de confiance pour vivre l\'émotion automobile.', en: 'Tiger Bec Cars - Your trusted partner to experience automotive emotion.' },
  'footer.quickLinks': { fr: 'Navigation', en: 'Quick Links' },
  'footer.followUs': { fr: 'Nous Suivre', en: 'Follow Us' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.services.title': { fr: 'Nos Services', en: 'Our Services' },
  'footer.services.usedCars': { fr: "Automobiles d'Exception", en: 'Exceptional Automobiles' },
  'footer.services.inspection': { fr: 'Expertise Technique', en: 'Technical Expertise' },
  'footer.services.warranty': { fr: 'Garantie Sérénité', en: 'Peace of Mind Warranty' },
  'footer.services.tradeIn': { fr: 'Reprise Véhicule', en: 'Vehicle Trade-In' },
  'footer.services.financing': { fr: 'Solutions Financement', en: 'Financing Solutions' },
  
  // Common
  'common.loading': { fr: 'Chargement...', en: 'Loading...' },
  'common.error': { fr: 'Une erreur est survenue', en: 'An error occurred' },
  'common.seeMore': { fr: 'Découvrir', en: 'Discover' },
  'common.km': { fr: 'km', en: 'miles' },
  'common.automatic': { fr: 'Automatique', en: 'Automatic' },
  'common.manual': { fr: 'Manuelle', en: 'Manual' },
  'common.gasoline': { fr: 'Essence', en: 'Gasoline' },
  'common.diesel': { fr: 'Diesel', en: 'Diesel' },
  'common.electric': { fr: 'Électrique', en: 'Electric' },
  'common.hybrid': { fr: 'Hybride', en: 'Hybrid' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[currentLanguage];
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 