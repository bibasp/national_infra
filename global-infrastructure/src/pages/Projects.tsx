
import { useState } from "react";
import { ProjectsTable } from "@/components/projects/ProjectsTable";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectTiles } from "@/components/projects/ProjectTiles";
import { mockProjects } from "@/data/mockData";
import { Project, ProjectStatus, ProjectType } from "@/types";
import { LayoutGrid, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(mockProjects);
  const [view, setView] = useState<"list" | "grid">("list");

  const handleFilterChange = (filters: {
    search: string;
    status: ProjectStatus | "all";
    type: ProjectType | "all";
  }) => {
    const filtered = mockProjects.filter((project) => {
      // Search filter
      const searchMatch =
        filters.search === "" ||
        project.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.location.country.toLowerCase().includes(filters.search.toLowerCase());

      // Status filter
      const statusMatch = filters.status === "all" || project.status === filters.status;

      // Type filter
      const typeMatch = filters.type === "all" || project.type === filters.type;

      return searchMatch && statusMatch && typeMatch;
    });

    setFilteredProjects(filtered);
  };

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div>
        <motion.h1 
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Infrastructure Projects
        </motion.h1>
        <motion.p 
          className="text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Browse and filter global infrastructure initiatives across various sectors
        </motion.p>
      </div>

      <motion.div 
        className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <ProjectFilters onFilterChange={handleFilterChange} />
        
        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProjects.length} projects
          </p>
          <div className="flex space-x-2">
            <Button
              variant={view === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("list")}
              className="transition-all duration-300"
            >
              <LayoutList className="h-4 w-4 mr-2" />
              Table
            </Button>
            <Button
              variant={view === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("grid")}
              className="transition-all duration-300"
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              Tiles
            </Button>
          </div>
        </div>
        
        <div className="mt-4">
          {view === "list" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              key="table-view"
            >
              <ProjectsTable projects={filteredProjects} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              key="grid-view"
            >
              <ProjectTiles projects={filteredProjects} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
