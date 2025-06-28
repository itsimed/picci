import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

const featuredVehicles = [
  {
    id: 'A',
    name: 'Chrysler 300',
    description: 'Berline américaine de luxe, confort et élégance, design iconique.',
    price: '14 800 CAD $',
    year: 2014,
    mileage: '42 000 km',
    fuel: 'Essence',
    imageSrc: assets.cars.chrysler.A1,
    category: 'Luxe',
  },
  {
    id: 'B',
    name: 'Ford Fusion',
    description: 'Muscle car légendaire, moteur V8, puissance et caractère américain.',
    price: '4 200 CAD $',
    year: 2012,
    mileage: '28 000 km',
    fuel: 'Essence',
    imageSrc: assets.cars.ford.B1,
    category: 'Sport',
  },
  {
    id: 'C',
    name: 'Hummer ',
    description: 'SUV électrique tout-terrain, technologie moderne, robustesse légendaire.',
    price: '85 200 CAD $',
    year: 2018,
    mileage: '15 000 km',
    fuel: 'Électrique',
    imageSrc: assets.cars.hummer.C1,
    category: 'Électrique',
  },
  {
    id: 'D',
    name: 'Nissan Versa',
    description: 'Supercar japonaise, performances exceptionnelles, technologie de pointe.',
    price: '5 200 CAD $',
    year: 2012,
    mileage: '18 000 km',
    fuel: 'Essence',
    imageSrc: assets.cars.nissan.D1,
    category: 'Sport',
  },
  {
    id: 'E',
    name: 'Hyundai Elantra',
    description: 'Berline de luxe coréenne, technologie avancée, confort premium.',
    price: '10 900 CAD $',
    year: 2017,
    mileage: '22 000 km',
    fuel: 'Essence',
    imageSrc: assets.cars.hyundai.E1,
    category: 'Luxe',
  },
];

const CatalogSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swipe every 2 seconds - restart timer when currentIndex changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredVehicles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency on currentIndex to restart timer

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredVehicles.length) % featuredVehicles.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredVehicles.length);
  };

  return (
    <section id="catalog" className="py-12 sm:py-16 md:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('catalog.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            {t('catalog.subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12 px-0">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-black shadow-lg sm:shadow-xl lg:shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredVehicles.map((vehicle, index) => (
                <div key={vehicle.id} className="min-w-full relative">
                  {/* Car Image */}
                  <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9] relative">
                    <img 
                      src={vehicle.imageSrc} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent sm:from-black/70 sm:via-transparent sm:to-transparent"></div>
                    
                    {/* Car Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-end sm:justify-between lg:space-y-0">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 leading-tight">
                            {vehicle.name}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 max-w-xs sm:max-w-md lg:max-w-lg line-clamp-2 sm:line-clamp-none">
                            {vehicle.description}
                          </p>
                          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm">
                            <span className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                              {vehicle.year}
                            </span>
                            <span className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                              {vehicle.mileage}
                            </span>
                            <span className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                              {vehicle.fuel}
                            </span>
                            <span className="bg-red-600/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                              {vehicle.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-end space-x-4 sm:space-x-0 sm:space-y-3 lg:space-y-4 sm:text-right">
                          <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-400">
                            {vehicle.price}
                          </div>
                          <Link 
                            to={`/car/${vehicle.id}`}
                            className="inline-block px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-red-600 hover:bg-red-700 border-2 border-red-600 hover:border-red-500 text-white text-sm sm:text-base font-semibold rounded-md lg:rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 whitespace-nowrap"
                          >
                            {t('common.seeMore')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
            <button 
              onClick={goToPrevious}
              className="hidden sm:block absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full backdrop-blur-sm bg-black/50 hover:bg-red-600/80 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full backdrop-blur-sm bg-black/50 hover:bg-red-600/80 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
            {featuredVehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-red-600 w-6 sm:w-8' 
                    : 'bg-gray-600 hover:bg-gray-500 w-2 sm:w-3'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-0.5 sm:h-1 mt-3 sm:mt-4 overflow-hidden">
            <div 
              className="bg-red-600 h-0.5 sm:h-1 rounded-full transition-all duration-2000 ease-linear"
              style={{
                width: `${((currentIndex + 1) / featuredVehicles.length) * 100}%`
              }}
            />
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex sm:hidden justify-between items-center mt-4 px-4">
            <button 
              onClick={goToPrevious}
              className="p-3 rounded-full bg-gray-800 hover:bg-red-600 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-gray-400 text-sm">
              {currentIndex + 1} / {featuredVehicles.length}
            </span>
            <button 
              onClick={goToNext}
              className="p-3 rounded-full bg-gray-800 hover:bg-red-600 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            to="/catalog"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 btn-red-primary rounded-lg group relative overflow-hidden text-sm sm:text-base"
          >
            <div className="btn-ping absolute inset-0 border-2 border-red-400 rounded-lg opacity-0"></div>
            <span className="relative z-10">{t('catalog.viewAll')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection; 