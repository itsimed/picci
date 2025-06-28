import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductsHomeSectionProps {
  isLoaded: boolean;
}

const ProductsHomeSection: React.FC<ProductsHomeSectionProps> = ({ isLoaded }) => {
  const { t } = useLanguage();
  // Sélectionner 1 produit de chaque catégorie pour la HomePage
  const featuredProducts = [
    {
      id: 'featured-coiffage',
      name: 'Layrite Original Pomade',
      description: 'Pomade classique à brillance modérée et tenue moyenne. S\'élimine à l\'eau, parfaite pour les styles rétro.',
      imageSrc: '/images/products/cire-cheveux-original.jpg',
    },
    {
      id: 'featured-soins',
      name: 'Level 3 Hair Conditioner',
      description: 'Après-shampoing nourrissant pour tous types de cheveux. Il revitalise, hydrate et adoucit la fibre capillaire.',
      imageSrc: '/images/products/hair-conditionner-apres-shampoing-cheveux.jpg',
    },
    {
      id: 'featured-nettoyage',
      name: 'Bullfrog Secret Potion N°1',
      description: 'Gel douche multi-usage cheveux, barbe et corps. Nettoyage doux et parfum signature Bullfrog.',
      imageSrc: '/images/products/gel-douche-multi-usages-secret-potion-n1.jpg',
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-red-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-orange-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '7s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {t('home.products.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('home.products.description')}
          </p>
        </div>

        {/* Products Grid Horizontal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group transform transition-all duration-600 hover:scale-105 ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${1400 + index * 100}ms` 
              }}
            >
              {/* Product Card */}
              <div className="text-center space-y-6">
                {/* Product Image */}
                <div className="relative h-64 sm:h-72 md:h-80 bg-transparent mx-auto max-w-xs">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Product Content */}
                <div className="space-y-4">
                  {/* Product Name */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  {/* Product Description */}
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-sm mx-auto">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/products"
            className="group relative inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-500 ease-out
              hover:from-red-700 hover:to-red-800 hover:shadow-[0_20px_40px_-12px_rgba(220,38,38,0.4)]
              transform hover:scale-[1.02] hover:-translate-y-1 hover:rotate-[0.3deg]
              active:scale-[0.98] active:translate-y-0
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[100%]
              after:absolute after:inset-0 after:bg-gradient-to-br after:from-red-400/20 after:via-transparent after:to-red-900/20 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100"
          >
            <span className="relative z-10 transition-all duration-300 group-hover:text-shadow-glow flex items-center justify-center gap-2">
              <span>{t('home.products.cta')}</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Product discovery particles */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
              <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <div className="absolute bottom-1/4 left-1/2 w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
              <div className="absolute top-1/2 right-1/5 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsHomeSection; 