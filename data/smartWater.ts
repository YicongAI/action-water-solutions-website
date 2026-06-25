export type SmartWaterItem = {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  overview: string;
  capabilities: string[];
  applications: string[];
  architectureSteps: string[];
  status: string;
  image: string | null;
  relatedProjects?: SmartWaterRelatedProject[];
};

export type SmartWaterRelatedProject = {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string | null;
  tags: string[];
};

export const smartWaterItems: SmartWaterItem[] = [
  {
    slug: "remote-monitoring",
    title: "Remote Monitoring",
    eyebrow: "SMART WATER OPERATIONS",
    shortDescription:
      "Real-time visibility into water plant operation, alarms, system performance, and water quality indicators.",
    overview:
      "Remote monitoring connects water treatment facilities, equipment, sensors, and control systems to support efficient operation and faster response.",
    capabilities: [
      "Plant operation visibility",
      "Alarm monitoring",
      "Equipment status tracking",
      "Water quality data overview",
      "Remote operational support",
    ],
    applications: [
      "Municipal water plants",
      "Rural water supply stations",
      "Integrated treatment systems",
      "Wastewater treatment facilities",
    ],
    architectureSteps: [
      "Water Plant",
      "Sensors",
      "Cloud Platform",
      "Operation Center",
    ],
    status: "Available / Expandable",
    image: null,
    relatedProjects: [
      {
        title: "Smart Water Operations System",
        category: "Remote Monitoring",
        location: "Guangxi, China",
        description:
          "Intelligent monitoring and automation system supporting remote operation and efficient management of water treatment facilities.",
        image: "/projects/smart-water-system1.png",
        tags: ["Smart Operations", "Remote Monitoring", "Automation"],
      },
    ],
  },
  {
    slug: "ai-prediction",
    title: "AI Prediction",
    eyebrow: "NEXT-GENERATION WATER INTELLIGENCE",
    shortDescription:
      "Machine learning models for water demand forecasting, equipment status prediction, and operational optimization.",
    overview:
      "ACTION is developing AI prediction capabilities to support future water infrastructure operations, including demand forecasting, equipment health prediction, and process optimization.",
    capabilities: [
      "Water demand forecasting",
      "Equipment status prediction",
      "Operational optimization",
      "Early risk detection",
      "Data-driven decision support",
    ],
    applications: [
      "Municipal water supply",
      "Pump and membrane systems",
      "Chemical dosing optimization",
      "Smart operations planning",
    ],
    architectureSteps: [
      "Operational Data",
      "Model Training",
      "AI Analysis",
      "Prediction Output",
    ],
    status: "In Development",
    image: null,
  },
  {
    slug: "digital-twin",
    title: "Digital Twin Water Plant",
    eyebrow: "DIGITAL WATER INFRASTRUCTURE",
    shortDescription:
      "A digital representation of water facilities for monitoring, simulation, planning, and intelligent decision support.",
    overview:
      "Digital twin capabilities help represent water facilities virtually, making it easier to monitor assets, simulate operating scenarios, and support long-term infrastructure planning.",
    capabilities: [
      "Virtual plant representation",
      "Asset mapping",
      "Scenario simulation",
      "Operational planning",
      "Decision support",
    ],
    applications: [
      "Water treatment plants",
      "Wastewater facilities",
      "Regional water infrastructure",
      "Future smart water platforms",
    ],
    architectureSteps: [
      "Physical Plant",
      "Digital Model",
      "Simulation",
      "Decision Support",
    ],
    status: "Future Capability",
    image: null,
  },
  {
    slug: "cloud-platform",
    title: "Cloud Platform",
    eyebrow: "CONNECTED WATER OPERATIONS",
    shortDescription:
      "A connected platform concept for integrating plant data, monitoring systems, AI analysis, and operation workflows.",
    overview:
      "The cloud platform connects on-site systems with digital tools, enabling future remote monitoring, analytics, and smart operations across multiple water facilities.",
    capabilities: [
      "Multi-site data connection",
      "Cloud-based monitoring",
      "Analytics integration",
      "Operational workflow support",
      "Scalable digital management",
    ],
    applications: [
      "Multi-site water operations",
      "Rural water networks",
      "Municipal utilities",
      "Overseas project operations",
    ],
    architectureSteps: [
      "Site Data",
      "Cloud Connection",
      "Analytics",
      "Operations Team",
    ],
    status: "Planned Platform",
    image: null,
  },
];

export function getSmartWaterItemBySlug(slug: string) {
  return smartWaterItems.find((item) => item.slug === slug);
}
