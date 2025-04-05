
export enum ProjectStatus {
  PLANNED = "Planned",
  ONGOING = "Ongoing",
  COMPLETED = "Completed",
  HALTED = "Halted"
}

export enum ProjectType {
  TRANSPORT = "Transport",
  ENERGY = "Energy",
  WATER = "Water",
  BUILDINGS = "Buildings",
  INDUSTRIAL = "Industrial",
  OTHER = "Other"
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  type: ProjectType;
  budget: number;
  budgetCurrency: string;
  location: {
    country: string;
    city?: string;
    coordinates: {
      lat: number;
      lng: number;
    }
  };
  timeline: {
    start: string;
    estimatedCompletion: string;
    actualCompletion?: string;
  };
  stakeholders: string[];
  tags: string[];
  lastUpdated: string;
  uniqueFacts?: string[]; // Added to store interesting/unique facts about each project
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  summary: string;
  relatedProjects: string[];
  tags: string[];
  sentiment: "positive" | "negative" | "neutral";
}

export interface StatsSummary {
  totalProjects: number;
  byStatus: Record<ProjectStatus, number>;
  byType: Record<ProjectType, number>;
  byRegion: Record<string, number>;
  totalBudget: number;
  averageCompletionTime: number; // in days
}
