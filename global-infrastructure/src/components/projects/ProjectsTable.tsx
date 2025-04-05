
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ProjectsTableProps {
  projects: Project[];
}

export function ProjectsTable({ projects }: ProjectsTableProps) {
  const formatCurrency = (amount: number, currency: string) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    
    // Format large numbers with M/B suffixes
    if (amount >= 1e9) {
      return formatter.format(amount / 1e9).replace(/\.00$/, '') + 'B';
    }
    if (amount >= 1e6) {
      return formatter.format(amount / 1e6).replace(/\.00$/, '') + 'M';
    }
    return formatter.format(amount);
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <motion.tr
              key={project.id}
              className="hover:bg-muted/50 group cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
            >
              <TableCell className="font-medium">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link 
                      to={`/project/${project.id}`} 
                      className="hover:underline text-foreground hover:text-blue-600 transition-colors"
                    >
                      {project.name}
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{project.name}</h4>
                      <p className="text-xs text-muted-foreground">{project.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-background group-hover:bg-blue-50 transition-colors">
                  {project.type}
                </Badge>
              </TableCell>
              <TableCell>
                <ProjectStatusBadge status={project.status} />
              </TableCell>
              <TableCell>
                {project.location.city ? `${project.location.city}, ` : ''}
                {project.location.country}
              </TableCell>
              <TableCell>{formatCurrency(project.budget, project.budgetCurrency)}</TableCell>
              <TableCell className="text-muted-foreground">
                {formatDistanceToNow(new Date(project.lastUpdated), { addSuffix: true })}
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
