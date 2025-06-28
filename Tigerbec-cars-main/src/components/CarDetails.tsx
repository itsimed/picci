import React from 'react';
import { Link } from 'react-router-dom';

interface CarDetailsProps {
  car: {
    id: string;
    name: string;
    description: string;
    price: string;
    year: number;
    mileage: string;
    fuel: string;
    category: string;
    brand: string;
  };
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
  const specifications = [
    { label: 'Marque', value: car.brand },
    { label: 'Année', value: car.year.toString() },
    { label: 'Kilométrage', value: car.mileage },
    { label: 'Carburant', value: car.fuel },
    { label: 'Catégorie', value: car.category },
    { label: 'Transmission', value: 'Automatique' },
    { label: 'Couleur', value: 'Disponible sur demande' },
    { label: 'Nombre de places', value: '5' },
    { label: 'État', value: 'Excellent' },
    { label: 'Garantie', value: '12 mois' },
  ];

  const features = [
    'Climatisation automatique',
    'Système de navigation GPS',
    'Caméra de recul',
    'Capteurs de stationnement',
    'Bluetooth et USB',
    'Régulateur de vitesse',
    'Jantes alliage',
    'Éclairage LED',
    'Système audio premium',
    'Sièges chauffants',
  ];

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded">
            {car.category}
          </span>
          <span className="text-gray-400 text-sm">{car.brand}</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">{car.name}</h1>
        <p className="text-xl text-gray-300 leading-relaxed">{car.description}</p>
      </div>

      {/* Prix */}
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-red-500 mb-2">{car.price}</div>
          <p className="text-gray-400">Prix tout inclus, garantie comprise</p>
        </div>
      </div>

      {/* Spécifications */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Spécifications</h2>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specifications.map((spec, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-700 last:border-b-0">
                <span className="text-gray-400">{spec.label}</span>
                <span className="text-white font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Équipements */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Équipements inclus</h2>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <button className="w-full btn-red-primary py-4 px-6 rounded-lg group relative overflow-hidden">
          <div className="btn-ping absolute inset-0 border-2 border-red-400 rounded-lg opacity-0"></div>
          <span className="relative z-10">Demander un essai</span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="btn-elegant py-3 px-6 rounded-lg">
            Calculer financement
          </button>
          <button className="btn-border-glow py-3 px-6 rounded-lg">
            Demander devis
          </button>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-900 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Contactez-nous</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-gray-300">+1 (514) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-gray-300">contact@tigerbeccars.com</span>
          </div>
        </div>
      </div>

      {/* Retour au catalogue */}
      <div className="text-center">
        <Link 
          to="/catalog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour au catalogue
        </Link>
      </div>
    </div>
  );
};

export default CarDetails; 