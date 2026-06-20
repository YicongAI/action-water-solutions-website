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
    capacity: "35,000 m³/day",
    shortDescription:
      "Large-scale integrated water treatment facility supporting regional municipal water supply expansion.",
    image: "/projects/xiangzhou-waterworks.jpg",
    tags: ["Municipal Water", "Integrated Treatment", "35,000 m³/day"],
  },
  {
    slug: "smart-water-operations-system",
    title: "Smart Water Operations System",
    category: "Water Treatment Projects",
    categorySlug: "water-treatment",
    location: "Guangxi, China",
    capacity: "Unattended Intelligent Control",
    shortDescription:
      "Intelligent monitoring and automation system for modern water treatment facilities.",
    image: "/projects/smart-water-system1.png",
    tags: ["Smart Operations", "Remote Monitoring", "Automation"],
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
];

export function getProjectCategory(categorySlug: string) {
  return projectCategories.find((category) => category.slug === categorySlug);
}

export function getProjectsByCategory(categorySlug: string) {
  return projects.filter((project) => project.categorySlug === categorySlug);
}
