
import { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ProjectTilesProps {
  projects: Project[];
}

export function ProjectTiles({ projects }: ProjectTilesProps) {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={item}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="h-full"
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="h-full overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700">
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <Link
                      to={`/project/${project.id}`}
                      className="text-lg font-medium hover:text-blue-600 transition-colors group flex items-center"
                    >
                      {project.name}
                      <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <ProjectStatusBadge status={project.status} />
                  </div>
                </CardHeader>

                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline" className="bg-background">
                      {project.type}
                    </Badge>
                    <Badge variant="outline" className="bg-background">
                      {project.location.city ? `${project.location.city}, ` : ''}
                      {project.location.country}
                    </Badge>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex justify-between items-center text-sm">
                  <div className="font-medium">
                    {formatCurrency(project.budget, project.budgetCurrency)}
                  </div>
                  <div className="text-muted-foreground">
                    Updated {formatDistanceToNow(new Date(project.lastUpdated), { addSuffix: true })}
                  </div>
                </CardFooter>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">{project.name}</h4>
                <div className="text-xs">
                  <p><span className="font-medium">Type:</span> {project.type}</p>
                  <p><span className="font-medium">Budget:</span> {formatCurrency(project.budget, project.budgetCurrency)}</p>
                  <p><span className="font-medium">Location:</span> {project.location.city ? `${project.location.city}, ` : ''}{project.location.country}</p>
                  <p><span className="font-medium">Status:</span> {project.status}</p>
                </div>
                <p className="text-xs text-muted-foreground">{project.description}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
