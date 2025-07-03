import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/catalog.css';

// Données des services mécaniques avec prix estimatifs pour le marché canadien
const mechanicServices = {
  "Entretien Régulier": [
  {
    id: 1,
    name: "Changement d'huile",
      description: "Vidange d'huile avec filtre premium et inspection des niveaux.",
      price: "À partir de 69.99$",
      estimatedTime: "30-45 minutes"
  },
  {
    id: 2,
      name: "Mise au point complète",
      description: "Remplacement des bougies, filtres, et ajustement des systèmes.",
      price: "À partir de 249.99$",
      estimatedTime: "2-3 heures"
  },
  {
    id: 3,
      name: "Inspection multipoint",
      description: "Inspection complète de 50 points incluant tous les systèmes.",
      price: "À partir de 89.99$",
      estimatedTime: "1 heure"
    }
  ],
  "Système de Freinage": [
  {
    id: 4,
      name: "Plaquettes avant",
      description: "Remplacement des plaquettes et inspection du système.",
      price: "À partir de 149.99$",
      estimatedTime: "1-2 heures"
  },
  {
    id: 5,
      name: "Disques et plaquettes",
      description: "Remplacement complet des disques et plaquettes.",
      price: "À partir de 299.99$",
      estimatedTime: "2-3 heures"
  },
  {
    id: 6,
      name: "Purge des freins",
      description: "Remplacement du liquide et purge du système.",
      price: "À partir de 89.99$",
      estimatedTime: "1 heure"
    }
  ],
  "Pneus et Roues": [
  {
    id: 7,
      name: "Changement saisonnier",
      description: "Montage, équilibrage et installation des pneus.",
      price: "À partir de 79.99$",
      estimatedTime: "1 heure"
  },
  {
    id: 8,
      name: "Alignement 4 roues",
      description: "Alignement complet avec technologie 3D.",
      price: "À partir de 119.99$",
      estimatedTime: "1-1.5 heures"
  },
  {
    id: 9,
      name: "Réparation crevaison",
      description: "Réparation ou remplacement du pneu endommagé.",
      price: "À partir de 39.99$",
      estimatedTime: "30-45 minutes"
    }
  ],
  "Suspension et Direction": [
  {
    id: 10,
      name: "Amortisseurs avant",
      description: "Remplacement des amortisseurs et inspection.",
      price: "À partir de 399.99$",
      estimatedTime: "2-3 heures"
  },
  {
    id: 11,
      name: "Rotules de suspension",
      description: "Remplacement des rotules et alignement.",
    price: "À partir de 249.99$",
      estimatedTime: "2-3 heures"
  },
  {
    id: 12,
      name: "Direction assistée",
      description: "Service complet du système de direction.",
      price: "À partir de 129.99$",
      estimatedTime: "1-2 heures"
    }
  ],
  "Système Électrique": [
    {
      id: 13,
      name: "Diagnostic électronique",
      description: "Analyse complète des systèmes avec équipement pro.",
      price: "À partir de 89.99$",
      estimatedTime: "1 heure"
    },
    {
      id: 14,
      name: "Batterie",
      description: "Test et remplacement si nécessaire.",
      price: "À partir de 149.99$",
      estimatedTime: "30 minutes"
    },
    {
      id: 15,
      name: "Alternateur",
      description: "Diagnostic et remplacement.",
    price: "À partir de 329.99$",
      estimatedTime: "2-3 heures"
    }
  ],
  "Climatisation": [
    {
      id: 16,
      name: "Recharge A/C",
      description: "Test d'étanchéité et recharge du système.",
      price: "À partir de 129.99$",
      estimatedTime: "1 heure"
    },
    {
      id: 17,
      name: "Service complet A/C",
      description: "Diagnostic, recharge et désinfection.",
      price: "À partir de 189.99$",
      estimatedTime: "1.5-2 heures"
    },
    {
      id: 18,
      name: "Filtre habitacle",
      description: "Remplacement du filtre à air de l'habitacle.",
      price: "À partir de 49.99$",
      estimatedTime: "30 minutes"
    }
  ],
  "Transmission": [
    {
      id: 19,
      name: "Vidange transmission",
      description: "Vidange complète avec fluide synthétique.",
      price: "À partir de 199.99$",
      estimatedTime: "1.5-2 heures"
    },
    {
      id: 20,
      name: "Embrayage",
      description: "Remplacement complet de l'embrayage.",
      price: "À partir de 899.99$",
      estimatedTime: "4-6 heures"
    },
    {
      id: 21,
      name: "Service 4x4",
      description: "Entretien des différentiels et transfert.",
      price: "À partir de 299.99$",
      estimatedTime: "2-3 heures"
    }
  ],
  "Moteur": [
    {
      id: 22,
      name: "Courroie distribution",
      description: "Remplacement courroie et composants.",
      price: "À partir de 699.99$",
      estimatedTime: "4-6 heures"
    },
    {
      id: 23,
      name: "Joints d'étanchéité",
      description: "Remplacement des joints qui fuient.",
      price: "À partir de 299.99$",
      estimatedTime: "Varie selon localisation"
    },
    {
      id: 24,
      name: "Nettoyage injection",
      description: "Nettoyage du système d'injection.",
      price: "À partir de 149.99$",
      estimatedTime: "1-2 heures"
  }
  ],
  "Services d'Urgence": [
    {
      id: 25,
      name: "Dépannage routier",
      description: "Assistance routière avec diagnostic mobile.",
      price: "À partir de 89.99$",
      estimatedTime: "Variable"
    },
    {
      id: 26,
      name: "Démarrage d'urgence",
      description: "Boost de batterie et diagnostic.",
      price: "À partir de 49.99$",
      estimatedTime: "30 minutes"
    },
    {
      id: 27,
      name: "Remorquage",
      description: "Service de remorquage professionnel.",
      price: "À partir de 99.99$",
      estimatedTime: "Variable"
    }
  ],
  "Services Premium": [
    {
      id: 28,
      name: "Diagnostic avancé",
      description: "Analyse approfondie multi-systèmes.",
      price: "À partir de 159.99$",
      estimatedTime: "1.5-2 heures"
    },
    {
      id: 29,
      name: "Protection céramique",
      description: "Application de protection moteur céramique.",
      price: "À partir de 299.99$",
      estimatedTime: "2-3 heures"
    },
    {
      id: 30,
      name: "Programme VIP",
      description: "Service prioritaire et tarifs préférentiels.",
      price: "À partir de 399.99$/an",
      estimatedTime: "Variable"
    }
  ]
};

