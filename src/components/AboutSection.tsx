import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className={`order-2 lg:order-1 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            {/* Nouveau contenu texte */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('about.description2')}
              </p>
              
              {/* Motto en gras avec style moderne */}
              <div className="relative my-8">
                <p className="text-2xl sm:text-3xl font-bold text-white text-center py-4 relative z-10">
                  {t('about.motto')}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent rounded-lg"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('about.experience.text')}
              </p>
              
              {/* CTA avec style moderne */}
              <div className="mt-6">
                <p className="text-cyan-400 text-xl font-semibold tracking-wide">
                  {t('about.cta')}
                </p>
              </div>
            </div>

            {/* Statistiques en présentation horizontale */}
            <div className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                {/* +10 ans d'expertise */}
                <div className={`text-center group transform transition-all duration-700 delay-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}>
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800/50 hover:border-cyan-500/40 transition-all duration-500 hover:bg-gray-800/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {t('about.stats.expertise.number')}
                    </div>
                    <div className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                      {t('about.stats.expertise.label')}
                    </div>
                  </div>
                </div>

                {/* +4000 véhicules lavés */}
                <div className={`text-center group transform transition-all duration-700 delay-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}>
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800/50 hover:border-cyan-500/40 transition-all duration-500 hover:bg-gray-800/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {t('about.stats.vehicles.number')}
                    </div>
                    <div className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                      {t('about.stats.vehicles.label')}
                    </div>
                  </div>
                </div>

                {/* 99% satisfaction */}
                <div className={`text-center group transform transition-all duration-700 delay-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}>
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800/50 hover:border-cyan-500/40 transition-all duration-500 hover:bg-gray-800/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {t('about.stats.satisfaction.number')}
                    </div>
                    <div className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                      {t('about.stats.satisfaction.label')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative order-1 lg:order-2 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl group">
              <img 
                src={assets.aboutImage} 
                alt={t('about.imageAlt')} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay avec reflet animé */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Reflet animé */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              {/* Vignettage moderne */}
              <div className="absolute inset-0 rounded-lg shadow-inner" style={{
                background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)'
              }}></div>
            </div>
            
            {/* Éléments décoratifs mis à jour */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500/20 rounded-full blur-sm animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full blur-sm animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-2 w-4 h-4 bg-cyan-400/30 rounded-full blur-sm animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 