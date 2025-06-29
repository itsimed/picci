import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { servicesData } from '../data/servicesData';

const ServicesCatalog: React.FC = () => {
  const { t } = useLanguage();
  
  const handleAppointment = () => {
    // TODO: Implémenter la navigation vers la réservation
    console.log('Make an appointment clicked');
  };

  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase mb-6">
            {t('catalog.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('catalog.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {servicesData.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              {/* Category Title */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-center border-b-2 border-yellow-400 pb-4">
                {t(category.titleKey)}
              </h2>

              {/* Services List */}
              <div className="space-y-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={`${categoryIndex}-${serviceIndex}`}>
                    {/* Service Item */}
                    <div className="space-y-2">
                      {/* Service Name and Price */}
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg sm:text-xl font-semibold text-white tracking-wide flex-1 pr-4">
                          {t(service.nameKey)}
                        </h3>
                        <span className="text-lg sm:text-xl font-bold text-yellow-400 tracking-wider">
                          {service.price}
                        </span>
                      </div>
                      
                      {/* Service Description */}
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {t(service.descriptionKey)}
                      </p>
                    </div>

                    {/* Separator - except for last item */}
                    {serviceIndex < category.services.length - 1 && (
                      <div className="mt-6 border-b border-dashed border-gray-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button
            onClick={handleAppointment}
            className="bg-yellow-400 text-black font-bold tracking-widest uppercase px-8 py-4 text-lg sm:text-xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
          >
            {t('contact.form.submit')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCatalog; 