// Catégories de services
const serviceCategories = Object.keys(mechanicServices);

const MechanicPage: React.FC = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour obtenir les services filtrés
  const getFilteredServices = () => {
    if (activeCategory === 'all') {
      return Object.values(mechanicServices).flat();
    }
    return mechanicServices[activeCategory] || [];
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background animations globales */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Particules flottantes petites */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Particules moyennes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`mid-${i}`}
            className="absolute w-1 h-1 bg-cyan-500/15 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Orbes de gradient */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '12s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar logo={assets.logoNav} siteName="Picci Mécanique" />

        {/* HERO SECTION */}
        <section 
          className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
          style={{ transform: `translateY(${-scrollY}px)` }}
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full">
            <img 
              src="/Picci_10.jpg" 
              alt="Picci Mécanique - Services mécaniques professionnels"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              {t('mechanic.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6">
              {t('mechanic.hero.subtitle')}
            </p>
          </div>
              
          {/* Dégradé en bas du Hero */}
          <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20">
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            
            {/* Indicateur de scroll en forme de souris */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="w-5 h-8 border-2 border-yellow-400/50 rounded-full p-1">
                <div className="w-1 h-2 bg-yellow-400/80 rounded-full mx-auto animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('mechanic.services.title')}</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('mechanic.services.subtitle')}
              </p>
              <p className="text-md text-yellow-400 mt-4">
                {t('mechanic.services.priceNote')}
              </p>
            </div>
            
            {/* Filtre de catégories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                {t('mechanic.all')}
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {t(`mechanic.categories.${category}`)}
                </button>
              ))}
            </div>
            
            {/* Services Grid */}
            <div className="max-w-7xl mx-auto">
              {/* Titre de la catégorie sélectionnée */}
              {activeCategory !== 'all' && (
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-wider catalog-column-title">
                    {t(`mechanic.categories.${activeCategory}`)}
                  </h3>
                  <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                </div>
              )}

              {/* Grille de services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredServices().map((service, index) => (
                  <div
                      key={service.id}
                    className={`relative p-6 transition-all duration-500 transform ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                    style={{
                      borderBottom: '1px solid rgba(75, 85, 99, 0.3)'
                    }}
                    >
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-white catalog-item-name">{t(`mechanic.service.${service.name}`)}</h4>
                        {activeCategory === 'all' && (
                          <span className="inline-block px-3 py-1 bg-yellow-500/20 rounded-full text-xs font-medium text-yellow-400 catalog-item-name">
                            {t(`mechanic.categories.${Object.keys(mechanicServices).find(key => mechanicServices[key].some(s => s.id === service.id))}`)}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 catalog-item-description">{service.description}</p>
                    <div className="flex items-center text-sm text-gray-500 catalog-item-description">
                      <svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {service.estimatedTime}
                    </div>
                  </div>
                  ))}
              </div>
            </div>
            
            {/* Note sur les prix */}
            {/* <div className="mt-12 text-sm text-gray-400 text-center">
              * Les prix indiqués sont estimatifs et peuvent varier selon le modèle et l'année du véhicule. 
              <br />Contactez-nous pour un devis précis adapté à votre véhicule.
            </div> */}
          </div>
        </section>
        
        {/* SECTION POURQUOI NOUS CHOISIR */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Animations de fond */}
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('mechanic.why.title')}</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t('mechanic.why.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Avantage 1 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.certified')}</h3>
                <p className="text-gray-300">{t('mechanic.why.certified.desc')}</p>
              </div>
              
              {/* Avantage 2 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.equipment')}</h3>
                <p className="text-gray-300">{t('mechanic.why.equipment.desc')}</p>
              </div>
              
              {/* Avantage 3 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.fast')}</h3>
                <p className="text-gray-300">{t('mechanic.why.fast.desc')}</p>
              </div>
              
              {/* Avantage 4 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.pricing')}</h3>
                <p className="text-gray-300">{t('mechanic.why.pricing.desc')}</p>
              </div>
              
              {/* Avantage 5 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '500ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.warranty')}</h3>
                <p className="text-gray-300">{t('mechanic.why.warranty.desc')}</p>
              </div>
              
              {/* Avantage 6 */}
              <div className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('mechanic.why.emergency')}</h3>
                <p className="text-gray-300">{t('mechanic.why.emergency.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default MechanicPage; 