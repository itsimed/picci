import React from 'react';

// Interface pour la version simple (nouvelles props)
interface SimpleProductCardProps {
  name: string;
  description: string;
  image: string;
  product?: never;
  onSelect?: never;
}

// Interface pour la version complexe (existante)
interface ComplexProductCardProps {
  product: {
    id?: string;
    name: string;
    description: string;
    imageSrc?: string;
    image?: string;
    price?: string;
    brand?: string;
    category?: string;
    size?: string;
    inStock?: boolean;
    rating?: number;
    ingredients?: string[];
  };
  onSelect?: () => void;
  name?: never;
  description?: never;
  image?: never;
}

type ProductCardProps = SimpleProductCardProps | ComplexProductCardProps;

const ProductCard: React.FC<ProductCardProps> = (props) => {
  // Déterminer si on utilise la version simple ou complexe
  const isSimpleVersion = 'name' in props && props.name !== undefined;
  
  let name: string;
  let description: string;
  let image: string;
  let onSelect: (() => void) | undefined;

  if (isSimpleVersion) {
    // Version simple
    name = props.name;
    description = props.description;
    image = props.image;
    onSelect = undefined;
  } else {
    // Version complexe
    name = props.product.name;
    description = props.product.description;
    image = props.product.imageSrc || props.product.image || '';
    onSelect = props.onSelect;
  }

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-6 sm:p-8">
      <div 
        className={`transition-all duration-300 transform hover:scale-105 ${
          onSelect ? 'cursor-pointer' : ''
        }`}
        onClick={onSelect}
      >
        {/* Image Container */}
        <div className="relative h-60 sm:h-72 md:h-80 bg-transparent mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain object-center"
            loading="lazy"
          />
        </div>
        
        {/* Content */}
        <div className="text-center">
          {/* Product Name */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 line-clamp-2">
            {name}
          </h3>
          
          {/* Product Description */}
          <p className="text-white text-base sm:text-lg leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 