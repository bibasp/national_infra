
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectStatus, ProjectType } from "@/types";
import { mockProjects } from "@/data/mockData";
import { useEffect, useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { Badge } from "@/components/ui/badge";
import { MapContainer, TileLayer, Marker, Popup, LayerGroup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for Leaflet marker icons in React
// @ts-ignore - Needed for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Map = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [mounted, setMounted] = useState(false);
  
  // Handle SSR/hydration issues with Leaflet
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const filteredProjects = mockProjects.filter(project => {
    if (selectedStatus && selectedStatus !== "all" && project.status !== selectedStatus) {
      return false;
    }
    if (selectedType && selectedType !== "all" && project.type !== selectedType) {
      return false;
    }
    return true;
  });

  // Custom icons for different project statuses
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Map View</h1>
        <p className="text-muted-foreground">Geographical distribution of infrastructure projects</p>
      </div>
      
      <Card className="bg-card">
        <CardHeader className="pb-0">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
            <CardTitle>Global Projects</CardTitle>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  {Object.values(ProjectStatus).map((status) => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {Object.values(ProjectType).map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[600px] w-full mt-4 rounded-md overflow-hidden border">
            {mounted && (
              <MapContainer 
                center={[20, 0]} 
                zoom={2} 
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LayerGroup>
                  {filteredProjects.map((project) => (
                    <Marker 
                      key={project.id} 
                      position={[project.location.coordinates.lat, project.location.coordinates.lng]}
                      icon={statusIcons[project.status]}
                    >
                      <Popup>
                        <div className="max-w-xs">
                          <h3 className="font-medium">{project.name}</h3>
                          <div className="text-xs mt-1">
                            <p className="text-muted-foreground">
                              {project.location.city ? `${project.location.city}, ` : ''}
                              {project.location.country}
                            </p>
                            <p className="mt-1">Status: <span className="font-medium">{project.status}</span></p>
                            <p>Type: <span className="font-medium">{project.type}</span></p>
                            <a 
                              href={`/project/${project.id}`} 
                              className="text-blue-600 hover:underline block mt-2"
                            >
                              View details →
                            </a>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              </MapContainer>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 justify-end">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm">{ProjectStatus.PLANNED}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">{ProjectStatus.ONGOING}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm">{ProjectStatus.COMPLETED}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm">{ProjectStatus.HALTED}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-card p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-3">Projects Shown: {filteredProjects.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden">
              <CardHeader className="py-4 px-5 bg-muted/50">
                <CardTitle className="text-base font-medium">
                  <a href={`/project/${project.id}`} className="hover:underline">
                    {project.name}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <ProjectStatusBadge status={project.status} />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Type:</span>
                  <Badge variant="outline" className="bg-background">
                    {project.type}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Location:</span>
                  <span className="text-sm">
                    {project.location.city ? `${project.location.city}, ` : ''}
                    {project.location.country}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
