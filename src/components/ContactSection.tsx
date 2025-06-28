import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitMessage(t('contact.form.successMessage'));
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
    
    // Effacer le message après 5 secondes
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-red-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-red-500/4 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-orange-500/4 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Additional central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-red-500/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
        
        {/* Floating lines */}
        <div className="absolute top-0 left-1/4 w-1 h-16 sm:h-24 md:h-32 bg-gradient-to-b from-transparent via-red-500/15 to-transparent animate-slide-down"></div>
        <div className="absolute bottom-0 right-1/3 w-1 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-transparent via-orange-500/15 to-transparent animate-slide-up"></div>
        
        {/* Corner accent lines */}
        <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-px bg-gradient-to-l from-red-500/10 to-transparent animate-fade-in-out"></div>
        <div className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 h-px bg-gradient-to-r from-red-500/10 to-transparent animate-fade-in-out" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="overflow-hidden mb-4 sm:mb-6">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white transform transition-all duration-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              {t('contact.title')}
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed transform transition-all duration-800 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              {t('contact.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className={`transform transition-all duration-800 delay-400 order-2 lg:order-1 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-red-500/30 transition-all duration-500 group">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 group-hover:text-red-400 transition-colors duration-300">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Adresse */}
                <div className="flex items-start space-x-3 sm:space-x-4 group/item hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-red-600/40 transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover/item:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover/item:text-red-400 transition-colors duration-300 text-sm sm:text-base">
                      {t('contact.info.address.title')}
                    </h4>
                    <p className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-sm sm:text-base">
                      {t('contact.info.address.line1')}<br />
                      {t('contact.info.address.line2')}<br />
                      {t('contact.info.address.line3')}
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start space-x-3 sm:space-x-4 group/item hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-red-600/40 transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 group-hover/item:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover/item:text-red-400 transition-colors duration-300 text-sm sm:text-base">
                      {t('contact.info.phone.title')}
                    </h4>
                    <p className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-sm sm:text-base">
                      {t('contact.info.phone.number')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4 group/item hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-gray-600/40 transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover/item:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover/item:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                      {t('contact.info.email.title')}
                    </h4>
                    <p className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-sm sm:text-base">
                      {t('contact.info.email.address')}
                    </p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start space-x-3 sm:space-x-4 group/item hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange-600/40 transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 group-hover/item:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover/item:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                      {t('contact.info.hours.title')}
                    </h4>
                    <p className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-sm sm:text-base">
                      {t('contact.info.hours.weekdays')}<br />
                      {t('contact.info.hours.weekend')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-800 delay-600 order-1 lg:order-2 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-red-500/30 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                {t('contact.form.title')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Nom */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-500 focus:scale-105 text-sm sm:text-base"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-500 focus:scale-105 text-sm sm:text-base"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-500 focus:scale-105 text-sm sm:text-base"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-gray-500 focus:scale-105 resize-none text-sm sm:text-base"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-red-primary py-3 sm:py-4 px-6 sm:px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden text-sm sm:text-base"
                  >
                    {/* Button ping effect */}
                    <div className="btn-ping absolute inset-0 border-2 border-red-400 rounded-lg opacity-0"></div>
                    
                    <span className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t('contact.form.sending')}
                        </>
                      ) : (
                        <>
                          {t('contact.form.submit')}
                          <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>

                {/* Success Message */}
                {submitMessage && (
                  <div className="mt-4 p-3 sm:p-4 bg-green-600/20 border border-green-500/50 rounded-lg animate-fade-in">
                    <p className="text-green-400 text-center font-medium text-sm sm:text-base">{submitMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;