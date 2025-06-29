import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';
import { useLanguage } from '../contexts/LanguageContext';

const ProductDisplay: React.FC = () => {
  const { t } = useLanguage();
  
  // Organisation des produits par catégories
  const categorizedProducts = {
    COIFFAGE: [
      "Daimon Barber Texture Clay",
      "Layrite Natural Matte Cream", 
      "Layrite Original Pomade",
      "Layrite Superhold Pomade",
      "Layrite Supershine Cream",
      "Captain Fawcett Sea Salt Spray",
      "Reuzel Surf Tonic",
      "Oil Can Grooming Styling Powder"
    ],
    SOINS: [
      "Level 3 Hair Conditioner",
      "Bullfrog Botanical Butter",
      "Dapper Dan Hair & Body Shampoo", 
      "Uppercut Deluxe Clear Scalp"
    ],
    NETTOYAGE: [
      "Bullfrog Secret Potion N°1"
    ]
  };

  // Fonction pour récupérer les produits d'une catégorie
  const getProductsByCategory = (categoryNames: string[]) => {
    return products.filter(product => 
      categoryNames.includes(product.name)
    );
  };

  // Fonction pour traduire les titres de catégories
  const getCategoryTitle = (categoryKey: string) => {
    switch(categoryKey) {
      case 'COIFFAGE': return t('products.categories.coiffage');
      case 'SOINS': return t('products.categories.soins');
      case 'NETTOYAGE': return t('products.categories.nettoyage');
      default: return categoryKey;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Style catalogue */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase mb-6">
            {t('products.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('products.description', { count: products.length })}
          </p>
        </div>

        {/* Products Sections - Structure horizontale */}
        <div className="space-y-16">
          {Object.entries(categorizedProducts).map(([categoryTitle, productNames]) => (
            <div key={categoryTitle} className="space-y-8">
              {/* Category Title - Style catalogue */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-center border-b-2 border-yellow-400 pb-4 mb-8">
                {getCategoryTitle(categoryTitle)}
              </h2>

              {/* Products Grid Horizontal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {getProductsByCategory(productNames).map((product, index) => (
                  <div key={index} className="text-center">
                    {/* Product Image */}
                    <div className="relative h-32 sm:h-40 bg-transparent mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain object-center"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white tracking-wide">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                        {t(product.descriptionKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section Separator */}
              {Object.keys(categorizedProducts).indexOf(categoryTitle) < Object.keys(categorizedProducts).length - 1 && (
                <div className="mt-12 border-b border-dashed border-gray-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay; 