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
  'nav.catalog': { fr: 'Catalogue', en: 'Catalog' },
  'nav.about': { fr: 'À Propos', en: 'About' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  
  // Hero Section
  'hero.title': { fr: 'Tigerbec Cars', en: 'Tigerbec Cars' },
  'hero.subtitle': { fr: 'Véhicules d\'Occasion Premium', en: 'Premium Used Vehicles' },
  'hero.heading': { fr: "Véhicules d'Occasion Premium", en: "Premium Used Vehicles" },
  'hero.description': { fr: "Découvrez notre sélection rigoureuse de véhicules d'occasion de qualité, inspectés et garantis par nos experts.", en: "Discover our rigorous selection of quality used vehicles, inspected and guaranteed by our experts." },
  'hero.cta.catalog': { fr: 'Voir le Catalogue', en: 'View Catalog' },
  'hero.cta.contact': { fr: 'Nous Contacter', en: 'Contact Us' },
  'hero.cta.video': { fr: "Regarder la Vidéo", en: "Watch Video" },
  'hero.cta.scrollDown': { fr: 'Défiler en bas', en: 'Scroll down' },
  'hero.established': { fr: "Depuis 1999", en: "Established Since 1999" },
  
  // Features
  'features.title': { fr: 'Pourquoi Choisir Tigerbec Cars ?', en: 'Why Choose Tigerbec Cars?' },
  'features.quality.title': { fr: 'Qualité Garantie', en: 'Guaranteed Quality' },
  'features.quality.desc': { fr: 'Tous nos véhicules sont rigoureusement inspectés', en: 'All our vehicles are rigorously inspected' },
  'features.price.title': { fr: 'Prix Compétitifs', en: 'Competitive Prices' },
  'features.price.desc': { fr: 'Les meilleurs prix du marché pour des véhicules premium', en: 'Best market prices for premium vehicles' },
  'features.service.title': { fr: 'Service Client', en: 'Customer Service' },
  'features.service.desc': { fr: 'Un accompagnement personnalisé tout au long de votre achat', en: 'Personalized support throughout your purchase' },
  
  // Catalog
  'catalog.title': { fr: 'Notre Catalogue', en: 'Our Catalog' },
  'catalog.subtitle': { fr: 'Découvrez notre sélection de véhicules d\'exception', en: 'Discover our selection of exceptional vehicles' },
  'catalog.viewAll': { fr: 'Voir Tout le Catalogue', en: 'View Full Catalog' },
  'catalog.fullTitle': { fr: 'Catalogue Complet', en: 'Full Catalog' },
  'catalog.fullSubtitle': { fr: 'Tous nos véhicules disponibles', en: 'All our available vehicles' },
  'catalog.backHome': { fr: 'Retour à l\'Accueil', en: 'Back to Home' },
  'catalog.search': { fr: 'Rechercher', en: 'Search' },
  'catalog.searchPlaceholder': { fr: 'Nom, marque, description...', en: 'Name, brand, description...' },
  'catalog.category': { fr: 'Catégorie', en: 'Category' },
  'catalog.brand': { fr: 'Marque', en: 'Brand' },
  'catalog.sortBy': { fr: 'Trier par', en: 'Sort by' },
  'catalog.sort.nameAZ': { fr: 'Nom A-Z', en: 'Name A-Z' },
  'catalog.sort.priceDesc': { fr: 'Prix (décroissant)', en: 'Price (descending)' },
  'catalog.sort.yearDesc': { fr: 'Année (récent)', en: 'Year (recent)' },
  'catalog.resetFilters': { fr: 'Réinitialiser les filtres', en: 'Reset filters' },
  'catalog.noResults': { fr: 'Aucun véhicule ne correspond à vos critères de recherche.', en: 'No vehicles match your search criteria.' },
  'catalog.noResultsSuggestion': { fr: 'Essayez de modifier vos filtres ou votre recherche.', en: 'Try adjusting your filters or search.' },
  'catalog.stats.exceptionalVehicles': { fr: "Véhicules d'Exception", en: 'Exceptional Vehicles' },
  'catalog.stats.electric': { fr: 'Électrique', en: 'Electric' },
  'catalog.stats.legendaryBrands': { fr: 'Marques Légendaires', en: 'Legendary Brands' },
  'catalog.stats.guaranteedInspection': { fr: 'Inspection Garantie', en: 'Guaranteed Inspection' },
  
  // Car Details
  'car.price': { fr: 'Prix', en: 'Price' },
  'car.year': { fr: 'Année', en: 'Year' },
  'car.mileage': { fr: 'Kilométrage', en: 'Mileage' },
  'car.fuel': { fr: 'Carburant', en: 'Fuel' },
  'car.transmission': { fr: 'Transmission', en: 'Transmission' },
  'car.power': { fr: 'Puissance', en: 'Power' },
  'car.equipment': { fr: 'Équipements', en: 'Equipment' },
  'car.testDrive': { fr: 'Essai Routier', en: 'Test Drive' },
  'car.financing': { fr: 'Financement', en: 'Financing' },
  'car.contact': { fr: 'Nous Contacter', en: 'Contact Us' },
  'car.backCatalog': { fr: 'Retour au Catalogue', en: 'Back to Catalog' },
  'carNotFoundTitle': { fr: 'Véhicule non trouvé', en: 'Vehicle not found' },
  'carNotFoundDescription': { fr: "Le véhicule que vous recherchez n'existe pas.", en: 'The vehicle you are looking for does not exist.' },
  'returnToCatalog': { fr: 'Retour au catalogue', en: 'Back to catalog' },
  
  // About
  'about.title': { fr: 'À Propos de Tigerbec Cars', en: 'About Tigerbec Cars' },
  'about.description': { fr: 'Depuis plus de 15 ans, Tigerbec Cars s\'est imposé comme une référence dans la vente de véhicules d\'occasion premium. Notre expertise et notre passion pour l\'automobile nous permettent de vous proposer une sélection rigoureuse de véhicules d\'exception.', en: 'For over 15 years, Tigerbec Cars has established itself as a reference in premium used vehicle sales. Our expertise and passion for automobiles allow us to offer you a rigorous selection of exceptional vehicles.' },
  'about.values.title': { fr: 'Nos Valeurs', en: 'Our Values' },
  'about.values.trust': { fr: 'Confiance', en: 'Trust' },
  'about.values.excellence': { fr: 'Excellence', en: 'Excellence' },
  'about.values.service': { fr: 'Service', en: 'Service' },
  'about.history.title': { fr: 'Notre Histoire', en: 'Our Story' },
  'about.history.p1': { fr: "Depuis 1999, nous sommes les spécialistes reconnus des véhicules d'occasion premium. Notre mission est simple : offrir des automobiles de seconde main exceptionnelles, rigoureusement sélectionnées et contrôlées selon nos standards les plus élevés.", en: "Since 1999, we have been recognized specialists in premium used vehicles. Our mission is simple: to offer exceptional second-hand automobiles, rigorously selected and inspected according to our highest standards." },
  'about.history.p2': { fr: "Chaque véhicule passe par notre processus d'inspection en 120 points. Nous garantissons la transparence totale sur l'historique, l'entretien et l'état de chaque automobile. Notre réputation s'est bâtie sur la confiance et la satisfaction de nos clients.", en: "Each vehicle undergoes our 120-point inspection process. We guarantee complete transparency regarding history, maintenance and condition of every automobile. Our reputation is built on trust and customer satisfaction." },
  'about.experience': { fr: "Années d'Expérience", en: "Years of Experience" },
  'about.vehiclesSold': { fr: "Véhicules Vendus", en: "Vehicles Sold" },
  'about.imageAlt': { fr: "À propos de nous", en: "About us" },
  
  // Contact
  'contact.title': { fr: 'Contactez-Nous', en: 'Contact Us' },
  'contact.subtitle': { fr: 'Notre équipe est à votre disposition pour répondre à toutes vos questions', en: 'Our team is at your disposal to answer all your questions' },
  'contact.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.email': { fr: 'Email', en: 'Email' },
  'contact.address': { fr: 'Adresse', en: 'Address' },
  'contact.hours': { fr: 'Horaires', en: 'Hours' },
  'contact.hours.weekdays': { fr: 'Lun - Ven: 9h00 - 18h00', en: 'Mon - Fri: 9:00 AM - 6:00 PM' },
  'contact.hours.saturday': { fr: 'Sam: 9h00 - 17h00', en: 'Sat: 9:00 AM - 5:00 PM' },
  'contact.hours.sunday': { fr: 'Dim: Fermé', en: 'Sun: Closed' },
  'contact.hours.weekend': { fr: 'Sam: 9h00 - 17h00 | Dim: Fermé', en: 'Sat: 9:00 AM - 5:00 PM | Sun: Closed' },
  
  // Contact Info
  'contact.info.title': { fr: 'Nos Coordonnées', en: 'Our Contact Information' },
  'contact.info.address.title': { fr: 'Adresse', en: 'Address' },
  'contact.info.address.line1': { fr: '123 Rue de l\'Automobile', en: '123 Rue de l\'Automobile' },
  'contact.info.address.line2': { fr: 'Quartier Premium', en: 'Quartier Premium' },
  'contact.info.address.line3': { fr: 'Montréal, QC H1A 1B2', en: 'Montréal, QC H1A 1B2' },
  'contact.info.phone.title': { fr: 'Téléphone', en: 'Phone' },
  'contact.info.phone.number': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'contact.info.email.title': { fr: 'Email', en: 'Email' },
  'contact.info.email.address': { fr: 'contact@tigerbeccars.com', en: 'contact@tigerbeccars.com' },
  'contact.info.hours.title': { fr: 'Horaires d\'Ouverture', en: 'Opening Hours' },
  'contact.info.hours.weekdays': { fr: 'Lundi - Vendredi: 9h00 - 18h00', en: 'Monday - Friday: 9:00 AM - 6:00 PM' },
  'contact.info.hours.weekend': { fr: 'Samedi: 9h00 - 17h00 | Dimanche: Fermé', en: 'Saturday: 9:00 AM - 5:00 PM | Sunday: Closed' },
  
  // Contact Form
  'contact.form.title': { fr: 'Envoyez-nous un Message', en: 'Send us a Message' },
  'contact.form.name': { fr: 'Nom complet', en: 'Full Name' },
  'contact.form.namePlaceholder': { fr: 'Votre nom et prénom', en: 'Your first and last name' },
  'contact.form.email': { fr: 'Adresse email', en: 'Email Address' },
  'contact.form.emailPlaceholder': { fr: 'votre@email.com', en: 'your@email.com' },
  'contact.form.phone': { fr: 'Téléphone (optionnel)', en: 'Phone (optional)' },
  'contact.form.phonePlaceholder': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'contact.form.message': { fr: 'Message', en: 'Message' },
  'contact.form.messagePlaceholder': { fr: 'Décrivez votre demande, le véhicule qui vous intéresse...', en: 'Describe your request, the vehicle you are interested in...' },
  'contact.form.submit': { fr: 'Envoyer le Message', en: 'Send Message' },
  'contact.form.sending': { fr: 'Envoi en cours...', en: 'Sending...' },
  'contact.form.successMessage': { fr: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', en: 'Your message has been sent successfully! We will respond to you as soon as possible.' },
  
  // Footer
  'footer.description': { fr: 'Votre partenaire de confiance pour l\'achat de véhicules d\'occasion premium.', en: 'Your trusted partner for purchasing premium used vehicles.' },
  'footer.quickLinks': { fr: 'Liens Rapides', en: 'Quick Links' },
  'footer.followUs': { fr: 'Suivez-nous', en: 'Follow Us' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.services.title': { fr: 'Nos Services', en: 'Our Services' },
  'footer.services.usedCars': { fr: "Véhicules d'Occasion", en: 'Used Vehicles' },
  'footer.services.inspection': { fr: 'Inspection 120 Points', en: '120-Point Inspection' },
  'footer.services.warranty': { fr: 'Garantie Étendue', en: 'Extended Warranty' },
  'footer.services.tradeIn': { fr: 'Reprise Auto', en: 'Trade-In' },
  'footer.services.financing': { fr: 'Financement', en: 'Financing' },
  
  // Common
  'common.loading': { fr: 'Chargement...', en: 'Loading...' },
  'common.error': { fr: 'Une erreur est survenue', en: 'An error occurred' },
  'common.seeMore': { fr: 'Voir Plus', en: 'See More' },
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