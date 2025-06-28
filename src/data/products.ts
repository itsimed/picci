export interface Product {
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Level 3 Hair Conditioner",
    description: "Après-shampoing nourrissant pour tous types de cheveux. Il revitalise, hydrate et adoucit la fibre capillaire.",
    image: "/images/products/hair-conditionner-apres-shampoing-cheveux.jpg"
  },
  {
    name: "Bullfrog Botanical Butter",
    description: "Beurre nourrissant pour barbe et cheveux, enrichi en extraits botaniques. Apporte douceur, éclat et protection.",
    image: "/images/products/beurre-nourrissant-regenerant-.jpg"
  },
  {
    name: "Daimon Barber Texture Clay",
    description: "Argile coiffante à tenue forte et fini mat. Idéal pour les coiffures structurées avec effet naturel.",
    image: "/images/products/cire-cheveux-argile.jpg"
  },
  {
    name: "Layrite Natural Matte Cream",
    description: "Crème coiffante à finition mate, tenue moyenne. Look naturel, souple et propre.",
    image: "/images/products/cire-cheveux-natural-matte-cream.jpg"
  },
  {
    name: "Layrite Original Pomade",
    description: "Pomade classique à brillance modérée et tenue moyenne. S'élimine à l'eau, parfaite pour les styles rétro.",
    image: "/images/products/cire-cheveux-original.jpg"
  },
  {
    name: "Layrite Superhold Pomade",
    description: "Tenue extrême pour cheveux épais ou difficiles à coiffer. Brillance moyenne, fixation longue durée.",
    image: "/images/products/cire-cheveux-superhold.jpg"
  },
  {
    name: "Layrite Supershine Cream",
    description: "Crème coiffante haute brillance, tenue souple. Pour des styles lissés et élégants.",
    image: "/images/products/cire-cheveux-supershine.jpg"
  },
  {
    name: "Bullfrog Secret Potion N°1",
    description: "Gel douche multi-usage cheveux, barbe et corps. Nettoyage doux et parfum signature Bullfrog.",
    image: "/images/products/gel-douche-multi-usages-secret-potion-n1.jpg"
  },
  {
    name: "Captain Fawcett Sea Salt Spray",
    description: "Spray texturisant aux minéraux marins. Apporte volume et mouvement naturel sans alourdir.",
    image: "/images/products/sea-salt-spray.jpg"
  },
  {
    name: "Dapper Dan Hair & Body Shampoo",
    description: "Shampoing 2-en-1 pour cheveux et corps. Mousse riche, nettoyage efficace et parfum vintage.",
    image: "/images/products/shampoing-cheveux-corps.jpg"
  },
  {
    name: "Uppercut Deluxe Clear Scalp",
    description: "Shampoing purifiant. Nettoie le cuir chevelu en profondeur tout en éliminant les résidus de coiffage.",
    image: "/images/products/shampoing-clear-scalp.jpg"
  },
  {
    name: "Reuzel Surf Tonic",
    description: "Tonique texturisant effet plage. Volume naturel, finition mate, parfaite base avant coiffage.",
    image: "/images/products/surf-tonic.jpg"
  },
  {
    name: "Oil Can Grooming Styling Powder",
    description: "Poudre coiffante pour donner du volume, de la texture et une finition mate. Tenue légère et modulable.",
    image: "/images/products/poudre-coiffante-Oil-can-grooming.jpg"
  }
];

export default products; 