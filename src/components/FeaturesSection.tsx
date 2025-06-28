import React from 'react';
import FeatureCard from './FeatureCard';
import { useLanguage } from '../contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      number: "01",
      title: t('features.quality.title'),
      description: t('features.quality.desc')
    },
    {
      number: "02",
      title: t('features.price.title'),
      description: t('features.price.desc')
    },
    {
      number: "03",
      title: t('features.service.title'),
      description: t('features.service.desc')
    }
  ];

  return (
    <section className="mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('features.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {t('catalog.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.number}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 