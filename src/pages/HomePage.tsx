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

  const handleServiceSelect = (serviceId: string) => {
    console.log('Service selected:', serviceId);
    // Navigation vers la page catalogue avec l'ID du service
    navigate(`/catalog?service=${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background animations globales - HARMONISÉES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Particules flottantes petites - 15 standardisées */}
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
        
        {/* Particules moyennes - 8 standardisées */}
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
        
        {/* Orbes de gradient harmonisés */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '12s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar logo={assets.logoNav} siteName={t('navbar.siteName')} />

        {/* 1. HERO SECTION - animations harmonisées */}
        <section className="h-screen xl:h-[110vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Background image principale */}
          <div className="absolute inset-0 z-0">
            <img 
              src={assets.back} 
              alt="Car wash interior" 
              className="w-full h-full object-cover opacity-30"
            />
            {/* Image Picci_8 en superposition */}
            <img
              src="/Picci_8.jpg"
              alt="Lave-auto Ricci Carwash"
              className="w-full h-full object-cover absolute inset-0 opacity-80 mix-blend-overlay blur-[1px] pointer-events-none"
              style={{ zIndex: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>
          </div>

          {/* Hero content - CONTENEUR RENFORCÉ */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl xl:max-w-8xl mx-auto py-16 sm:py-20 md:py-24 lg:py-28 hero-container-weight">
            <h1 className="font-ballsye text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-bold text-white leading-tight mb-4 relative">
              Clean. 
              <span className="relative text-blue-400 inline-block overflow-visible">
                <span className="relative z-10">Shine.</span>
                {/* Reflet glossy fluide */}
                <span className="absolute left-0 top-0 w-full h-full pointer-events-none z-20">
                  <span className="block absolute left-[-60%] top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-white/80 via-white/0 to-white/0 blur-[2px] opacity-70 animate-shine-glossy" style={{animationDelay:'0.7s'}}></span>
                </span>
              </span>
              <span className="text-red-500 animate-glow-red drop-shadow-[0_0_16px_rgba(239,68,68,0.7)]">Drive.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-8 mb-10">
              {t('hero.subtitle')}
            </p>
            {/* Bouton scroll vers services */}
            <button 
              onClick={scrollToCatalog}
              className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              {t('hero.cta')}
            </button>
            {/* Animation scroll/flèche */}
            <div className="flex flex-col items-center mt-8 animate-bounce-slow">
              <span className="block w-8 h-8 border-b-4 border-r-4 border-blue-400 rounded-br-lg transform rotate-45 mb-1"></span>
              <span className="block w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-lg transform rotate-45"></span>
            </div>
          </div>

          {/* Dégradé premium et flou en bas du Hero */}
          <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20">
            {/* Dégradé fondu premium */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            {/* Flou progressif en bas */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-black/0 backdrop-blur-md" style={{maskImage: 'linear-gradient(to top, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)'}}></div>
          </div>
        </section>

        {/* 2. SECTION CATALOGUE DE SERVICES */}
        <section id="catalog" className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
              {t('home.catalog.title', 'Nos Services de Lavage')}
            </h2>

            {/* Mini Services Grid - animations harmonisées */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
              {getMiniServices().map((category, categoryIndex) => {
                const isPremium = category.title.toUpperCase().includes('PREMIUM');
                return (
                <div 
                  key={category.title} 
                  className={`space-y-8 transform transition-all duration-600 ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                    style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <div className={`w-12 h-1 mx-auto rounded-full ${isPremium ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                    </div>
                  <div className="space-y-6">
                    {category.services.map((service, serviceIndex) => (
                        <div 
                          key={service.name}
                          className={`bg-gray-900 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer ${isPremium ? 'hover:shadow-red-500/10' : 'hover:shadow-blue-500/10'} hover:shadow-xl`}
                          onClick={() => handleServiceSelect(service.name)}
                        >
                          <h4 className="text-xl font-semibold text-white mb-2">{t(service.nameKey)}</h4>
                          <p className="text-gray-400 text-sm mb-4">{t(service.descriptionKey)}</p>
                          <div className="flex justify-between items-center">
                            <span className={`font-bold ${isPremium ? 'text-red-500' : 'text-blue-500'}`}>{service.price}</span>
                            <button className={`text-sm text-white transition-colors duration-300 ${isPremium ? 'hover:text-red-500' : 'hover:text-blue-500'}`}>{t('common.learnMore')}</button>
                          </div>
                      </div>
                    ))}
                  </div>
                </div>
                );
              })}
            </div>

            {/* Bouton Voir tous nos services */}
            <div className="text-center mt-12">
              <Link
                to="/catalog"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                {t('common.viewAll')}
              </Link>
            </div>
          </div>
        </section>

        {/* 4. SECTION À PROPOS - Ricci Carwash */}
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          {/* Animations de bulles et éclaboussures */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-cyan-400/10 animate-bubble"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${24 + Math.random() * 32}px`,
                  height: `${24 + Math.random() * 32}px`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 8}s`,
                  filter: 'blur(1.5px)'
                }}
              />
            ))}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Contenu texte Ricci Carwash */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    {t('about.title')}
                  </h2>
                  <p className="text-lg sm:text-xl text-cyan-200 leading-relaxed mb-6">
                    {t('about.description')}
                  </p>
                  <p className="text-lg text-cyan-100 leading-relaxed mb-8">
                    {t('about.slogan')}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{t('about.stats.expertise.number')}</div>
                    <div className="text-cyan-100">{t('about.stats.expertise.label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{t('about.stats.vehicles.number')}</div>
                    <div className="text-cyan-100">{t('about.stats.vehicles.label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{t('about.stats.satisfaction.number')}</div>
                    <div className="text-cyan-100">{t('about.stats.satisfaction.label')}</div>
                  </div>
                </div>
              </div>

              {/* Image Ricci Carwash - voiture/lavage auto */}
              <div className="relative h-[420px] w-full overflow-hidden flex items-center justify-center">
                <div className={`absolute inset-0 transform transition-all duration-1500 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] group">
                    {/* Image principale */}
                    <img 
                      src="/Picci_14.jpg" 
                      alt="Enseigne Ricci Carwash" 
                      className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                    />
                    {/* Overlay bleu/cyan subtil */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-transparent pointer-events-none"></div>
                    {/* Vignettage/flou sur les bords */}
                    <div className="absolute inset-0 pointer-events-none" style={{boxShadow:'0 0 80px 40px rgba(0,0,0,0.25) inset'}}></div>
                    {/* Reflet animé (shine) */}
                    <div className="absolute left-[-30%] top-1/4 w-2/3 h-1/3 rotate-12 bg-gradient-to-r from-white/60 to-transparent rounded-full blur-2xl opacity-30 animate-shine-effect pointer-events-none" />
                  </div>
                </div>
                {/* Bulles animées devant la voiture */}
                {[...Array(6)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute rounded-full bg-cyan-300/30 animate-bubble"
                  style={{ 
                      left: `${30 + Math.random() * 40}%`,
                      top: `${60 + Math.random() * 30}%`,
                      width: `${16 + Math.random() * 24}px`,
                      height: `${16 + Math.random() * 24}px`,
                      animationDelay: `${i * 0.7 + Math.random()}s`,
                      animationDuration: `${4 + Math.random() * 4}s`,
                    filter: 'blur(0.5px)'
                  }}
                />
                ))}
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
                className="absolute w-0.5 h-0.5 bg-blue-500/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 6}s`
                }}
              />
            ))}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-blue-500/1 rounded-full blur-3xl animate-pulse-slow"></div>
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
                      className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
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
                      className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
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
                      className="w-full px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 resize-none"
                      placeholder={t('home.contact.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-500 ease-out
                      hover:from-blue-700 hover:to-cyan-600 hover:shadow-[0_20px_40px_-12px_rgba(0,255,255,0.15)]
                      transform hover:scale-[1.01] hover:-translate-y-0.5 
                      active:scale-[0.99] active:translate-y-0
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[100%]
                      after:absolute after:inset-0 after:bg-gradient-to-br after:from-blue-400/20 after:via-transparent after:to-cyan-900/20 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100
                      focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:text-shadow-glow flex items-center justify-center gap-2">
                      <span>{t('home.contact.form.submit')}</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <div className="w-6 h-6 mt-1 text-cyan-400">📍</div>
                      <div>
                        <p className="text-white font-medium">{t('home.contact.info.address.label')}</p>
                        <p className="text-gray-300">{t('home.contact.info.address.street')}<br />{t('home.contact.info.address.city')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 mt-1 text-cyan-400">📞</div>
                      <div>
                        <p className="text-white font-medium">{t('home.contact.info.phone.label')}</p>
                        <p className="text-gray-300">{t('home.contact.info.phone.number')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 mt-1 text-cyan-400">✉️</div>
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