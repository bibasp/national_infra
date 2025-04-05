
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProjectStatus, ProjectType } from "@/types";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectFiltersProps {
  onFilterChange: (filters: {
    search: string;
    status: ProjectStatus | "all";
    type: ProjectType | "all";
  }) => void;
  hideTypeFilter?: boolean;
}

export function ProjectFilters({ onFilterChange, hideTypeFilter = false }: ProjectFiltersProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ProjectStatus | "all">("all");
  const [type, setType] = useState<ProjectType | "all">("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onFilterChange({ search: e.target.value, status, type });
  };

  const handleStatusChange = (value: ProjectStatus | "all") => {
    setStatus(value);
    onFilterChange({ search, status: value, type });
  };

  const handleTypeChange = (value: ProjectType | "all") => {
    setType(value);
    onFilterChange({ search, status, type: value });
  };

  const handleReset = () => {
    setSearch("");
    setStatus("all");
    setType("all");
    onFilterChange({ search: "", status: "all", type: "all" });
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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <motion.div variants={item} className="relative">
        <Label htmlFor="search" className="text-sm font-medium">Search Projects</Label>
        <div className="relative mt-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            id="search"
            placeholder="Search by name, description, or location..."
            className="pl-10 w-full transition-shadow duration-300 focus:shadow-md"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </motion.div>
      
      <motion.div 
        variants={item} 
        className="grid gap-4 grid-cols-1 md:grid-cols-2"
      >
        <div>
          <Label htmlFor="status" className="text-sm font-medium">Status</Label>
          <Select onValueChange={handleStatusChange} value={status}>
            <SelectTrigger 
              className="w-full mt-1 transition-shadow duration-300 focus:shadow-md"
              id="status"
            >
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value={ProjectStatus.PLANNED}>{ProjectStatus.PLANNED}</SelectItem>
              <SelectItem value={ProjectStatus.ONGOING}>{ProjectStatus.ONGOING}</SelectItem>
              <SelectItem value={ProjectStatus.COMPLETED}>{ProjectStatus.COMPLETED}</SelectItem>
              <SelectItem value={ProjectStatus.HALTED}>{ProjectStatus.HALTED}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {!hideTypeFilter && (
          <div>
            <Label htmlFor="type" className="text-sm font-medium">Type</Label>
            <Select onValueChange={handleTypeChange} value={type}>
              <SelectTrigger 
                className="w-full mt-1 transition-shadow duration-300 focus:shadow-md"
                id="type"
              >
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value={ProjectType.TRANSPORT}>{ProjectType.TRANSPORT}</SelectItem>
                <SelectItem value={ProjectType.ENERGY}>{ProjectType.ENERGY}</SelectItem>
                <SelectItem value={ProjectType.WATER}>{ProjectType.WATER}</SelectItem>
                <SelectItem value={ProjectType.BUILDINGS}>{ProjectType.BUILDINGS}</SelectItem>
                <SelectItem value={ProjectType.INDUSTRIAL}>{ProjectType.INDUSTRIAL}</SelectItem>
                <SelectItem value={ProjectType.OTHER}>{ProjectType.OTHER}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </motion.div>
      
      <motion.div variants={item} className="flex justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleReset}
          className="transition-all duration-300 hover:bg-muted"
        >
          Reset Filters
        </Button>
      </motion.div>
    </motion.div>
  );
}
