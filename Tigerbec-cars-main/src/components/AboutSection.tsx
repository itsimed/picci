import React from 'react';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              {t('about.history.title')}
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              {t('about.history.p1')}
            </p>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              {t('about.history.p2')}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-red-500/50 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">{25}+</div>
                <div className="text-gray-300 text-sm sm:text-base">{t('about.experience')}</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-red-500/50 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">{5000}+</div>
                <div className="text-gray-300 text-sm sm:text-base">{t('about.vehiclesSold')}</div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={assets.aboutImage} 
                alt={t('about.imageAlt')} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient for better text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500/20 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 