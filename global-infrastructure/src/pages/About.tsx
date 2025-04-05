
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">About This Project</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn about the Global Infrastructure Insight Hub and its purpose
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Global Infrastructure Insight Hub</h2>
            <p>
              The Global Infrastructure Insight Hub is a comprehensive platform designed to track, analyze, and 
              visualize major infrastructure projects around the world. This platform serves as a centralized 
              repository of information for civil engineers, project managers, researchers, investors, and 
              policymakers interested in global infrastructure development.
            </p>

            <h3>Our Purpose</h3>
            <p>
              As a Civil Engineer with experience in infrastructure projects, I created this platform to address 
              the need for accessible, organized, and detailed information about major infrastructure initiatives. 
              The platform aims to:
            </p>

            <ul>
              <li>Provide comprehensive data on global infrastructure projects across various sectors</li>
              <li>Track project progress, budgets, technical specifications, and timelines</li>
              <li>Analyze trends in infrastructure development by region, type, and status</li>
              <li>Serve as an educational resource for students and professionals in civil engineering</li>
              <li>Highlight innovations and best practices in infrastructure development</li>
            </ul>

            <h3>About the Developer</h3>
            <p>
              Hi, I am a Civil Engineer (NEC Registered) with interests in different types of infrastructure, 
              their resilience, and connectivity. At present, I am contributing to the digitization in the AEC 
              industry, serving as the GIS Expert in the largest potable water supply distribution project of Nepal. 
              When I'm not working, I love to explore GIS, BIM, programming, and IoT, as I see their potential 
              on transforming the way we operate in the AEC industry. From Spatial Analysis to Computer Vision, 
              I have interests in newer and efficient methods of data collection, data management, data analysis, 
              and help in decision making for infrastructure works.
            </p>

            <h3>Data Sources</h3>
            <p>
              The information presented on this platform is collected from a variety of reputable sources, including:
            </p>
            <ul>
              <li>Official government publications and project websites</li>
              <li>International development organizations and multilateral institutions</li>
              <li>Industry reports and academic publications</li>
              <li>News articles and press releases from project developers</li>
              <li>Personal research and professional networks</li>
            </ul>

            <p>
              While we strive for accuracy and thoroughness, the dynamic nature of infrastructure projects means 
              that some information may change over time. We welcome contributions, corrections, and updates from 
              users who have specific knowledge about any of the projects featured on this platform.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-4">
        <a 
          href="https://bibaspokhrel.com.np" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bibas-button-outline"
        >
          Visit My Personal Website
        </a>
      </div>
    </div>
  );
};

export default About;
