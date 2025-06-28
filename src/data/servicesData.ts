export interface Service {
  name: string;
  price: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: "CUTTING",
    services: [
      {
        name: "Cut",
        price: "€35",
        description: "Cutting including ear hair/eyebrow touching up"
      },
      {
        name: "Cut + Beard",
        price: "€35",
        description: "Cutting and beard including ear hair/eyebrows"
      },
      {
        name: "Cutting up to 13 years",
        price: "€18",
        description: "Cutting for children up to 16 years old"
      },
      {
        name: "Cut 60+",
        price: "€20",
        description: "Cutting for people 60 years or older"
      },
      {
        name: "Hair clipper 1 length",
        price: "€18",
        description: "One clipper setting full head"
      }
    ]
  },
  {
    title: "BEARD",
    services: [
      {
        name: "Beard",
        price: "€18",
        description: "Shaping and shaving the beard"
      },
      {
        name: "Classic Shaving",
        price: "€18",
        description: "A classic shave"
      },
      {
        name: "Beard Trim + Styling",
        price: "€25",
        description: "Professional beard trimming and styling"
      },
      {
        name: "Mustache Trim",
        price: "€12",
        description: "Precision mustache trimming and shaping"
      }
    ]
  },
  {
    title: "OTHERS",
    services: [
      {
        name: "VIP Treatment",
        price: "€53",
        description: "Wash, cut, beard, wax ears and nose, choice of wax"
      },
      {
        name: "Hair Wash + Styling",
        price: "€15",
        description: "Professional hair wash and styling service"
      },
      {
        name: "Eyebrow Trimming",
        price: "€8",
        description: "Precise eyebrow shaping and trimming"
      },
      {
        name: "Hot Towel Treatment",
        price: "€10",
        description: "Relaxing hot towel facial treatment"
      }
    ]
  }
];

// Fonction utilitaire pour obtenir les 3 premiers services de chaque catégorie
export const getMiniServices = (): ServiceCategory[] => {
  return servicesData.map(category => ({
    ...category,
    services: category.services.slice(0, 3)
  }));
}; 