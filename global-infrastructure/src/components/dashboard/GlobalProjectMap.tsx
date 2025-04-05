
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project, ProjectStatus } from "@/types";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet marker icons in React
// @ts-ignore - Needed for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface GlobalProjectMapProps {
  projects: Project[];
}

export function GlobalProjectMap({ projects }: GlobalProjectMapProps) {
  const [mounted, setMounted] = useState(false);

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

  // Handle SSR/hydration issues with Leaflet
  useEffect(() => {
    setMounted(true);
  }, []);

  // Format currency for display
  const formatCurrency = (amount: number, currency: string) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    
    if (amount >= 1e9) {
      return formatter.format(amount / 1e9).replace(/\.00$/, '') + 'B';
    }
    if (amount >= 1e6) {
      return formatter.format(amount / 1e6).replace(/\.00$/, '') + 'M';
    }
    return formatter.format(amount);
  };

  return (
    <Card className="h-[350px]">
      <CardHeader>
        <CardTitle className="text-base font-medium">Global Project Distribution</CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-[300px]">
        {mounted && (
          <MapContainer 
            center={[20, 0]} 
            zoom={2} 
            style={{ height: "100%", width: "100%", borderRadius: "0 0 0.5rem 0.5rem" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {projects.map((project) => (
              <Marker 
                key={project.id} 
                position={[project.location.coordinates.lat, project.location.coordinates.lng]}
                icon={statusIcons[project.status]}
              >
                <Popup>
                  <div className="max-w-xs">
                    <h3 className="font-medium text-sm">{project.name}</h3>
                    <div className="text-xs mt-1">
                      <p className="text-muted-foreground">
                        {project.location.city ? `${project.location.city}, ` : ''}
                        {project.location.country}
                      </p>
                      <p className="mt-1">Status: <span className="font-medium">{project.status}</span></p>
                      <p>Type: <span className="font-medium">{project.type}</span></p>
                      <p>Budget: <span className="font-medium">{formatCurrency(project.budget, project.budgetCurrency)}</span></p>
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
          </MapContainer>
        )}
      </CardContent>
    </Card>
  );
}
