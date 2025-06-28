import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import CarDetails from '../components/CarDetails';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

// Données des voitures avec toutes leurs images
const carsData = {
  A: {
    id: 'A',
    name: 'Chrysler 300',
    description: 'Berline américaine de luxe, confort et élégance, design iconique.',
    price: '14 800 CAD $',
    year: 2014,
    mileage: '42 000 km',
    fuel: 'Essence',
    category: 'Luxe',
    brand: 'Chrysler',
    images: [
      assets.cars.chrysler.A1,
      assets.cars.chrysler.A2,
      assets.cars.chrysler.A3,
      assets.cars.chrysler.A4,
      assets.cars.chrysler.A5,
      assets.cars.chrysler.A6,
      assets.cars.chrysler.A7,
      assets.cars.chrysler.A8,
    ],
  },
  B: {
    id: 'B',
    name: 'Ford Fusion',
    description: 'Muscle car légendaire, moteur V8, puissance et caractère américain.',
    price: '4 200 CAD $',
    year: 2012,
    mileage: '28 000 km',
    fuel: 'Essence',
    category: 'Sport',
    brand: 'Ford',
    images: [
      assets.cars.ford.B1,
      assets.cars.ford.B2,
      assets.cars.ford.B3,
      assets.cars.ford.B4,
      assets.cars.ford.B5,
    ],
  },
  C: {
    id: 'C',
    name: 'Hummer ',
    description: 'SUV électrique tout-terrain, technologie moderne, robustesse légendaire.',
    price: '85 200 CAD $',
    year: 2022,
    mileage: '15 000 km',
    fuel: 'Électrique',
    category: 'Électrique',
    brand: 'Hummer',
    images: [
      assets.cars.hummer.C1,
      assets.cars.hummer.C2,
      assets.cars.hummer.C4,
      assets.cars.hummer.C6,
      assets.cars.hummer.C7,
    ],
  },
  D: {
    id: 'D',
    name: 'Nissan Versa',
    description: 'Supercar japonaise, performances exceptionnelles, technologie de pointe.',
    price: '5 200 CAD $',
    year: 2012,
    mileage: '18 000 km',
    fuel: 'Essence',
    category: 'Sport',
    brand: 'Nissan',
    images: [
      assets.cars.nissan.D1,
      assets.cars.nissan.D2,
      assets.cars.nissan.D3,
      assets.cars.nissan.D4,
      assets.cars.nissan.D5,
      assets.cars.nissan.D6,
      assets.cars.nissan.D7,
    ],
  },
  E: {
    id: 'E',
    name: 'Hyundai Elantra',
    description: 'Berline de luxe coréenne, technologie avancée, confort premium.',
    price: '10 900 CAD $',
    year: 2017,
    mileage: '22 000 km',
    fuel: 'Essence',
    category: 'Luxe',
    brand: 'Hyundai',
    images: [
      assets.cars.hyundai.E1,
      assets.cars.hyundai.E2,
      assets.cars.hyundai.E3,
      assets.cars.hyundai.E4,
      assets.cars.hyundai.E5,
      assets.cars.hyundai.E7,
      assets.cars.hyundai.E8,
    ],
  },
};

const CarDetailPage: React.FC = () => {
  const { carId } = useParams<{ carId: string }>();
  const { t } = useLanguage();
  
  if (!carId || !carsData[carId as keyof typeof carsData]) {
    return (
      <div className="w-full overflow-x-hidden bg-black min-h-screen">
        <Navbar logo={assets.logoNav} siteName="Tiger Bec Cars" />
        
        <div className="pt-24 pb-12 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{t('carNotFoundTitle')}</h1>
            <p className="text-gray-300 mb-8">{t('carNotFoundDescription')}</p>
            <a 
              href="/catalog"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('returnToCatalog')}
            </a>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  const car = carsData[carId as keyof typeof carsData];

  return (
    <div className="w-full overflow-x-hidden bg-black min-h-screen">
      <Navbar logo={assets.logoNav} siteName="Tigerbec Cars" />
      
      {/* Main Content */}
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-10 md:pb-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 h-full">
            {/* Carrousel d'images - Gauche (fixe) */}
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-hidden order-1">
              <ImageCarousel images={car.images} carName={car.name} />
            </div>
            
            {/* Détails de la voiture - Droite (scrollable) */}
            <div 
              className="lg:overflow-y-auto lg:h-[calc(100vh-6rem)] lg:pr-4 order-2"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#4B5563 #111827'
              }}
            >
              <CarDetails car={car} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetailPage; 