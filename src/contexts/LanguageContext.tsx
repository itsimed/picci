import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: { fr: string; en: string };
}

// Traductions temporaires - à compléter avec le contenu barbershop
const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.catalog': { fr: 'Services', en: 'Services' },
  'nav.products': { fr: 'Produits', en: 'Products' },
  'nav.about': { fr: 'À Propos', en: 'About' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  'nav.language': { fr: 'EN', en: 'FR' },

  // Hero section - Carwash
  'hero.title': { fr: 'Clean. Shine. Drive.', en: 'Clean. Shine. Drive.' },
  'hero.heading': { fr: 'Clean. Shine. Drive.', en: 'Clean. Shine. Drive.' },
  'hero.subtitle': { fr: 'Offrez à votre véhicule l\'éclat qu\'il mérite, chaque jour', en: 'Give your vehicle the shine it deserves, every day' },
  'hero.description': { fr: 'Découvrez l\'excellence du lavage automobile avec nos techniques modernes et notre service premium.', en: 'Discover excellence in car washing with our modern techniques and premium service.' },
  'hero.cta': { fr: 'Faites-la briller maintenant', en: 'Make it shine now' },
  'hero.cta.scrollDown': { fr: 'Découvrir nos services', en: 'Discover our services' },

  // About section - Ricci Carwash
  'about.title': { fr: 'Plus qu\'un lavage, une tradition.', en: 'More than a wash, a tradition.' },
  'about.description': { fr: "Depuis plus de 10 ans, Ricci Carwash transforme chaque lavage en rituel.", en: "For over 10 years, Ricci Carwash transforms every wash into a ritual." },
  'about.description2': { fr: "Mousse riche, finition miroir, et technologie de pointe s'unissent pour révéler l'éclat authentique de votre voiture.", en: "Rich foam, mirror finish, and cutting-edge technology unite to reveal your car's authentic shine." },
  'about.slogan': { fr: "Mousse riche, finition miroir, et technologie de pointe s'unissent pour révéler l'éclat authentique de votre voiture.", en: "Rich foam, mirror finish, and cutting-edge technology unite to reveal your car's authentic shine." },
  'about.motto': { fr: "Speed. Style. Satisfaction.", en: "Speed. Style. Satisfaction." },
  'about.experience.text': { fr: "Vivez une expérience rapide, efficace et toujours au top, parce que votre voiture mérite mieux qu'un simple rinçage.", en: "Experience speed, efficiency and always top quality, because your car deserves better than a simple rinse." },
  'about.cta': { fr: "➤ Repartez propres. Brillez sur la route.", en: "➤ Leave clean. Shine on the road." },
  'about.stats.expertise.number': { fr: "+10 ans", en: "+10 years" },
  'about.stats.expertise.text': { fr: "d'expertise – De confiance dans le detailing auto", en: "of expertise – Trusted in auto detailing" },
  'about.stats.expertise.label': { fr: "Expertise", en: "Expertise" },
  'about.stats.vehicles.number': { fr: "+4000", en: "+4000" },
  'about.stats.vehicles.text': { fr: "véhicules lavés – Et toujours en croissance", en: "vehicles washed – And still growing" },
  'about.stats.vehicles.label': { fr: "Véhicules traités", en: "Vehicles Treated" },
  'about.stats.satisfaction.number': { fr: "99%", en: "99%" },
  'about.stats.satisfaction.text': { fr: "de clients satisfaits – Et ils reviennent !", en: "satisfied customers – And they come back!" },
  'about.stats.satisfaction.label': { fr: "Clients satisfaits", en: "Satisfied Customers" },
  'about.imageAlt': { fr: "Intérieur du centre de lavage Ricci Carwash", en: "Inside Ricci Carwash center" },

  // Features section - Barbershop
  'features.title': { fr: 'L\'Expertise Barbier : Votre Garantie de Style', en: 'Barber Expertise: Your Style Guarantee' },
  'features.subtitle': { fr: 'Trois piliers qui font notre réputation', en: 'Three pillars that make our reputation' },
  'features.experience.title': { fr: 'Maîtrise Artisanale', en: 'Artisan Mastery' },
  'features.experience.description': { fr: 'Des barbiers expérimentés qui maîtrisent l\'art traditionnel de la coiffure masculine.', en: 'Experienced barbers who master the traditional art of men\'s grooming.' },
  'features.quality.title': { fr: 'Produits Premium', en: 'Premium Products' },
  'features.quality.description': { fr: 'Nous utilisons exclusivement des produits haut de gamme pour des résultats exceptionnels.', en: 'We exclusively use high-end products for exceptional results.' },
  'features.quality.desc': { fr: 'Nous utilisons exclusivement des produits haut de gamme pour des résultats exceptionnels.', en: 'We exclusively use high-end products for exceptional results.' },
  'features.price.title': { fr: 'Tarifs Transparents', en: 'Transparent Pricing' },
  'features.price.desc': { fr: 'Des prix justes et transparents pour tous nos services, sans surprise.', en: 'Fair and transparent prices for all our services, no surprises.' },
  'features.service.title': { fr: 'Service Personnalisé', en: 'Personalized Service' },
  'features.service.description': { fr: 'Chaque client reçoit une attention particulière et des conseils sur mesure.', en: 'Each client receives special attention and tailor-made advice.' },
  'features.service.desc': { fr: 'Chaque client reçoit une attention particulière et des conseils sur mesure.', en: 'Each client receives special attention and tailor-made advice.' },

  // Catalog section - Services
  'catalog.title': { fr: 'Nos Services', en: 'Our Services' },
  'catalog.subtitle': { fr: 'Découvrez notre gamme complète de services de barbier professionnel', en: 'Discover our complete range of professional barber services' },
  'catalog.viewAllServices': { fr: 'Voir Tous les Services', en: 'View All Services' },

  // Contact section
  'contact.title': { fr: 'Prenons Rendez-vous', en: 'Let\'s Schedule' },
  'contact.subtitle': { fr: 'Réservez votre créneau dès maintenant', en: 'Book your slot now' },
  'contact.form.title': { fr: 'Formulaire de Contact', en: 'Contact Form' },
  'contact.form.name': { fr: 'Votre nom complet', en: 'Your full name' },
  'contact.form.namePlaceholder': { fr: 'Entrez votre nom complet', en: 'Enter your full name' },
  'contact.form.email': { fr: 'Votre adresse email', en: 'Your email address' },
  'contact.form.emailPlaceholder': { fr: 'Entrez votre adresse email', en: 'Enter your email address' },
  'contact.form.phone': { fr: 'Votre numéro de téléphone', en: 'Your phone number' },
  'contact.form.phonePlaceholder': { fr: 'Entrez votre numéro de téléphone', en: 'Enter your phone number' },
  'contact.form.service': { fr: 'Service souhaité', en: 'Desired service' },
  'contact.form.message': { fr: 'Votre message', en: 'Your message' },
  'contact.form.messagePlaceholder': { fr: 'Précisez vos préférences ou questions...', en: 'Specify your preferences or questions...' },
  'contact.form.submit': { fr: 'Prendre Rendez-vous', en: 'Book Appointment' },
  'contact.form.sending': { fr: 'Envoi en cours...', en: 'Sending...' },
  'contact.form.successMessage': { fr: 'Message envoyé avec succès !', en: 'Message sent successfully!' },
  'contact.info.title': { fr: 'Informations de Contact', en: 'Contact Information' },
  'contact.info.address': { fr: '123 Rue Principale, Montréal, QC H2X 1Y4', en: '123 Main Street, Montreal, QC H2X 1Y4' },
  'contact.info.address.title': { fr: 'Adresse', en: 'Address' },
  'contact.info.address.line1': { fr: '123 Rue Principale', en: '123 Main Street' },
  'contact.info.address.line2': { fr: 'Montréal, QC H2X 1Y4', en: 'Montreal, QC H2X 1Y4' },
  'contact.info.address.line3': { fr: 'Canada', en: 'Canada' },
  'contact.info.phone': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'contact.info.phone.title': { fr: 'Téléphone', en: 'Phone' },
  'contact.info.phone.number': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'contact.info.email.label': { fr: 'Email', en: 'Email' },
  'contact.info.email.title': { fr: 'Email', en: 'Email' },
  'contact.info.email.address': { fr: 'contact@barbershop.com', en: 'contact@barbershop.com' },
  'contact.info.hours': { fr: 'Horaires d\'ouverture', en: 'Opening Hours' },
  'contact.info.hours.title': { fr: 'Horaires d\'ouverture', en: 'Opening Hours' },
  'contact.info.hours.weekdays': { fr: 'Lun - Ven: 9h00 - 18h00', en: 'Mon - Fri: 9:00 AM - 6:00 PM' },
  'contact.info.hours.weekend': { fr: 'Sam: 8h00 - 17h00, Dim: Fermé', en: 'Sat: 8:00 AM - 5:00 PM, Sun: Closed' },
  'contact.info.hours.saturday': { fr: 'Samedi: 8h00 - 17h00', en: 'Saturday: 8:00 AM - 5:00 PM' },
  'contact.info.hours.sunday': { fr: 'Dimanche: Fermé', en: 'Sunday: Closed' },

  // HomePage sections
  'home.hero.title1': { fr: 'Un style.', en: 'One style.' },
  'home.hero.title2': { fr: 'Une signature.', en: 'One signature.' },
  'home.hero.description': { fr: 'L\'art de la coiffure masculine rencontre l\'excellence du service. Découvrez l\'expérience barbershop qui révèle votre personnalité.', en: 'The art of men\'s grooming meets service excellence. Discover the barbershop experience that reveals your personality.' },
  'home.hero.cta': { fr: 'Voir nos coupes', en: 'View our cuts' },
  
  // Catalog section
  'home.catalog.title': { fr: 'Nos Services', en: 'Our Services' },
  'home.catalog.cta': { fr: 'Voir tous les services', en: 'View all services' },
  
  // About section
  'home.about.title': { fr: 'L\'Art du Barbershop', en: 'The Art of Barbershop' },
  'home.about.description1': { fr: 'Depuis plus de 20 ans, notre passion pour l\'art de la coiffure masculine nous pousse à redéfinir les standards d\'excellence. Dans notre salon, chaque client vit une expérience unique où tradition et modernité se rencontrent.', en: 'For more than 20 years, our passion for the art of men\'s grooming has driven us to redefine standards of excellence. In our salon, each client experiences a unique encounter where tradition and modernity meet.' },
  'home.about.description2': { fr: 'Nos maîtres barbiers, formés aux techniques les plus avancées, transforment chaque coupe en une signature personnelle. De la coupe classique intemporelle aux styles les plus contemporains, nous créons le look qui révèle votre personnalité.', en: 'Our master barbers, trained in the most advanced techniques, transform each cut into a personal signature. From timeless classic cuts to the most contemporary styles, we create the look that reveals your personality.' },
  'home.about.stats.years': { fr: 'Années d\'expérience', en: 'Years of experience' },
  'home.about.stats.clients': { fr: 'Clients satisfaits', en: 'Satisfied clients' },
  'home.about.stats.passion': { fr: 'Passion du métier', en: 'Passion for the craft' },
  
  // Contact section
  'home.contact.title': { fr: 'Réservez votre rendez-vous', en: 'Book your appointment' },
  'home.contact.description': { fr: 'Prêt à transformer votre style ? Contactez-nous pour réserver votre créneau et découvrir l\'expérience barbershop d\'exception.', en: 'Ready to transform your style? Contact us to book your slot and discover the exceptional barbershop experience.' },
  'home.contact.form.name': { fr: 'Nom complet', en: 'Full name' },
  'home.contact.form.namePlaceholder': { fr: 'Votre nom et prénom', en: 'Your first and last name' },
  'home.contact.form.email': { fr: 'Adresse e-mail', en: 'Email address' },
  'home.contact.form.emailPlaceholder': { fr: 'votre@email.com', en: 'your@email.com' },
  'home.contact.form.message': { fr: 'Message', en: 'Message' },
  'home.contact.form.messagePlaceholder': { fr: 'Décrivez le style que vous recherchez ou posez vos questions...', en: 'Describe the style you\'re looking for or ask your questions...' },
  'home.contact.form.submit': { fr: 'Envoyer le message', en: 'Send message' },
  'home.contact.form.success': { fr: 'Message envoyé ! Nous vous répondrons rapidement.', en: 'Message sent! We will respond quickly.' },
  'home.contact.info.title': { fr: 'Informations pratiques', en: 'Practical information' },
  'home.contact.info.address.label': { fr: 'Adresse', en: 'Address' },
  'home.contact.info.address.street': { fr: '123 Rue Principale', en: '123 Main Street' },
  'home.contact.info.address.city': { fr: 'Montréal, QC H2X 1Y4', en: 'Montreal, QC H2X 1Y4' },
  'home.contact.info.phone.label': { fr: 'Téléphone', en: 'Phone' },
  'home.contact.info.phone.number': { fr: '+1 (514) 123-4567', en: '+1 (514) 123-4567' },
  'home.contact.info.email.label': { fr: 'Email', en: 'Email' },
  'home.contact.info.email.address': { fr: 'contact@barbershop.com', en: 'contact@barbershop.com' },
  'home.contact.hours.title': { fr: 'Horaires d\'ouverture', en: 'Opening hours' },
  'home.contact.hours.weekdays': { fr: 'Lundi - Vendredi', en: 'Monday - Friday' },
  'home.contact.hours.weekdaysTime': { fr: '9h00 - 20h00', en: '9:00 AM - 8:00 PM' },
  'home.contact.hours.saturday': { fr: 'Samedi', en: 'Saturday' },
  'home.contact.hours.saturdayTime': { fr: '8h00 - 18h00', en: '8:00 AM - 6:00 PM' },
  'home.contact.hours.sunday': { fr: 'Dimanche', en: 'Sunday' },
  'home.contact.hours.sundayTime': { fr: '10h00 - 17h00', en: '10:00 AM - 5:00 PM' },
  
  // Products section
  'home.products.title': { fr: 'Produits Premium', en: 'Premium Products' },
  'home.products.description': { fr: 'Prolongez l\'expérience barbershop chez vous avec notre sélection de produits haut de gamme. Qualité professionnelle pour un style impeccable au quotidien.', en: 'Extend the barbershop experience at home with our selection of high-end products. Professional quality for impeccable style every day.' },
  'home.products.cta': { fr: 'Découvrir tous nos produits', en: 'Discover all our products' },
  
  // Product Display
  'products.title': { fr: 'PRODUITS', en: 'PRODUCTS' },
  'products.description': { fr: 'Découvrez notre sélection de {count} produits premium pour le styling professionnel', en: 'Discover our selection of {count} premium products for professional styling' },
  'products.categories.coiffage': { fr: 'COIFFAGE', en: 'STYLING' },
  'products.categories.soins': { fr: 'SOINS', en: 'CARE' },
  'products.categories.nettoyage': { fr: 'NETTOYAGE', en: 'CLEANING' },
  
  // Cut Card
  'cutCard.duration': { fr: 'Durée', en: 'Duration' },
  'cutCard.book': { fr: 'Réserver', en: 'Book' },
  'cutCard.difficulty.easy': { fr: 'Facile', en: 'Easy' },
  'cutCard.difficulty.intermediate': { fr: 'Intermédiaire', en: 'Intermediate' },
  'cutCard.difficulty.advanced': { fr: 'Avancé', en: 'Advanced' },
  
  // Navbar
  'navbar.siteName': { fr: 'BarberShop', en: 'BarberShop' },
  'navbar.menuLabel': { fr: 'Menu principal', en: 'Main menu' },
  
  // Common
  'common.seeMore': { fr: 'En savoir plus', en: 'Learn more' },
  'common.loading': { fr: 'Chargement...', en: 'Loading...' },
  'common.viewAll': { fr: 'Voir tous nos services', en: 'View all our services' },
  'common.learnMore': { fr: 'En savoir plus →', en: 'Learn more →' },
  
  // Footer
  'footer.brandName': { fr: 'Ricci Carwash', en: 'Ricci Carwash' },
  'footer.slogan': { fr: 'Peu importe l\'état, repartez propres', en: 'No matter the condition, leave clean' },
  'footer.description': { fr: 'Votre centre de lavage de confiance pour une expérience automobile authentique et moderne.', en: 'Your trusted car wash center for an authentic and modern automotive experience.' },
  'footer.quickLinks': { fr: 'Liens Rapides', en: 'Quick Links' },
  'footer.services': { fr: 'Services', en: 'Services' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.followUs': { fr: 'Suivez-nous', en: 'Follow Us' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.email': { fr: 'contact@riccicarwash.com', en: 'contact@riccicarwash.com' },

  // Social Media
  'social.follow': { fr: 'Suivre sur {platform}', en: 'Follow on {platform}' },

  // Service Categories
  'services.category.cutting': { fr: 'COUPE', en: 'CUTTING' },
  'services.category.beard': { fr: 'BARBE', en: 'BEARD' },
  'services.category.others': { fr: 'AUTRES', en: 'OTHERS' },

  // Services - CUTTING
  'services.cut.name': { fr: 'Coupe', en: 'Cut' },
  'services.cut.description': { fr: 'Coupe incluant l\'entretien des poils d\'oreilles et sourcils', en: 'Cutting including ear hair/eyebrow touching up' },
  'services.cutBeard.name': { fr: 'Coupe + Barbe', en: 'Cut + Beard' },
  'services.cutBeard.description': { fr: 'Coupe et barbe incluant poils d\'oreilles/sourcils', en: 'Cutting and beard including ear hair/eyebrows' },
  'services.cutChild.name': { fr: 'Coupe jusqu\'à 13 ans', en: 'Cutting up to 13 years' },
  'services.cutChild.description': { fr: 'Coupe pour enfants jusqu\'à 13 ans', en: 'Cutting for children up to 13 years old' },
  'services.cut60.name': { fr: 'Coupe 60+', en: 'Cut 60+' },
  'services.cut60.description': { fr: 'Coupe pour personnes de 60 ans ou plus', en: 'Cutting for people 60 years or older' },
  'services.clipper.name': { fr: 'Tondeuse 1 longueur', en: 'Hair clipper 1 length' },
  'services.clipper.description': { fr: 'Un réglage de tondeuse sur toute la tête', en: 'One clipper setting full head' },

  // Services - BEARD
  'services.beard.name': { fr: 'Barbe', en: 'Beard' },
  'services.beard.description': { fr: 'Façonnage et rasage de la barbe', en: 'Shaping and shaving the beard' },
  'services.classicShaving.name': { fr: 'Rasage Classique', en: 'Classic Shaving' },
  'services.classicShaving.description': { fr: 'Un rasage traditionnel', en: 'A classic shave' },
  'services.beardTrim.name': { fr: 'Taille Barbe + Styling', en: 'Beard Trim + Styling' },
  'services.beardTrim.description': { fr: 'Taille professionnelle et styling de barbe', en: 'Professional beard trimming and styling' },
  'services.mustache.name': { fr: 'Taille Moustache', en: 'Mustache Trim' },
  'services.mustache.description': { fr: 'Taille et façonnage précis de moustache', en: 'Precision mustache trimming and shaping' },

  // Services - OTHERS
  'services.vip.name': { fr: 'Traitement VIP', en: 'VIP Treatment' },
  'services.vip.description': { fr: 'Lavage, coupe, barbe, épilation oreilles et nez, choix de cire', en: 'Wash, cut, beard, wax ears and nose, choice of wax' },
  'services.hairWash.name': { fr: 'Lavage Cheveux + Styling', en: 'Hair Wash + Styling' },
  'services.hairWash.description': { fr: 'Service professionnel de lavage et styling', en: 'Professional hair wash and styling service' },
  'services.eyebrow.name': { fr: 'Épilation Sourcils', en: 'Eyebrow Trimming' },
  'services.eyebrow.description': { fr: 'Façonnage et épilation précise des sourcils', en: 'Precise eyebrow shaping and trimming' },
  'services.hotTowel.name': { fr: 'Traitement Serviette Chaude', en: 'Hot Towel Treatment' },
  'services.hotTowel.description': { fr: 'Traitement facial relaxant à la serviette chaude', en: 'Relaxing hot towel facial treatment' },

  // === CARWASH SERVICES ===
  'services.express.name': { fr: 'Lavage Express', en: 'Express Wash' },
  'services.express.description': { fr: 'Lavage extérieur complet avec séchage à la main', en: 'Full exterior wash with hand drying' },
  'services.premium.name': { fr: 'Lavage Premium', en: 'Premium Wash' },
  'services.premium.description': { fr: 'Lavage extérieur + protection céramique express', en: 'Exterior wash + express ceramic protection' },
  'services.polish.name': { fr: 'Polish & Cire', en: 'Polish & Wax' },
  'services.polish.description': { fr: 'Polish complet de la carrosserie + protection cire', en: 'Full body polish + wax protection' },
  'services.wheels.name': { fr: 'Traitement Jantes', en: 'Wheel Treatment' },
  'services.wheels.description': { fr: 'Nettoyage approfondi des jantes et pneus', en: 'Deep cleaning of wheels and tires' },
  'services.ceramic.name': { fr: 'Protection Céramique', en: 'Ceramic Protection' },
  'services.ceramic.description': { fr: 'Application protection céramique longue durée', en: 'Long-lasting ceramic protection application' },

  'services.vacuum.name': { fr: 'Aspiration Complète', en: 'Full Vacuum' },
  'services.vacuum.description': { fr: 'Aspiration approfondie de l\'habitacle et coffre', en: 'Deep vacuuming of cabin and trunk' },
  'services.seats.name': { fr: 'Nettoyage Sièges', en: 'Seat Cleaning' },
  'services.seats.description': { fr: 'Nettoyage en profondeur des sièges et tissus', en: 'Deep cleaning of seats and fabrics' },
  'services.sanitize.name': { fr: 'Désinfection', en: 'Sanitization' },
  'services.sanitize.description': { fr: 'Désinfection complète de l\'habitacle', en: 'Full cabin sanitization' },
  'services.leather.name': { fr: 'Cuir Treatment', en: 'Leather Treatment' },
  'services.leather.description': { fr: 'Nettoyage et protection des surfaces en cuir', en: 'Cleaning and protection of leather surfaces' },

  'services.detailing.name': { fr: 'Détailing Complet', en: 'Full Detailing' },
  'services.detailing.description': { fr: 'Service complet intérieur/extérieur avec protection', en: 'Full interior/exterior service with protection' },
  'services.engine.name': { fr: 'Nettoyage Moteur', en: 'Engine Cleaning' },
  'services.engine.description': { fr: 'Nettoyage et dégraissage du compartiment moteur', en: 'Engine compartment cleaning and degreasing' },
  'services.paint.name': { fr: 'Correction Peinture', en: 'Paint Correction' },
  'services.paint.description': { fr: 'Correction des défauts de peinture et micro-rayures', en: 'Correction of paint defects and micro-scratches' },
  'services.winter.name': { fr: 'Protection Hivernale', en: 'Winter Protection' },
  'services.winter.description': { fr: 'Protection complète pour l\'hiver', en: 'Complete winter protection' },

  // Product descriptions
  'products.descriptions.level3HairConditioner': { fr: 'Après-shampoing nourrissant pour tous types de cheveux. Il revitalise, hydrate et adoucit la fibre capillaire.', en: 'Nourishing conditioner for all hair types. It revitalizes, hydrates and softens the hair fiber.' },
  'products.descriptions.bullfrogBotanicalButter': { fr: 'Beurre nourrissant pour barbe et cheveux, enrichi en extraits botaniques. Apporte douceur, éclat et protection.', en: 'Nourishing butter for beard and hair, enriched with botanical extracts. Provides softness, shine and protection.' },
  'products.descriptions.daimonBarberTextureClay': { fr: 'Argile coiffante à tenue forte et fini mat. Idéal pour les coiffures structurées avec effet naturel.', en: 'Styling clay with strong hold and matte finish. Ideal for structured hairstyles with natural effect.' },
  'products.descriptions.layriteNaturalMatteCream': { fr: 'Crème coiffante à finition mate, tenue moyenne. Look naturel, souple et propre.', en: 'Styling cream with matte finish, medium hold. Natural, flexible and clean look.' },
  'products.descriptions.layriteOriginalPomade': { fr: 'Pomade classique à brillance modérée et tenue moyenne. S\'élimine à l\'eau, parfaite pour les styles rétro.', en: 'Classic pomade with moderate shine and medium hold. Water-soluble, perfect for retro styles.' },
  'products.descriptions.layriteSuperholdPomade': { fr: 'Tenue extrême pour cheveux épais ou difficiles à coiffer. Brillance moyenne, fixation longue durée.', en: 'Extreme hold for thick or difficult-to-style hair. Medium shine, long-lasting fixation.' },
  'products.descriptions.layriteSupershineCream': { fr: 'Crème coiffante haute brillance, tenue souple. Pour des styles lissés et élégants.', en: 'High-shine styling cream, flexible hold. For sleek and elegant styles.' },
  'products.descriptions.bullfrogSecretPotion': { fr: 'Gel douche multi-usage cheveux, barbe et corps. Nettoyage doux et parfum signature Bullfrog.', en: 'Multi-use hair, beard and body wash gel. Gentle cleansing and signature Bullfrog fragrance.' },
  'products.descriptions.captainFawcettSeaSaltSpray': { fr: 'Spray texturisant aux minéraux marins. Apporte volume et mouvement naturel sans alourdir.', en: 'Texturizing spray with marine minerals. Provides volume and natural movement without weighing down.' },
  'products.descriptions.dapperDanHairBodyShampoo': { fr: 'Shampoing 2-en-1 pour cheveux et corps. Mousse riche, nettoyage efficace et parfum vintage.', en: '2-in-1 shampoo for hair and body. Rich lather, effective cleansing and vintage fragrance.' },
  'products.descriptions.uppercutDeluxeClearScalp': { fr: 'Shampoing purifiant. Nettoie le cuir chevelu en profondeur tout en éliminant les résidus de coiffage.', en: 'Purifying shampoo. Deep cleanses the scalp while removing styling residue.' },
  'products.descriptions.reuzelSurfTonic': { fr: 'Tonique texturisant effet plage. Volume naturel, finition mate, parfaite base avant coiffage.', en: 'Beach-effect texturizing tonic. Natural volume, matte finish, perfect base before styling.' },
  'products.descriptions.oilCanGroomingStylingPowder': { fr: 'Poudre coiffante pour donner du volume, de la texture et une finition mate. Tenue légère et modulable.', en: 'Styling powder to add volume, texture and matte finish. Light and buildable hold.' },
};

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  t: (key: string, params?: { [key: string]: string | number }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

  const t = (key: string, params?: { [key: string]: string | number }): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    
    let text = translation[currentLanguage];
    
    // Interpolation de variables
    if (params) {
      Object.keys(params).forEach(paramKey => {
        text = text.replace(`{${paramKey}}`, String(params[paramKey]));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 