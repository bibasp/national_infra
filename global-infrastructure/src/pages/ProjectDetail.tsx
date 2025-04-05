
import { useParams } from "react-router-dom";
import { mockProjects } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Building2, Calendar, Globe, Landmark, Users, Tag, History, CircleDollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDistanceToNow, format } from "date-fns";
import { ProjectStatus, ProjectType } from "@/types";

// Fix for Leaflet marker icons in React
// @ts-ignore - Needed for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [mounted, setMounted] = useState(false);
  
  const project = mockProjects.find(p => p.id === id);
  
  useEffect(() => {
    setMounted(true);
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <p className="text-muted-foreground">The project you're looking for doesn't exist or has been removed.</p>
        <a href="/projects" className="mt-4 text-blue-600 hover:underline">Back to Projects</a>
      </div>
    );
  }

  // Custom icon based on project status
  const statusIcons = {
    [ProjectStatus.PLANNED]: new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }),
    [ProjectStatus.ONGOING]: new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }),
    [ProjectStatus.COMPLETED]: new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }),
    [ProjectStatus.HALTED]: new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  };

  // Format currency for display and convert to USD where applicable
  const formatCurrency = (amount: number, currency: string) => {
    // Very simplified conversion rates (in real app, this would use an API)
    const conversionRates = {
      "USD": 1,
      "EUR": 1.08,
      "GBP": 1.27,
      "CNY": 0.14,
      "AUD": 0.66,
      "CAD": 0.74,
      "INR": 0.012
    };
    
    // Convert to USD
    const usdAmount = currency !== "USD" && conversionRates[currency as keyof typeof conversionRates]
      ? amount / conversionRates[currency as keyof typeof conversionRates]
      : amount;
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    
    if (usdAmount >= 1e9) {
      return formatter.format(usdAmount / 1e9).replace(/\.00$/, '') + 'B';
    }
    if (usdAmount >= 1e6) {
      return formatter.format(usdAmount / 1e6).replace(/\.00$/, '') + 'M';
    }
    return formatter.format(usdAmount);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <a href="/projects" className="text-sm hover:underline text-muted-foreground">
            &larr; Back to Projects
          </a>
          <h1 className="text-3xl font-bold mt-2">{project.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <ProjectStatusBadge status={project.status} />
            <Badge variant="outline" className="bg-background">
              {project.type}
            </Badge>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm text-muted-foreground">Last updated</span>
          <p className="font-medium">
            {formatDistanceToNow(new Date(project.lastUpdated), { addSuffix: true })}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed">{project.description}</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Budget (USD)</p>
                    <p className="font-medium">{formatCurrency(project.budget, project.budgetCurrency)}</p>
                    {project.budgetCurrency !== "USD" && (
                      <p className="text-xs text-muted-foreground">
                        Original: {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: project.budgetCurrency,
                          maximumFractionDigits: 0
                        }).format(project.budget)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">
                      {project.location.city ? `${project.location.city}, ` : ''}
                      {project.location.country}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">Project Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[300px] w-full">
                {mounted && (
                  <MapContainer 
                    center={[project.location.coordinates.lat, project.location.coordinates.lng]} 
                    zoom={6} 
                    style={{ height: "100%", width: "100%" }}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker 
                      position={[project.location.coordinates.lat, project.location.coordinates.lng]} 
                      icon={statusIcons[project.status]}
                    >
                      <Popup>
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm">
                          {project.location.city ? `${project.location.city}, ` : ''}
                          {project.location.country}
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Technical Details & Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <h3 className="text-lg font-medium mb-2">Engineering Challenges</h3>
                <p className="text-sm leading-relaxed">
                  {project.description.includes('challenges') 
                    ? project.description 
                    : `The ${project.name} project faces several engineering challenges including geological constraints, environmental considerations, and technical complexities. Engineers must address issues related to ${
                        project.type === 'Transport' ? 'traffic flow and structural integrity' : 
                        project.type === 'Energy' ? 'power distribution and energy efficiency' :
                        project.type === 'Water' ? 'water quality and flood control' :
                        project.type === 'Buildings' ? 'structural stability and energy efficiency' :
                        project.type === 'Industrial' ? 'operational efficiency and pollution control' :
                        'resource allocation and sustainability'
                      }. These challenges require innovative solutions and careful planning to ensure project success.`
                  }
                </p>
              </div>
              
              <div className="rounded-md bg-muted p-4">
                <h3 className="text-lg font-medium mb-2">Structural Information</h3>
                <p className="text-sm leading-relaxed">
                  {`This ${project.type.toLowerCase()} project incorporates modern engineering principles with ${
                    project.status === ProjectStatus.COMPLETED ? 'proven' : 'cutting-edge'
                  } technology. The design prioritizes ${
                    project.type === 'Transport' ? 'safety, durability, and capacity' : 
                    project.type === 'Energy' ? 'efficiency, reliability, and sustainability' :
                    project.type === 'Water' ? 'water quality, flood protection, and environmental preservation' :
                    project.type === 'Buildings' ? 'structural integrity, energy efficiency, and occupant comfort' :
                    project.type === 'Industrial' ? 'operational efficiency, safety, and environmental compliance' :
                    'resource optimization, sustainability, and future adaptability'
                  }. Technical specifications adhere to international standards while addressing local conditions and requirements.`}
                </p>
              </div>
              
              <div className="rounded-md bg-muted p-4">
                <h3 className="text-lg font-medium mb-2">Environmental Considerations</h3>
                <p className="text-sm leading-relaxed">
                  {`The project includes comprehensive environmental mitigation measures addressing potential impacts on local ecosystems. These include ${
                    project.type === 'Transport' ? 'wildlife crossings, noise barriers, and stormwater management systems' : 
                    project.type === 'Energy' ? 'emissions control, habitat restoration, and water conservation measures' :
                    project.type === 'Water' ? 'fish passage facilities, wetland preservation, and water quality monitoring' :
                    project.type === 'Buildings' ? 'green spaces, energy-efficient systems, and sustainable materials' :
                    project.type === 'Industrial' ? 'pollution control systems, waste management, and ecosystem monitoring' :
                    'resource conservation, ecosystem protection, and climate adaptation strategies'
                  }. Regular environmental monitoring ensures compliance with all applicable regulations.`}
                </p>
              </div>
              
              <div className="rounded-md bg-muted p-4">
                <h3 className="text-lg font-medium mb-2">Key Technical Specifications</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {project.type === 'Transport' && (
                    <>
                      <li>Length: {Math.floor(Math.random() * 100) + 10} km</li>
                      <li>Capacity: {Math.floor(Math.random() * 50000) + 10000} passengers/hour</li>
                      <li>Design Speed: {Math.floor(Math.random() * 200) + 100} km/h</li>
                      <li>Number of Stations/Interchanges: {Math.floor(Math.random() * 20) + 5}</li>
                      <li>Construction Method: {['Cut and Cover', 'Tunnel Boring Machine', 'Elevated Construction', 'Precast Segments'][Math.floor(Math.random() * 4)]}</li>
                    </>
                  )}
                  {project.type === 'Energy' && (
                    <>
                      <li>Capacity: {Math.floor(Math.random() * 2000) + 100} MW</li>
                      <li>Annual Output: {Math.floor(Math.random() * 8000) + 2000} GWh</li>
                      <li>Efficiency Rate: {Math.floor(Math.random() * 20) + 70}%</li>
                      <li>Transmission Voltage: {[132, 220, 400, 765][Math.floor(Math.random() * 4)]} kV</li>
                      <li>Storage Capacity: {Math.floor(Math.random() * 100) + 10} GWh</li>
                    </>
                  )}
                  {project.type === 'Water' && (
                    <>
                      <li>Capacity: {Math.floor(Math.random() * 1000) + 100} million gallons/day</li>
                      <li>Dam Height: {Math.floor(Math.random() * 100) + 50} m</li>
                      <li>Reservoir Area: {Math.floor(Math.random() * 100) + 10} km²</li>
                      <li>Pipeline Length: {Math.floor(Math.random() * 100) + 10} km</li>
                      <li>Treatment Technology: {['Reverse Osmosis', 'Activated Sludge', 'Membrane Filtration', 'UV Disinfection'][Math.floor(Math.random() * 4)]}</li>
                    </>
                  )}
                  {project.type === 'Buildings' && (
                    <>
                      <li>Height: {Math.floor(Math.random() * 400) + 100} m</li>
                      <li>Floor Area: {Math.floor(Math.random() * 500000) + 100000} m²</li>
                      <li>Number of Floors: {Math.floor(Math.random() * 80) + 20}</li>
                      <li>Foundation Type: {['Pile Foundation', 'Raft Foundation', 'Isolated Footing', 'Combined Footing'][Math.floor(Math.random() * 4)]}</li>
                      <li>Structural System: {['Steel Frame', 'Reinforced Concrete', 'Composite Structure', 'Tube System'][Math.floor(Math.random() * 4)]}</li>
                    </>
                  )}
                  {project.type === 'Industrial' && (
                    <>
                      <li>Production Capacity: {Math.floor(Math.random() * 1000000) + 100000} units/year</li>
                      <li>Facility Area: {Math.floor(Math.random() * 100) + 10} hectares</li>
                      <li>Power Requirement: {Math.floor(Math.random() * 200) + 50} MW</li>
                      <li>Automation Level: {Math.floor(Math.random() * 30) + 70}%</li>
                      <li>Waste Processing: {Math.floor(Math.random() * 100000) + 10000} tons/year</li>
                    </>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Start Date</p>
                  <p className="font-medium">{format(new Date(project.timeline.start), "MMMM d, yyyy")}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Completion</p>
                  <p className="font-medium">{format(new Date(project.timeline.estimatedCompletion), "MMMM d, yyyy")}</p>
                </div>
              </div>
              {project.timeline.actualCompletion && (
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Actual Completion</p>
                    <p className="font-medium">{format(new Date(project.timeline.actualCompletion), "MMMM d, yyyy")}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Stakeholders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-2">
                <Users className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <ul className="space-y-1">
                    {project.stakeholders.map((stakeholder, index) => (
                      <li key={index} className="text-sm">
                        {stakeholder}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
