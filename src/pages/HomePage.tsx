import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CutCard from '../components/CutCard';
import ProductsHomeSection from '../components/ProductsHomeSection';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';
import { getPopularCuts } from '../data/cutsData';
import { getMiniServices } from '../data/servicesData';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Récupérer les données
  const popularCuts = getPopularCuts(6);

  useEffect(() => {
    // Petit délai pour s'assurer que tout est monté
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implémenter l'envoi du formulaire
    alert(t('home.contact.form.success'));
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalog');
    catalogSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCutSelect = (cutId: string) => {
    console.log('Cut selected:', cutId);
    // Navigation vers la page catalogue avec l'ID de la coupe
    navigate(`/catalog?cut=${cutId}`);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background animations globales - HARMONISÉES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Particules flottantes petites - 15 standardisées */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-red-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Particules moyennes - 8 standardisées */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`mid-${i}`}
            className="absolute w-1 h-1 bg-orange-500/15 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Orbes de gradient harmonisés */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '12s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar logo={assets.logoNav} siteName={t('navbar.siteName')} />

        {/* 1. HERO SECTION - animations harmonisées */}
        <section className="h-screen xl:h-[110vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Background image */}
          <div className="absolute inset-0">
            <img 
              src={assets.back} 
              alt="Barbershop interior" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
          </div>

          {/* Hero content - CONTENEUR RENFORCÉ */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl xl:max-w-8xl mx-auto py-16 sm:py-20 md:py-24 lg:py-28 hero-container-weight">
            <div className="relative overflow-hidden mb-4 sm:mb-6 pb-2 sm:pb-4 pt-2 sm:pt-3">
              <h1 className={`relative font-grafity-youth text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white leading-tight graffiti-style graffiti-spray animate-graffiti-pulse ${
                isLoaded ? 'animate-graffiti-reveal' : 'opacity-0'
              }`}>
                {t('home.hero.title1')}
              </h1>
              
              {/* Particules de spray fluides autour de "Un style." */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
                    style={{
                      left: `${20 + (i * 6) + Math.random() * 15}%`,
                      top: `${15 + Math.random() * 70}%`,
                      animationDelay: `${i * 0.3 + Math.random() * 2}s`,
                      animationDuration: `${5 + Math.random() * 2}s`,
                      transform: `scale(${0.7 + Math.random() * 0.8})`,
                      filter: 'blur(0.3px)'
                    }}
                  />
                ))}
                {/* Grosses gouttes harmonisées */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`big-${i}`}
                    className="absolute w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse"
                    style={{
                      left: `${25 + (i * 15) + Math.random() * 20}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.8 + Math.random() * 2}s`,
                      animationDuration: `${6 + Math.random() * 2}s`,
                      filter: 'blur(0.5px)'
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative overflow-hidden mb-6 sm:mb-8 pb-2 sm:pb-4 pt-2 sm:pt-3 max-w-none w-full">
              <h2 className={`relative font-grafity-youth text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-red-500 leading-tight graffiti-red graffiti-spray animate-graffiti-pulse-red w-full ${
                isLoaded ? 'animate-graffiti-reveal' : 'opacity-0'
              }`} style={{ animationDelay: '0.6s', letterSpacing: '-0.02em', transform: 'scaleX(1.1)' }}>
                {t('home.hero.title2')}
              </h2>
              
              {/* Particules de spray rouges fluides autour de "Une signature." */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-red-500/50 rounded-full animate-float"
                    style={{
                      left: `${20 + (i * 6) + Math.random() * 15}%`,
                      top: `${15 + Math.random() * 70}%`,
                      animationDelay: `${1 + i * 0.3 + Math.random() * 2}s`,
                      animationDuration: `${5 + Math.random() * 2}s`,
                      transform: `scale(${0.7 + Math.random() * 0.8})`,
                      filter: 'blur(0.3px)'
                    }}
                  />
                ))}
                {/* Grosses gouttes rouges harmonisées */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`red-big-${i}`}
                    className="absolute w-1.5 h-1.5 bg-red-500/35 rounded-full animate-pulse"
                    style={{
                      left: `${25 + (i * 15) + Math.random() * 20}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${1.5 + i * 0.8 + Math.random() * 2}s`,
                      animationDuration: `${6 + Math.random() * 2}s`,
                      filter: 'blur(0.5px)'
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="overflow-hidden mb-8 sm:mb-10 mt-4 sm:mt-6">
              <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-800 delay-400 px-6 sm:px-8 leading-relaxed ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                {t('home.hero.description')}
              </p>
            </div>
            <div className={`transform transition-all duration-800 delay-600 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <button 
                onClick={scrollToCatalog}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-500 ease-out text-base sm:text-lg
                  hover:from-red-700 hover:to-red-800 hover:shadow-[0_20px_40px_-12px_rgba(220,38,38,0.4)] 
                  transform hover:scale-[1.02] hover:-translate-y-1 hover:rotate-[0.5deg] 
                  active:scale-[0.98] active:translate-y-0
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[100%]
                  after:absolute after:inset-0 after:bg-gradient-to-br after:from-red-400/20 after:via-transparent after:to-red-900/20 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-shadow-glow">
                  {t('home.hero.cta')}
                </span>
                
                {/* Micro particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                  <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                  <div className="absolute bottom-1/3 left-1/2 w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                </div>
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* 2. SECTION CATALOGUE DE SERVICES - style minimaliste noir/jaune */}
        <section id="catalog" className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
              {t('home.catalog.title')}
            </h2>

            {/* Mini Services Grid - animations harmonisées */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
              {getMiniServices().map((category, categoryIndex) => (
                <div 
                  key={category.title} 
                  className={`space-y-8 transform transition-all duration-600 ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${800 + categoryIndex * 150}ms` 
                  }}
                >
                  {/* Category Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-center border-b-2 border-yellow-400 pb-4">
                    {t(category.titleKey)}
                  </h3>

                  {/* Services List */}
                  <div className="space-y-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={`${categoryIndex}-${serviceIndex}`}>
                        {/* Service Item */}
                        <div className="space-y-2">
                          {/* Service Name and Price */}
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg sm:text-xl font-semibold text-white tracking-wide flex-1 pr-4">
                              {t(service.nameKey)}
                            </h4>
                            <span className="text-lg sm:text-xl font-bold text-yellow-400 tracking-wider">
                              {service.price}
                            </span>
                          </div>
                          
                          {/* Service Description */}
                          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                            {t(service.descriptionKey)}
                          </p>
                        </div>

                        {/* Separator - except for last item */}
                        {serviceIndex < category.services.length - 1 && (
                          <div className="mt-6 border-b border-dashed border-gray-600"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link 
                to="/catalog"
                className="group relative inline-block px-6 py-3 bg-yellow-400 text-black font-semibold tracking-wide uppercase rounded-lg overflow-hidden transition-all duration-500 ease-out
                  hover:bg-yellow-300 hover:shadow-[0_15px_35px_-8px_rgba(250,204,21,0.4)]
                  transform hover:scale-[1.02] hover:-translate-y-0.5 hover:rotate-[-0.3deg]
                  active:scale-[0.98] active:translate-y-0
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-600 before:ease-out hover:before:translate-x-[100%]
                  after:absolute after:inset-0 after:bg-gradient-to-br after:from-yellow-200/30 after:via-transparent after:to-yellow-600/20 after:opacity-0 after:transition-opacity after:duration-400 hover:after:opacity-100"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-sm">
                  {t('home.catalog.cta')}
                </span>
                
                {/* Golden sparkle effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-yellow-600/70 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                  <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-yellow-700/60 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                  <div className="absolute bottom-1/4 left-1/2 w-0.5 h-0.5 bg-yellow-800/50 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. SECTION PRODUITS HOME */}
        <ProductsHomeSection isLoaded={isLoaded} />

        {/* 4. SECTION À PROPOS - spacing harmonisé */}
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          {/* Background animations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/2 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Contenu texte */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    {t('home.about.title')}
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                    {t('home.about.description1')}
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed mb-8">
                    {t('home.about.description2')}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">20+</div>
                    <div className="text-gray-300">{t('home.about.stats.years')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">5000+</div>
                    <div className="text-gray-300">{t('home.about.stats.clients')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
                    <div className="text-gray-300">{t('home.about.stats.passion')}</div>
                  </div>
                </div>
              </div>

              {/* Composition Fusion Sophistiquée */}
              <div className="relative h-[600px] w-full overflow-hidden">
                {/* Image principale (Picci_7) - Base layer */}
                <div 
                  className={`absolute inset-0 transform transition-all duration-1500 ease-out ${
                    isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
                    <img 
                      src="/Picci_7.jpg" 
                      alt="Ambiance barbershop professionnelle" 
                      className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out hover:scale-102"
                    />
                  </div>
                </div>
                
                {/* Image secondaire (Picci_14) - Fusion layer avec masque radial */}
                <div 
                  className={`absolute inset-0 transform transition-all duration-2000 ease-out ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: '800ms',
                    maskImage: 'radial-gradient(ellipse 60% 70% at 75% 50%, black 0%, black 40%, transparent 65%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 75% 50%, black 0%, black 40%, transparent 65%)'
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src="/Picci_14.jpg" 
                      alt="Maître barbier au travail" 
                      className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out hover:scale-102"
                      style={{ 
                        transform: 'translateX(20%) scale(1.1)',
                        filter: 'sepia(10%) saturate(120%) brightness(95%)'
                      }}
                    />
                  </div>
                </div>
                
                {/* Couche de fusion avec dégradé complexe */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-2500 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: '1200ms',
                    background: `
                      radial-gradient(ellipse 50% 60% at 75% 45%, rgba(220, 38, 38, 0.08) 0%, transparent 50%),
                      linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(220, 38, 38, 0.05) 30%, transparent 60%),
                      linear-gradient(45deg, transparent 40%, rgba(139, 69, 19, 0.06) 50%, transparent 70%)
                    `
                  }}
                />
                
                {/* Effet de morphing border */}
                <div 
                  className={`absolute inset-0 rounded-2xl transition-all duration-2000 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: '1600ms',
                    background: `
                      linear-gradient(45deg, transparent 0%, rgba(220, 38, 38, 0.1) 48%, rgba(220, 38, 38, 0.2) 50%, rgba(220, 38, 38, 0.1) 52%, transparent 100%)
                    `,
                    maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                    WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '2px'
                  }}
                />
                
                {/* Subtle glow effect */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-3000 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: '2000ms',
                    background: 'radial-gradient(ellipse 80% 60% at center, rgba(220, 38, 38, 0.03) 0%, transparent 70%)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Highlight strip pour unifier la composition */}
                <div 
                  className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent transform transition-all duration-1500 ${
                    isLoaded ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`}
                  style={{ 
                    left: '62%',
                    transitionDelay: '1800ms',
                    filter: 'blur(0.5px)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. SECTION CONTACT - spacing et inputs harmonisés */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-t from-black via-gray-900 to-black relative overflow-hidden">
          {/* Background animations */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-red-500/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 6}s`
                }}
              />
            ))}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-red-500/1 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                {t('home.contact.title')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                {t('home.contact.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Formulaire - inputs harmonisés */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('home.contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                      placeholder={t('home.contact.form.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('home.contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                      placeholder={t('home.contact.form.emailPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('home.contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 resize-none"
                      placeholder={t('home.contact.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-500 ease-out
                      hover:from-red-700 hover:to-red-800 hover:shadow-[0_20px_40px_-12px_rgba(220,38,38,0.4)]
                      transform hover:scale-[1.01] hover:-translate-y-0.5 
                      active:scale-[0.99] active:translate-y-0
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[100%]
                      after:absolute after:inset-0 after:bg-gradient-to-br after:from-red-400/20 after:via-transparent after:to-red-900/20 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100
                      focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:text-shadow-glow flex items-center justify-center gap-2">
                      <span>{t('home.contact.form.submit')}</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    
                    {/* Send animation particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                      <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                      <div className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </button>
                </form>
              </div>

              {/* Informations contact */}
              <div className="space-y-8">
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800/50">
                  <h3 className="text-2xl font-bold text-white mb-6">{t('home.contact.info.title')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 mt-1 text-red-400">📍</div>
                      <div>
                        <p className="text-white font-medium">{t('home.contact.info.address.label')}</p>
                        <p className="text-gray-300">{t('home.contact.info.address.street')}<br />{t('home.contact.info.address.city')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 mt-1 text-red-400">📞</div>
                      <div>
                        <p className="text-white font-medium">{t('home.contact.info.phone.label')}</p>
                        <p className="text-gray-300">{t('home.contact.info.phone.number')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 mt-1 text-red-400">✉️</div>
                      <div>
                        <p className="text-white font-medium">{t('home.contact.info.email.label')}</p>
                        <p className="text-gray-300">{t('home.contact.info.email.address')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800/50">
                  <h3 className="text-2xl font-bold text-white mb-6">{t('home.contact.hours.title')}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{t('home.contact.hours.weekdays')}</span>
                      <span className="text-white font-medium">{t('home.contact.hours.weekdaysTime')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">{t('home.contact.hours.saturday')}</span>
                      <span className="text-white font-medium">{t('home.contact.hours.saturdayTime')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">{t('home.contact.hours.sunday')}</span>
                      <span className="text-white font-medium">{t('home.contact.hours.sundayTime')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <Footer />
      </div>
    </div>
  );
};

export default HomePage; 