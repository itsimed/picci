import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductDisplay from '../components/ProductDisplay';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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
        
        {/* Medium particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`mid-${i}`}
            className="absolute w-1 h-1 bg-orange-500/15 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/1 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '12s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Navbar logo={assets.logoNav} siteName={t('navbar.siteName')} />
        
        {/* Main Content */}
        <main className="pt-20">
          <ProductDisplay />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage; 