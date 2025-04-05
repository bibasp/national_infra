
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, X } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useState } from "react";

interface NewsFiltersProps {
  onFilterChange: (filters: {
    search: string;
    sentiment: string;
    source: string;
  }) => void;
  sources: string[];
}

export function NewsFilters({ onFilterChange, sources }: NewsFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    sentiment: "",
    source: "",
  });

  const handleFilterChange = (key: keyof typeof filters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      search: "",
      sentiment: "",
      source: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
      <div className="flex-1 space-y-1">
        <label htmlFor="search" className="text-sm font-medium">
          Search
        </label>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Search by news title, content..."
            className="pl-8"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>
      </div>
      
      <div className="w-full md:w-[180px] space-y-1">
        <label htmlFor="sentiment-filter" className="text-sm font-medium">
          Sentiment
        </label>
        <Select
          value={filters.sentiment}
          onValueChange={(value) => handleFilterChange("sentiment", value)}
        >
          <SelectTrigger id="sentiment-filter">
            <SelectValue placeholder="All Sentiments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sentiments</SelectItem>
            <SelectItem value="positive">Positive</SelectItem>
            <SelectItem value="negative">Negative</SelectItem>
            <SelectItem value="neutral">Neutral</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-full md:w-[180px] space-y-1">
        <label htmlFor="source-filter" className="text-sm font-medium">
          Source
        </label>
        <Select
          value={filters.source}
          onValueChange={(value) => handleFilterChange("source", value)}
        >
          <SelectTrigger id="source-filter">
            <SelectValue placeholder="All Sources" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            {sources.map((source) => (
              <SelectItem key={source} value={source}>
                {source}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Button
        variant="outline"
        className="flex items-center gap-1"
        onClick={handleReset}
        disabled={!filters.search && !filters.sentiment && !filters.source}
      >
        <X className="h-4 w-4" />
        Reset
      </Button>
    </div>
  );
}
