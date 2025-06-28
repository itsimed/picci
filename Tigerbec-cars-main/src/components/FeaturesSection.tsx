import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    number: "01",
    title: "Premium Selection",
    description: "Discover top-tier automobiles curated for quality assurance, ensuring excellence in every ride, backed by our commitment to unmatched standards."
  },
  {
    number: "02",
    title: "Exclusive Service",
    description: "Experience tailored automotive service, ensuring every interaction is exceptional and personalized to your unique preferences."
  },
  {
    number: "03",
    title: "Swift & Secure",
    description: "Get your vehicle promptly and safely with our efficient delivery options, prioritizing safety at every step of the process."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            We Have Best Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Explore our diverse selection of top-tier vehicles and experience automotive excellence firsthand. Explore our diverse selection of
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