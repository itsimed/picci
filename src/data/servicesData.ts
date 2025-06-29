export interface Service {
  name: string;
  price: string;
  description: string;
  nameKey: string;
  descriptionKey: string;
}

export interface ServiceCategory {
  title: string;
  titleKey: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: "CUTTING",
    titleKey: "services.category.cutting",
    services: [
      {
        name: "Cut",
        nameKey: "services.cut.name",
        price: "35 CAD $",
        description: "Cutting including ear hair/eyebrow touching up",
        descriptionKey: "services.cut.description"
      },
      {
        name: "Cut + Beard",
        nameKey: "services.cutBeard.name",
        price: "35 CAD $",
        description: "Cutting and beard including ear hair/eyebrows",
        descriptionKey: "services.cutBeard.description"
      },
      {
        name: "Cutting up to 13 years",
        nameKey: "services.cutChild.name",
        price: "18 CAD $",
        description: "Cutting for children up to 13 years old",
        descriptionKey: "services.cutChild.description"
      },
      {
        name: "Cut 60+",
        nameKey: "services.cut60.name",
        price: "20 CAD $",
        description: "Cutting for people 60 years or older",
        descriptionKey: "services.cut60.description"
      },
      {
        name: "Hair clipper 1 length",
        nameKey: "services.clipper.name",
        price: "18 CAD $",
        description: "One clipper setting full head",
        descriptionKey: "services.clipper.description"
      }
    ]
  },
  {
    title: "BEARD",
    titleKey: "services.category.beard",
    services: [
      {
        name: "Beard",
        nameKey: "services.beard.name",
        price: "18 CAD $",
        description: "Shaping and shaving the beard",
        descriptionKey: "services.beard.description"
      },
      {
        name: "Classic Shaving",
        nameKey: "services.classicShaving.name",
        price: "18 CAD $",
        description: "A classic shave",
        descriptionKey: "services.classicShaving.description"
      },
      {
        name: "Beard Trim + Styling",
        nameKey: "services.beardTrim.name",
        price: "25 CAD $",
        description: "Professional beard trimming and styling",
        descriptionKey: "services.beardTrim.description"
      },
      {
        name: "Mustache Trim",
        nameKey: "services.mustache.name",
        price: "12 CAD $",
        description: "Precision mustache trimming and shaping",
        descriptionKey: "services.mustache.description"
      }
    ]
  },
  {
    title: "OTHERS",
    titleKey: "services.category.others",
    services: [
      {
        name: "VIP Treatment",
        nameKey: "services.vip.name",
        price: "53 CAD $",
        description: "Wash, cut, beard, wax ears and nose, choice of wax",
        descriptionKey: "services.vip.description"
      },
      {
        name: "Hair Wash + Styling",
        nameKey: "services.hairWash.name",
        price: "15 CAD $",
        description: "Professional hair wash and styling service",
        descriptionKey: "services.hairWash.description"
      },
      {
        name: "Eyebrow Trimming",
        nameKey: "services.eyebrow.name",
        price: "8 CAD $",
        description: "Precise eyebrow shaping and trimming",
        descriptionKey: "services.eyebrow.description"
      },
      {
        name: "Hot Towel Treatment",
        nameKey: "services.hotTowel.name",
        price: "10 CAD $",
        description: "Relaxing hot towel facial treatment",
        descriptionKey: "services.hotTowel.description"
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