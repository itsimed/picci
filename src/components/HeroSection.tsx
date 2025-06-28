import React, { useEffect, useState } from 'react';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      className="mb-12 sm:mb-16 md:mb-20 relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%), url('${assets.back}')`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Moving Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-right"></div>
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-red-500/30 to-transparent animate-slide-left"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12">
            {/* Animated Title */}
            <div className="overflow-hidden mb-4 sm:mb-6">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                {t('hero.heading')}
              </h1>
            </div>
            
            {/* Animated Subtitle */}
            <div className="overflow-hidden mb-6 sm:mb-8">
              <p className={`text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-4 sm:px-0 transform transition-all duration-1000 delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                {t('hero.description')}
              </p>
            </div>
            
            {/* Animated Button */}
            <div className={`flex justify-center px-4 sm:px-0 transform transition-all duration-1000 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <button 
                onClick={() => {
                  const catalogSection = document.getElementById('catalog');
                  catalogSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-6 sm:px-8 py-2.5 sm:py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 rounded flex items-center gap-2 overflow-hidden text-sm sm:text-base"
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Button Content */}
                <span className="relative z-10 transition-colors duration-300">
                  {t('hero.cta.scrollDown')}
                </span>
                <svg className="relative z-10 w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 border border-white rounded opacity-0 group-hover:opacity-100 animate-ping"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex flex-col items-center gap-1 sm:gap-2 animate-bounce-slow">
            <div className="w-px h-4 sm:h-6 md:h-8 bg-gradient-to-b from-transparent to-white/50"></div>
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Animated Border Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-glow"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-glow" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection; 