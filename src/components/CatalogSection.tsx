import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CutCard from './CutCard';
import { getPopularCuts } from '../data/cutsData';

const CatalogSection: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredCut, setHoveredCut] = useState<string | null>(null);
  
  // Récupérer les 3 coupes les plus populaires
  const popularCuts = getPopularCuts(3);

  const handleCutSelect = (cutId: string) => {
    // Navigation vers la page de détails ou réservation
    console.log('Cut selected:', cutId);
    // TODO: Implémenter la navigation vers la page de détails
  };

  return (
    <section id="catalog" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Subtle animated gradient orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-500/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-red-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Moving light lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-fade-in-out"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-red-500/10 to-transparent animate-fade-in-out" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-red-500/8 to-transparent animate-fade-in-out" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-red-500/8 to-transparent animate-fade-in-out" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated border glows */}
        <div className="absolute top-12 left-12 w-20 h-20 border border-red-500/5 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-12 right-12 w-16 h-16 border border-red-500/5 rounded-full animate-spin-slow" style={{ animationDelay: '8s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('catalog.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('catalog.subtitle')}
          </p>
        </div>

        {/* Popular Cuts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {popularCuts.map((cut, index) => (
            <div
              key={cut.id}
              onMouseEnter={() => setHoveredCut(cut.id)}
              onMouseLeave={() => setHoveredCut(null)}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <CutCard
                cut={cut}
                onSelect={() => handleCutSelect(cut.id)}
              />
          </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/catalog" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 text-sm sm:text-base"
          >
            {t('catalog.viewAllServices')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection; 