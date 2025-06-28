import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  logo: string;
  siteName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ logo, siteName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'fr' ? 'en' : 'fr');
  };

  // Fonction pour scroll vers le haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fonction pour scroll vers une section
  const scrollToSection = (sectionId: string) => {
    // Si on n'est pas sur la page d'accueil, y naviguer d'abord
    if (location.pathname !== '/') {
      navigate('/');
      // Attendre que la page se charge puis scroller
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si on est déjà sur la page d'accueil, scroller directement
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Fonction pour naviguer vers une page
  const navigateToPage = (path: string) => {
    navigate(path);
  };

  // Fonction pour gérer les clics sur les liens
  const handleNavClick = (item: any, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Fermer le menu mobile

    switch (item.type) {
      case 'scroll-top':
        scrollToTop();
        break;
      case 'scroll-section':
        scrollToSection(item.target);
        break;
      case 'navigate':
        navigateToPage(item.href);
        break;
    }
  };

  const navItems = [
    { 
      label: t('nav.home'), 
      type: location.pathname === '/' ? 'scroll-top' : 'navigate',
      href: '/',
      isActive: location.pathname === '/'
    },
    { 
      label: t('nav.catalog'), 
      type: 'navigate', 
      href: '/catalog',
      isActive: location.pathname === '/catalog'
    },
    { 
      label: t('nav.products'), 
      type: 'navigate', 
      href: '/products',
      isActive: location.pathname === '/products'
    },
    { 
      label: t('nav.about'), 
      type: 'scroll-section', 
      target: 'about',
      isActive: false // TODO: Détecter si on est dans la section about
    },
    { 
      label: t('nav.contact'), 
      type: 'scroll-section', 
      target: 'contact',
      isActive: false // TODO: Détecter si on est dans la section contact
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'top-4 left-8 right-8 bg-black/20 backdrop-blur-2xl rounded-2xl shadow-xl shadow-black/30 scale-95 transform' 
          : 'top-0 left-0 right-0 bg-transparent scale-100 transform'
      }`}>
        {/* Gradient overlay for scrolled state */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 rounded-2xl pointer-events-none"></div>
        )}
        
        {/* Glass effect background */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-white/3 to-transparent rounded-2xl pointer-events-none"></div>
        )}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
           <div className={`flex justify-between items-center transition-all duration-700 ease-out ${
             isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-18'
           }`}>
            
                          {/* Logo Section - Enhanced */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={logo} 
                  alt={`Logo ${siteName}`}
                  className={`object-contain filter brightness-110 transition-all duration-700 ease-out ${
                    isScrolled ? 'h-8 w-8 lg:h-10 lg:w-10' : 'h-10 w-10 lg:h-12 lg:w-12'
                  }`} 
                />
              </div>
              
              <button 
                onClick={scrollToTop}
                className="group bg-transparent"
                style={{ background: 'none', border: 'none', boxShadow: 'none' }}
              >
                <div className={`text-white font-bold tracking-wide relative transition-all duration-700 ease-out ${
                  isScrolled ? 'text-lg lg:text-xl' : 'text-xl lg:text-2xl'
                }`}>
                  <span className="text-white group-hover:text-red-400 transition-all duration-500">
                    {siteName}
                  </span>
                  <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </button>
            </div>

                                      {/* Desktop Navigation and Language */}
             <div className="hidden lg:flex items-center space-x-8">
               {/* Navigation Links */}
               {navItems.map((item, index) => (
                 <button 
                   key={item.label}
                   onClick={(e) => handleNavClick(item, e)}
                   className={`relative py-2 font-medium transition-all duration-700 ease-out group bg-transparent border-none outline-none ${
                     isScrolled ? 'text-sm lg:text-base' : 'text-base lg:text-lg'
                   } ${
                     item.isActive 
                       ? 'text-red-400' 
                       : 'text-gray-300 hover:text-red-400'
                   }`}
                   style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                 >
                   {/* Text */}
                   <span className="tracking-wide relative z-10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-lg">
                     {item.label}
                   </span>
                   
                   {/* Animated underline from center */}
                   <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-red-400 via-red-500 to-orange-400 transition-all duration-500 ease-out shadow-lg shadow-red-500/50 ${
                     item.isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                   }`}></div>

                 </button>
               ))}
               
               {/* Language Toggle - Bordered Style */}
               <button
                 onClick={toggleLanguage}
                 className={`relative font-medium transition-all duration-700 ease-out group text-gray-300 hover:text-red-400 bg-transparent border border-gray-600 hover:border-red-400 rounded-lg outline-none ${
                   isScrolled ? 'px-3 py-1 text-xs lg:text-sm' : 'px-4 py-2 text-sm lg:text-base'
                 }`}
               >
                 <span className="tracking-wide relative z-10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-lg">
                   {currentLanguage === 'fr' ? 'EN' : 'FR'}
                 </span>
               </button>
             </div>

            {/* Mobile Section - Enhanced */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`font-medium transition-all duration-700 ease-out text-gray-300 hover:text-red-400 hover:scale-105 bg-transparent border border-gray-600 hover:border-red-400 rounded-lg outline-none ${
                  isScrolled ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm'
                }`}
              >
                {currentLanguage === 'fr' ? 'EN' : 'FR'}
              </button>
              
                            {/* Hamburger Menu - Clean */}
              <button
                onClick={toggleMenu}
                className={`transition-all duration-700 ease-out group bg-transparent border-none outline-none hover:scale-110 ${
                  isScrolled ? 'p-1' : 'p-2'
                }`}
                style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                aria-expanded={isMenuOpen}
                aria-label={t('navbar.menuLabel')}
              >
                <svg
                  className={`text-gray-300 group-hover:text-red-400 transition-all duration-700 ease-out group-hover:scale-110 group-hover:drop-shadow-lg ${
                    isScrolled ? 'h-5 w-5' : 'h-6 w-6'
                  }`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
                 <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-2xl shadow-2xl transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 pt-28">
            {/* Menu Items */}
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`w-full text-left px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 group relative overflow-hidden ${
                    item.isActive
                      ? 'text-white bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
                  <span className="relative z-10 tracking-wide">{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Decorative Elements */}
                         <div className="mt-12 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-red-500/50"></div>
                  <span className="tracking-wider">BARBERSHOP</span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-red-500/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 