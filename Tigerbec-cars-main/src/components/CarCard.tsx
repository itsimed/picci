import React from 'react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  id?: string;
  name: string;
  description: string;
  imageSrc?: string;
  price: string;
  year: number;
  mileage: string;
  fuel: string;
  category?: string;
  brand?: string;
  onSelect?: () => void;
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  name,
  description,
  imageSrc,
  price,
  year,
  mileage,
  fuel,
  category,
  brand,
  onSelect,
}) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
      onClick={onSelect}
    >
      <div className="h-36 sm:h-40 md:h-48 bg-gray-700 relative overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-500 text-sm sm:text-base md:text-lg">Image à venir</span>
          </div>
        )}
        {category && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded">
              {category}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
          <h3 className="text-lg sm:text-xl md:text-xl font-bold text-white order-1">{name}</h3>
          {brand && (
            <span className="text-xs sm:text-sm text-gray-400 font-medium order-2 sm:order-2">{brand}</span>
          )}
        </div>
        
        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-3 sm:mb-4 text-xs sm:text-sm">
          <div className="text-center">
            <span className="text-gray-400 block text-xs">Année</span>
            <span className="text-white font-semibold text-xs sm:text-sm">{year}</span>
          </div>
          <div className="text-center">
            <span className="text-gray-400 block text-xs">Kilométrage</span>
            <span className="text-white font-semibold text-xs sm:text-sm">{mileage}</span>
          </div>
          <div className="text-center">
            <span className="text-gray-400 block text-xs">Carburant</span>
            <span className="text-white font-semibold text-xs sm:text-sm">{fuel}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-red-500 order-2 sm:order-1">{price}</span>
          <Link 
            to={`/car/${id}`}
            className="px-3 sm:px-4 py-2 btn-neon text-xs sm:text-sm font-semibold rounded group relative overflow-hidden order-1 sm:order-2 text-center"
          >
            <span className="relative z-10">Voir Détails</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard; 