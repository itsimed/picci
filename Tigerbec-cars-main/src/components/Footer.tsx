import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../config/assets';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img 
                src={assets.logoNav} 
                alt="Tigerbec Cars"
                className="h-10 sm:h-12 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {t('footer.description')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.catalog')}
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('footer.services.title')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.usedCars')}</li>
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.inspection')}</li>
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.warranty')}</li>
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.tradeIn')}</li>
              <li className="text-gray-300 text-sm sm:text-base">{t('footer.services.financing')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t('contact.title')}</h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t('contact.address')}</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  123 Rue de l'Automobile<br />
                  Quartier Premium<br />
                  Montréal, QC H1A 1B2
                </p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t('contact.phone')}</h4>
                <p className="text-gray-300 text-sm sm:text-base">+1 (514) 123-4567</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t('contact.email')}</h4>
                <p className="text-gray-300 text-sm sm:text-base">contact@tigerbeccars.com</p>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{t('contact.hours')}</h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  {t('contact.hours.weekdays')}<br />
                  {t('contact.hours.saturday')}<br />
                  {t('contact.hours.sunday')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Tigerbec Cars. {t('footer.rights')}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 