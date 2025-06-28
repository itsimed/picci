import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

// Données des 4 voitures principales
const allCars = [
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
    brand: 'Chrysler',
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
    brand: 'Ford',
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
    brand: 'Hummer',
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
    brand: 'Nissan',
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
    brand: 'Hyundai',
  },
];

const categories = ['Tous', 'Luxe', 'Sport', 'Électrique'];
const brands = ['Toutes', 'Chrysler', 'Ford', 'Hummer', 'Nissan', 'Hyundai'];

const FullCatalogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedBrand, setSelectedBrand] = useState('Toutes');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); // name, price, year
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  const vehicleWord = currentLanguage === 'fr' ? 'véhicule' : 'vehicle';
  const vehiclePluralWord = currentLanguage === 'fr' ? 'véhicules' : 'vehicles';
  const foundWord = currentLanguage === 'fr' ? 'trouvé' : 'found';

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filtrage des véhicules
  const filteredCars = allCars.filter(car => {
    const matchesCategory = selectedCategory === 'Tous' || car.category === selectedCategory;
    const matchesBrand = selectedBrand === 'Toutes' || car.brand === selectedBrand;
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesBrand && matchesSearch;
  });

  // Tri des véhicules
  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
        const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
        return priceB - priceA; // Prix décroissant
      case 'year':
        return b.year - a.year; // Année décroissante
      default:
        return a.name.localeCompare(b.name); // Nom alphabétique
    }
  });

  const handleCarSelect = (car: typeof allCars[0]) => {
    navigate(`/car/${car.id}`);
  };

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-black via-gray-900 to-black min-h-screen relative">
      {/* Global background animations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-red-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Subtle animated gradient orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/2 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-red-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Moving texture lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-red-500/8 to-transparent animate-fade-in-out"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-red-500/8 to-transparent animate-fade-in-out" style={{ animationDelay: '4s' }}></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-40 h-px bg-gradient-to-l from-red-500/5 to-transparent animate-fade-in-out" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-0 w-40 h-px bg-gradient-to-r from-red-500/5 to-transparent animate-fade-in-out" style={{ animationDelay: '8s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar logo={assets.logoNav} siteName="Tiger Bec Cars" />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-10 md:pb-12 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Subtle background animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="overflow-hidden mb-4 sm:mb-6">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white transform transition-all duration-800 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              {t('catalog.title')}
            </h1>
          </div>
          <div className="overflow-hidden mb-6 sm:mb-8">
            <p className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 transform transition-all duration-800 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              {t('catalog.subtitle')}
            </p>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-sm sm:max-w-lg md:max-w-2xl mx-auto text-center px-4 sm:px-0 transform transition-all duration-800 delay-400 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="group hover:scale-105 transition-transform duration-300 p-3 sm:p-4">
              <span className="text-2xl sm:text-3xl font-bold text-red-500 block group-hover:text-red-400 transition-colors duration-300">5</span>
              <span className="text-gray-300 text-xs sm:text-sm">{t('catalog.stats.exceptionalVehicles')}</span>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 p-3 sm:p-4">
              <span className="text-2xl sm:text-3xl font-bold text-red-500 block group-hover:text-red-400 transition-colors duration-300">1</span>
              <span className="text-gray-300 text-xs sm:text-sm">{t('catalog.stats.electric')}</span>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 p-3 sm:p-4">
              <span className="text-2xl sm:text-3xl font-bold text-red-500 block group-hover:text-red-400 transition-colors duration-300">5</span>
              <span className="text-gray-300 text-xs sm:text-sm">{t('catalog.stats.legendaryBrands')}</span>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300 p-3 sm:p-4">
              <span className="text-2xl sm:text-3xl font-bold text-red-500 block group-hover:text-red-400 transition-colors duration-300">100%</span>
              <span className="text-gray-300 text-xs sm:text-sm">{t('catalog.stats.guaranteedInspection')}</span>
            </div>
          </div>
        </div>
      </section>

        {/* Filtres et Tri */}
        <section className="py-6 sm:py-8 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 relative overflow-hidden">
          {/* Section background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-red-500/1 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8 transform transition-all duration-600 delay-600 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {/* Recherche */}
            <div className="group sm:col-span-2 lg:col-span-1">
              <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                {t('catalog.search')}
              </label>
              <input
                type="text"
                placeholder={t('catalog.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 focus:scale-105 text-sm sm:text-base"
              />
            </div>

            {/* Filtre par catégorie */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                {t('catalog.category')}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 focus:scale-105 text-sm sm:text-base"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Filtre par marque */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                {t('catalog.brand')}
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 focus:scale-105 text-sm sm:text-base"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Tri */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                {t('catalog.sortBy')}
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 focus:scale-105 text-sm sm:text-base"
              >
                <option value="name">{t('catalog.sort.nameAZ')}</option>
                <option value="price">{t('catalog.sort.priceDesc')}</option>
                <option value="year">{t('catalog.sort.yearDesc')}</option>
              </select>
            </div>
          </div>

          {/* Compteur de résultats */}
          <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8 transform transition-all duration-600 delay-700 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}>
            <div className="group">
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                <span className="text-white font-semibold group-hover:text-red-400 transition-colors duration-300">{sortedCars.length}</span>{' '}
                {sortedCars.length === 1 ? vehicleWord : vehiclePluralWord}{' '}
                {foundWord}{currentLanguage === 'fr' && sortedCars.length > 1 ? 's' : ''}
              </p>
            </div>
            
            {(selectedCategory !== 'Tous' || selectedBrand !== 'Toutes' || searchTerm) && (
              <button 
                onClick={() => {
                  setSelectedCategory('Tous');
                  setSelectedBrand('Toutes');
                  setSearchTerm('');
                }}
                className="px-3 sm:px-4 py-2 btn-particles text-xs sm:text-sm rounded-md"
              >
                {t('catalog.resetFilters')}
              </button>
            )}
            </div>
          </div>
        </section>

        {/* Grille des véhicules */}
        <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-black/50 via-gray-900/30 to-black/50 relative overflow-hidden">
          {/* Section background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-orange-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '5s' }}></div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,68,68,0.05) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {sortedCars.length > 0 ? (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transform transition-all duration-600 delay-800 ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              {sortedCars.map((car, index) => (
                <div
                  key={car.id}
                  className={`transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${900 + index * 100}ms` 
                  }}
                >
                  <CarCard
                    id={car.id}
                    name={car.name}
                    description={car.description}
                    imageSrc={car.imageSrc}
                    price={car.price}
                    year={car.year}
                    mileage={car.mileage}
                    fuel={car.fuel}
                    category={car.category}
                    brand={car.brand}
                    onSelect={() => handleCarSelect(car)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={`text-center py-12 sm:py-14 md:py-16 transform transition-all duration-600 delay-800 ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <div className="space-y-4 px-4 sm:px-0">
                <p className="text-gray-400 text-lg sm:text-xl mb-4 transform transition-all duration-500 hover:text-gray-300">
                  {t('catalog.noResults')}
                </p>
                <p className="text-gray-500 mb-6 text-sm sm:text-base">
                  {t('catalog.noResultsSuggestion')}
                </p>
                <button 
                  onClick={() => {
                    setSelectedCategory('Tous');
                    setSelectedBrand('Toutes');
                    setSearchTerm('');
                  }}
                  className="px-4 sm:px-6 py-2 btn-red-primary rounded-md group relative overflow-hidden text-sm sm:text-base"
                >
                  <div className="btn-ping absolute inset-0 border-2 border-red-400 rounded-md opacity-0"></div>
                  <span className="relative z-10">{t('catalog.viewAll')}</span>
                </button>
              </div>
            </div>
          )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default FullCatalogPage; 