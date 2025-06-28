import React from 'react';
import { colors } from '../config/colors';

interface BusinessCardProps {
  name: string;
  description: string;
  imageSrc?: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ name, description, imageSrc }) => {
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-lg hover:border-red-600 transition-all duration-200 text-center flex flex-col items-center min-h-[200px] sm:min-h-[220px]">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full mb-3 sm:mb-4"
        />
      )}
      <h3
        className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-white"
      >
        {name}
      </h3>
      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2">{description}</p>
    </div>
  );
};

export default BusinessCard; 