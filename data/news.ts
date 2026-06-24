export type NewsCategory = {
  slug: string;
  title: string;
  description: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  excerpt: string;
  image: string | null;
  tags: string[];
};

export const newsCategories: NewsCategory[] = [
  {
    slug: "company-news",
    title: "Company News",
    description:
      "Latest company updates, project progress, business development, and corporate announcements.",
  },
  {
    slug: "technology",
    title: "Technology",
    description:
      "Technical insights on water treatment, smart water systems, membrane technology, disinfection, and wastewater solutions.",
  },
  {
    slug: "patents-innovation",
    title: "Patents & Innovation",
    description:
      "Patents, R&D progress, innovation achievements, and product development updates.",
  },
  {
    slug: "leadership-activities",
    title: "Leadership Activities",
    description:
      "Industry events, conferences, government meetings, partner visits, and company leadership activities.",
  },
  {
    slug: "publications",
    title: "Publications",
    description:
      "White papers, technical reports, conference papers, and research-based industry insights.",
  },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "regional-water-infrastructure-development",
    title: "Supporting the Next Phase of Regional Water Infrastructure",
    category: "Company News",
    categorySlug: "company-news",
    date: "June 18, 2026",
    excerpt:
      "ACTION continues to strengthen engineering, manufacturing, and project support capabilities for municipal and industrial water infrastructure.",
    image: null,
    tags: ["Company Update", "Infrastructure", "Regional Growth"],
  },
  {
    slug: "manufacturing-capability-expansion",
    title: "Expanding Integrated Equipment Manufacturing Capability",
    category: "Company News",
    categorySlug: "company-news",
    date: "May 22, 2026",
    excerpt:
      "A focused update on production capability for modular treatment systems, disinfection equipment, and integrated project delivery.",
    image: null,
    tags: ["Manufacturing", "Equipment", "Business Development"],
  },
  {
    slug: "membrane-treatment-system-selection",
    title: "Selecting Membrane Treatment Systems for Project Conditions",
    category: "Technology",
    categorySlug: "technology",
    date: "June 12, 2026",
    excerpt:
      "An engineering overview of RO and ultrafiltration selection considerations across municipal, industrial, and drinking water applications.",
    image: null,
    tags: ["Membrane Technology", "RO Systems", "Ultrafiltration"],
  },
  {
    slug: "connected-water-operations-framework",
    title: "A Practical Framework for Connected Water Operations",
    category: "Technology",
    categorySlug: "technology",
    date: "April 28, 2026",
    excerpt:
      "How plant equipment, sensors, cloud platforms, and operation teams can form a future-ready smart water architecture.",
    image: null,
    tags: ["Smart Water", "Remote Monitoring", "Architecture"],
  },
  {
    slug: "disinfection-system-rd-progress",
    title: "R&D Progress in On-Site Water Disinfection Systems",
    category: "Patents & Innovation",
    categorySlug: "patents-innovation",
    date: "May 30, 2026",
    excerpt:
      "Product development work focused on safe generation, precise dosing, equipment reliability, and maintainable system design.",
    image: null,
    tags: ["R&D", "Disinfection", "Product Development"],
  },
  {
    slug: "modular-treatment-system-innovation",
    title: "Advancing Modular Integrated Treatment System Design",
    category: "Patents & Innovation",
    categorySlug: "patents-innovation",
    date: "March 19, 2026",
    excerpt:
      "Engineering improvements aimed at scalable deployment, simplified installation, and reliable long-term operation.",
    image: null,
    tags: ["Innovation", "Modular Systems", "Engineering"],
  },
  {
    slug: "regional-partner-technical-exchange",
    title: "Regional Partner Technical Exchange on Water Infrastructure",
    category: "Leadership Activities",
    categorySlug: "leadership-activities",
    date: "June 6, 2026",
    excerpt:
      "Company representatives met with regional partners to discuss municipal water priorities, localization, and long-term cooperation.",
    image: null,
    tags: ["Partner Visit", "Regional Markets", "Technical Exchange"],
  },
  {
    slug: "water-industry-conference-participation",
    title: "ACTION Participates in Water Industry Development Forum",
    category: "Leadership Activities",
    categorySlug: "leadership-activities",
    date: "April 10, 2026",
    excerpt:
      "Leadership discussions covered treatment technology, environmental infrastructure, and opportunities across emerging water markets.",
    image: null,
    tags: ["Industry Event", "Leadership", "Water Infrastructure"],
  },
  {
    slug: "integrated-water-treatment-planning-guide",
    title: "Planning Integrated Water Treatment Systems",
    category: "Publications",
    categorySlug: "publications",
    date: "May 15, 2026",
    excerpt:
      "A concise technical guide to treatment objectives, process selection, equipment integration, controls, and project delivery planning.",
    image: null,
    tags: ["Technical Guide", "Treatment Systems", "Project Planning"],
  },
  {
    slug: "smart-water-capability-framework-paper",
    title: "Smart Water Capability Framework for Emerging Markets",
    category: "Publications",
    categorySlug: "publications",
    date: "February 24, 2026",
    excerpt:
      "A concept paper examining staged adoption of monitoring, cloud connectivity, analytics, and intelligent operational support.",
    image: null,
    tags: ["White Paper", "Smart Water", "Emerging Markets"],
  },
];

export function getNewsCategory(categorySlug: string) {
  return newsCategories.find((category) => category.slug === categorySlug);
}

export function getNewsPostsByCategory(categorySlug: string) {
  return newsPosts.filter((post) => post.categorySlug === categorySlug);
}
