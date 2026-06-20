export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "integrated-treatment-plants",
    name: "Integrated Treatment Plants",
    category: "Modular Systems",
    description:
      "Containerized and modular treatment plants engineered for scalable deployment and reliable water infrastructure operation.",
  },
  {
    slug: "ro-systems",
    name: "RO Systems",
    category: "Membrane Treatment",
    description:
      "Reverse osmosis systems for municipal, industrial, and drinking water treatment applications.",
  },
  {
    slug: "ultrafiltration-systems",
    name: "Ultrafiltration Systems",
    category: "Membrane Systems",
    description:
      "Advanced ultrafiltration systems for consistent water quality and efficient pretreatment performance.",
  },
  {
    slug: "sodium-hypochlorite-generators",
    name: "Sodium Hypochlorite Generators",
    category: "Disinfection Systems",
    description:
      "On-site sodium hypochlorite generation systems designed for safe, efficient water disinfection.",
  },
  {
    slug: "chlorine-dioxide-generators",
    name: "Chlorine Dioxide Generators",
    category: "Disinfection Systems",
    description:
      "Controlled chlorine dioxide generation solutions for water treatment and disinfection processes.",
  },
  {
    slug: "wastewater-treatment-equipment",
    name: "Wastewater Treatment Equipment",
    category: "Environmental Equipment",
    description:
      "Screening, separation, sludge handling, dewatering, and supporting equipment for wastewater projects.",
  },
  {
    slug: "household-water-purification",
    name: "Household Water Purification",
    category: "Drinking Water",
    description:
      "Point-of-use purification systems designed to support safe and reliable household drinking water.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
