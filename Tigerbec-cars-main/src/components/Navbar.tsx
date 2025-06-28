import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../config/colors';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  logo?: string;
  siteName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  logo, 
  siteName = "Site Vitrine" 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { currentLanguage, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '/', isInternal: true },
    { label: t('nav.catalog'), href: '/catalog', isInternal: true },
    { label: t('nav.about'), href: '/#about', isInternal: false },
    { label: t('nav.contact'), href: '/#contact', isInternal: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-700' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo / Site Name */}
          <div className="flex items-center flex-shrink-0">
            {logo ? (
              <img 
                src={logo} 
                alt={siteName}
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto p-1 sm:p-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] filter brightness-110"
              />
            ) : (
              <span 
                className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white filter brightness-110"
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)'
                }}
              >
                {siteName}
              </span>
            )}
          </div>

          {/* Desktop Navigation and Language Toggle */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <div className="flex items-baseline space-x-4 xl:space-x-8">
              {navItems.map((item) => {
                const isActive = (item.href === '/' && location.pathname === '/') || 
                                (item.href === '/catalog' && location.pathname === '/catalog');
                const baseClasses = "relative px-2 xl:px-3 py-2 text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap";
                const activeClasses = isActive 
                  ? "text-white" 
                  : "text-gray-300 hover:text-white";
                
                return item.isInternal ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`${baseClasses} ${activeClasses} group`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-200 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${baseClasses} ${activeClasses} group`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-200 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </a>
                );
              })}
            </div>
            
            {/* Desktop Language Toggle Button */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="relative flex items-center gap-2 px-3 xl:px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-full border border-gray-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
                title={currentLanguage === 'fr' ? 'Switch to English' : 'Passer en Français'}
              >
                <div className="relative">
                  <span className="text-base xl:text-lg transform transition-transform duration-300 group-hover:scale-110">
                    {currentLanguage === 'fr' ? '🇫🇷' : '🇺🇸'}
                  </span>
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative overflow-hidden">
                  <span className="block text-xs xl:text-sm font-semibold tracking-wider transition-transform duration-300 group-hover:translate-y-[-100%]">
                    {currentLanguage === 'fr' ? 'FR' : 'EN'}
                  </span>
                  <span className="absolute top-full left-0 text-xs xl:text-sm font-semibold tracking-wider text-red-400 transition-transform duration-300 group-hover:translate-y-[-100%]">
                    {currentLanguage === 'fr' ? 'EN' : 'FR'}
                  </span>
                </div>
                
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-red-500 via-red-300 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Tablet and Mobile menu button and language toggle */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            {/* Mobile/Tablet Language Toggle */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="relative flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-full border border-gray-600 text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 group"
                title={currentLanguage === 'fr' ? 'Switch to English' : 'Passer en Français'}
              >
                <span className="text-xs sm:text-sm transform transition-transform duration-300 group-hover:scale-110">
                  {currentLanguage === 'fr' ? '🇫🇷' : '🇺🇸'}
                </span>
                
                <div className="relative overflow-hidden h-3 sm:h-4">
                  <span className="block text-xs font-semibold tracking-wider transition-transform duration-300 group-hover:translate-y-[-100%]">
                    {currentLanguage === 'fr' ? 'FR' : 'EN'}
                  </span>
                  <span className="absolute top-full left-0 text-xs font-semibold tracking-wider text-red-400 transition-transform duration-300 group-hover:translate-y-[-100%]">
                    {currentLanguage === 'fr' ? 'EN' : 'FR'}
                  </span>
                </div>
                
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </div>
              </button>
            </div>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
              aria-label="Menu principal"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
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

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 border-t border-gray-700' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-4 pb-6 space-y-2 bg-black/95 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = (item.href === '/' && location.pathname === '/') || 
                              (item.href === '/catalog' && location.pathname === '/catalog');
              const baseClasses = "block px-4 py-3 rounded-md text-base font-medium transition-all duration-200";
              const activeClasses = isActive 
                ? "text-red-400 bg-gray-800/50" 
                : "text-gray-300 hover:text-white hover:bg-gray-800/50";
              
              return item.isInternal ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`${baseClasses} ${activeClasses}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${baseClasses} ${activeClasses}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 