
import { StatsSummary, ProjectStatus, ProjectType } from "../types";
import { mockProjects } from "./mockProjects";
import { mockNews } from "./mockNews";

export { mockProjects, mockNews };

// Calculate statistics based on the mock projects
const calculateStatsSummary = (): StatsSummary => {
  const byStatus = {
    [ProjectStatus.PLANNED]: 0,
    [ProjectStatus.ONGOING]: 0,
    [ProjectStatus.COMPLETED]: 0,
    [ProjectStatus.HALTED]: 0
  };

  const byType = {
    [ProjectType.TRANSPORT]: 0,
    [ProjectType.ENERGY]: 0,
    [ProjectType.WATER]: 0,
    [ProjectType.BUILDINGS]: 0,
    [ProjectType.INDUSTRIAL]: 0,
    [ProjectType.OTHER]: 0
  };

  const byRegion: Record<string, number> = {};
  let totalBudget = 0;
  let completedProjectsDays = 0;
  let completedProjectsCount = 0;

  // Conversion rates to USD for budget calculation
  const conversionRates: Record<string, number> = {
    "USD": 1,
    "EUR": 1.09,
    "GBP": 1.27,
    "CNY": 0.14,
    "AUD": 0.66,
    "CAD": 0.74,
    "INR": 0.012
  };

  mockProjects.forEach(project => {
    // Count by status
    byStatus[project.status]++;
    
    // Count by type
    byType[project.type]++;
    
    // Count by region (simplified)
    const region = getRegionFromCountry(project.location.country);
    byRegion[region] = (byRegion[region] || 0) + 1;
    
    // Calculate budget in USD
    const conversionRate = conversionRates[project.budgetCurrency] || 1;
    const budgetInUSD = project.budget * conversionRate;
    totalBudget += budgetInUSD;
    
    // Calculate completion time for completed projects
    if (project.status === ProjectStatus.COMPLETED && project.timeline.actualCompletion) {
      const startDate = new Date(project.timeline.start);
      const completionDate = new Date(project.timeline.actualCompletion);
      const days = Math.floor((completionDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      completedProjectsDays += days;
      completedProjectsCount++;
    }
  });

  return {
    totalProjects: mockProjects.length,
    byStatus,
    byType,
    byRegion,
    totalBudget,
    averageCompletionTime: completedProjectsCount > 0 ? completedProjectsDays / completedProjectsCount : 0
  };
};

// Helper function to determine region from country
const getRegionFromCountry = (country: string): string => {
  const regions: Record<string, string[]> = {
    "Asia": [
      "China", "Japan", "South Korea", "India", "Indonesia", "Malaysia", 
      "Vietnam", "Thailand", "Philippines", "Singapore", "Laos", "Myanmar",
      "Cambodia", "Bangladesh", "Pakistan", "Nepal", "Sri Lanka"
    ],
    "Europe": [
      "United Kingdom", "France", "Germany", "Spain", "Italy", "Switzerland", 
      "Netherlands", "Belgium", "Sweden", "Norway", "Denmark", "Finland",
      "Poland", "Czech Republic", "Austria", "Ukraine", "Russia", "Turkey"
    ],
    "North America": [
      "United States", "Canada", "Mexico", "Panama", "Costa Rica", "Jamaica",
      "Cuba", "Dominican Republic", "Haiti", "Guatemala", "Honduras"
    ],
    "South America": [
      "Brazil", "Argentina", "Chile", "Peru", "Colombia", "Venezuela", 
      "Ecuador", "Bolivia", "Uruguay", "Paraguay"
    ],
    "Africa": [
      "South Africa", "Egypt", "Nigeria", "Kenya", "Morocco", "Algeria",
      "Ghana", "Ethiopia", "Tanzania", "Uganda", "Zimbabwe", "Zambia",
      "Democratic Republic of Congo", "Angola"
    ],
    "Middle East": [
      "Saudi Arabia", "United Arab Emirates", "Qatar", "Israel", "Iraq",
      "Iran", "Jordan", "Lebanon", "Oman", "Kuwait"
    ],
    "Oceania": [
      "Australia", "New Zealand", "Fiji", "Papua New Guinea"
    ]
  };

  for (const [region, countries] of Object.entries(regions)) {
    if (countries.includes(country)) {
      return region;
    }
  }
  
  return "Other";
};

export const mockStatsSummary = calculateStatsSummary();
