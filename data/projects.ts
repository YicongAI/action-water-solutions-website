export type Project = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  capacity: string;
  shortDescription: string;
  image: string | null;
  tags: string[];
};

export type ProjectCategory = {
  slug: string;
  title: string;
  description: string;
};

export const projectCategories: ProjectCategory[] = [
  {
    slug: "water-treatment",
    title: "Water Treatment Projects",
    description:
      "Municipal waterworks, integrated treatment facilities, and intelligent operating systems supporting reliable water supply infrastructure.",
  },
  {
    slug: "wastewater-treatment",
    title: "Wastewater Treatment Projects",
    description:
      "Integrated wastewater infrastructure supporting environmental protection, regulatory objectives, and sustainable community development.",
  },
  {
    slug: "other-infrastructure",
    title: "Other Infrastructure Projects",
    description:
      "Disinfection systems, environmental equipment, and supporting infrastructure engineered for complete water treatment delivery.",
  },
];

export const projects: Project[] = [
  {
    slug: "xiangzhou-waterworks-expansion",
    title: "Xiangzhou Waterworks Expansion Project",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Xiangzhou, Guangxi, China",
    capacity: "35,000 tons/day",
    shortDescription:
      "Large-scale integrated water treatment facility supporting regional municipal water supply expansion.",
    image: "/projects/xiangzhou-waterworks.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "35,000 m³/day"],
  },
  {
    slug: "wuli-town-wastewater-treatment",
    title: "Wuli Town Wastewater Treatment Project",
    category: "Wastewater Treatment Projects",
    categorySlug: "wastewater-treatment",
    location: "Wuli Town, Guangxi, China",
    capacity: "Community Wastewater Treatment",
    shortDescription:
      "Wastewater treatment facility supporting environmental protection and local community development.",
    image: "/projects/wuli-town-treatment.jpg",
    tags: ["Wastewater Treatment", "Environmental Infrastructure"],
  },
  {
    slug: "sodium-hypochlorite-generator-project",
    title: "Sodium Hypochlorite Generator Project",
    category: "Other Infrastructure Projects",
    categorySlug: "other-infrastructure",
    location: "Guangxi, China",
    capacity: "Disinfection System",
    shortDescription:
      "On-site sodium hypochlorite generation system for water plant disinfection and water safety.",
    image: null,
    tags: ["Disinfection", "Water Safety", "Sodium Hypochlorite"],
  },
  {
    slug: "Heshan-city-urban",
    title: "Heshan City Urban and Rural water supply project",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Heshan, Guangxi, China",
    capacity: "10,000 tons/day",
    shortDescription:
      "Raw water Trasmisssion Pipeline Project.",
    image: "/projects/heshan1.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "10,000 tons/day"],
  },
  {
    slug: "Jijiao-water-plant",
    title: "Jijiao Water Plant Central Control System Equipment Project",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Jijiao, Guangxi, China",
    capacity: "15,000 tons/day",
    shortDescription:
      "Procurement of Steel Integrated Grid Flocculation Inclined Tube Sed-imentation Tank and Water Plant.",
    image: "/projects/jijiao1.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "15,000 tons/day"],
  },
  {
    slug: "Jingxi-water-supply",
    title: "Jingxi City Water Supply project",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Jingxi, Guangxi, China",
    capacity: "5,000 tons/day",
    shortDescription:
      "Water Supply Project of Wanshenglong International Trade and Logistics Center",
    image: "/projects/jingxi1.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "5,000 tons/day"],
  },
  {
    slug: "Fusui-County",
    title: "Fusui County Water Treatment Plant Project",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Fusui, Guangxi, China",
    capacity: "25,000 tons/day",
    shortDescription:
      "Fusui County Water Treatment Plant Expansion Project.",
    image: "/projects/fusui1.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "25,000 tons/day"],
  },
  {
    slug: "Baise-tianyang",
    title: "Water Treatment Project for 200,000 pigs",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Baise, Guangxi, China",
    capacity: "900 tons/day",
    shortDescription:
      "900 tons/day for the project of annual output of 200,000 heads of commercial pigs in centralized area in Anhuai Tun, Tianyang District.",
    image: "/projects/baise1.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "900 tons/day"],
  },
  {
    slug: "Yangshuo-Gaotian",
    title: "Yangshuo Gaotian Water Treatment Plant Project",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Yangshuo, Guangxi, China",
    capacity: "2,000 tons/day",
    shortDescription:
      "Ultra-filtration Membrane Renovation Project",
    image: "/projects/yangshuo1.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "2,000 tons/day"],
  },
  {
    slug: "Quanzhou-longhsui",
    title: "Quanzhou Longshui Water Treatment Plant Project",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Quanzhou, Guangxi, China",
    capacity: "3,000 tons/day",
    shortDescription:
      "3,000 tons/day Integrated Water Purifier Centralized Water Supply Construction Project",
    image: "/projects/quanzhou1.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "3,000 tons/day"],
  },
  {
    slug: "Kunming-luquan",
    title: "Kunming City Water Supply Project",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Kunming, Yunnan, China",
    capacity: "5,000 tons/day",
    shortDescription:
      "Water Supply project in Luquan County",
    image: "/projects/kunming1.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "5,000 tons/day"],
  },
  {
    slug: "Tian-e",
    title: "Tian-e Integrated Water Purifier for Emergency Water Project",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Tian-e, Guangxi, China",
    capacity: "10,000 tons/day",
    shortDescription:
      "Integrated Water Purifier for Emergency Water Plant for Urban Water Supply Infrastruction",
    image: "/projects/tiane1.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "2,000 tons/day"],
  },
  {
    slug: "Nanning-Maoqiao",
    title: "Nanning Maoqiao hospital Wastewater Treatment Project",
    category: "Wastewater Treatment Projects",
    categorySlug: "wastewater-treatment",
    location: "Nanning, Guangxi, China",
    capacity: "1,000 tons/day",
    shortDescription:
      "Wastewater treatment facility supporting hospital and local community development.",
    image: "/projects/maoqiao1.jpg",
    tags: ["Wastewater Treatment", "Environmental Infrastructure"],
  },
  {
    slug: "Nanning-lingli",
    title: "Nanning Lingli Wastewater Treatment Project",
    category: "Wastewater Treatment Projects",
    categorySlug: "wastewater-treatment",
    location: "Nanning, Guangxi, China",
    capacity: "5,000 tons/day",
    shortDescription:
      "Wastewater treatment facility supporting environment and local community development.",
    image: "/projects/lingli1.jpg",
    tags: ["Wastewater Treatment", "Environmental Infrastructure"],
  },
  {
    slug: "Nanning-changtang",
    title: "Nanning Changtang Wastewater Treatment Project",
    category: "Wastewater Treatment Projects",
    categorySlug: "wastewater-treatment",
    location: "Nanning, Guangxi, China",
    capacity: "3,000 tons/day",
    shortDescription:
      "Wastewater treatment facility supporting environment and local community development.",
    image: "/projects/changtang1.jpg",
    tags: ["Wastewater Treatment", "Environmental Infrastructure"],
  },
  {
    slug: "Nanning-xintiantang",
    title: "Nanning Maoqiao Xintiantang Wastewater Treatment Project",
    category: "Wastewater Treatment Projects",
    categorySlug: "wastewater-treatment",
    location: "Nanning, Guangxi, China",
    capacity: "5,000 tons/day",
    shortDescription:
      "Wastewater treatment facility supporting environment and local community development.",
    image: "/projects/xintiantang1.jpg",
    tags: ["Wastewater Treatment", "Environmental Infrastructure"],
  },


];

export function getProjectCategory(categorySlug: string) {
  return projectCategories.find((category) => category.slug === categorySlug);
}

export function getProjectsByCategory(categorySlug: string) {
  return projects.filter((project) => project.categorySlug === categorySlug);
}
