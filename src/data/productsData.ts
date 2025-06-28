export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  brand: string;
  category: 'Shampoo' | 'Conditioner' | 'Pomade' | 'Oil' | 'Wax' | 'Gel' | 'Aftershave' | 'Cream';
  imageSrc: string;
  size: string;
  inStock: boolean;
  rating: number; // 1-5 étoiles
  ingredients?: string[];
}

// Données des produits - à remplacer par de vraies données et images
export const products: Product[] = [
  {
    id: 'pomade-classic',
    name: 'Pomade Classique',
    description: 'Pomade traditionnelle à base d\'eau pour un style classique avec une tenue forte et un fini brillant.',
    price: '25 CAD $',
    brand: 'Barbershop Premium',
    category: 'Pomade',
    imageSrc: '/images/products/classic-pomade.jpg', // À remplacer par une vraie image
    size: '100ml',
    inStock: true,
    rating: 5,
    ingredients: ['Water', 'Beeswax', 'Lanolin', 'Fragrance']
  },
  {
    id: 'beard-oil',
    name: 'Huile à Barbe Premium',
    description: 'Huile nourrissante pour barbe aux huiles essentielles naturelles. Hydrate et donne de l\'éclat.',
    price: '30 CAD $',
    brand: 'Barbershop Premium',
    category: 'Oil',
    imageSrc: '/images/products/beard-oil.jpg', // À remplacer par une vraie image
    size: '50ml',
    inStock: true,
    rating: 5,
    ingredients: ['Jojoba Oil', 'Argan Oil', 'Essential Oils', 'Vitamin E']
  },
  {
    id: 'shampoo-man',
    name: 'Shampoing Homme',
    description: 'Shampoing spécialement formulé pour les cheveux masculins. Nettoie en profondeur sans dessécher.',
    price: '18 CAD $',
    brand: 'Barbershop Premium',
    category: 'Shampoo',
    imageSrc: '/images/products/men-shampoo.jpg', // À remplacer par une vraie image
    size: '250ml',
    inStock: true,
    rating: 4,
    ingredients: ['Sulfate-free cleansers', 'Tea Tree Oil', 'Peppermint', 'Keratin']
  },
  {
    id: 'styling-wax',
    name: 'Cire Coiffante',
    description: 'Cire mate pour un style naturel avec une tenue flexible. Parfaite pour les textures déstructurées.',
    price: '22 CAD $',
    brand: 'Barbershop Premium',
    category: 'Wax',
    imageSrc: '/images/products/styling-wax.jpg', // À remplacer par une vraie image
    size: '80ml',
    inStock: true,
    rating: 4,
    ingredients: ['Carnauba Wax', 'Beeswax', 'Clay', 'Essential Oils']
  },
  {
    id: 'aftershave-balm',
    name: 'Baume Après-Rasage',
    description: 'Baume apaisant et hydratant pour après le rasage. Réduit les irritations et rafraîchit la peau.',
    price: '20 CAD $',
    brand: 'Barbershop Premium',
    category: 'Aftershave',
    imageSrc: '/images/products/aftershave-balm.jpg', // À remplacer par une vraie image
    size: '100ml',
    inStock: false,
    rating: 5,
    ingredients: ['Aloe Vera', 'Chamomile', 'Vitamin E', 'Glycerin']
  },
  {
    id: 'hair-gel',
    name: 'Gel Coiffant Fort',
    description: 'Gel à tenue extra-forte pour les styles qui demandent une fixation maximale toute la journée.',
    price: '15 CAD $',
    brand: 'Barbershop Premium',
    category: 'Gel',
    imageSrc: '/images/products/hair-gel.jpg', // À remplacer par une vraie image
    size: '150ml',
    inStock: true,
    rating: 3,
    ingredients: ['Carbomer', 'Alcohol', 'Glycerin', 'Fragrance']
  }
];

// Fonctions utilitaires
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

export const getInStockProducts = (): Product[] => {
  return products.filter(product => product.inStock);
};

export const getTopRatedProducts = (limit: number = 3): Product[] => {
  return products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(product => product.brand === brand);
}; 