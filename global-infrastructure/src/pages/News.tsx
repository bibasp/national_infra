
import { NewsCard } from "@/components/news/NewsCard";
import { NewsFilters } from "@/components/news/NewsFilters";
import { mockNews } from "@/data/mockData";
import { useState, useMemo } from "react";

const News = () => {
  const [filters, setFilters] = useState({
    search: "",
    sentiment: "",
    source: "",
  });

  // Get unique sources for the filter
  const sources = [...new Set(mockNews.map(item => item.source))];

  const filteredNews = useMemo(() => {
    return mockNews.filter((news) => {
      // Apply search filter
      if (filters.search && 
          !news.title.toLowerCase().includes(filters.search.toLowerCase()) &&
          !news.summary.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      
      // Apply sentiment filter (skip if "all")
      if (filters.sentiment && filters.sentiment !== "all" && news.sentiment !== filters.sentiment) {
        return false;
      }
      
      // Apply source filter (skip if "all")
      if (filters.source && filters.source !== "all" && news.source !== filters.source) {
        return false;
      }
      
      return true;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [filters]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">News Feed</h1>
        <p className="text-muted-foreground">
          Latest infrastructure news and updates
        </p>
      </div>

      <NewsFilters onFilterChange={setFilters} sources={sources} />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))
        ) : (
          <div className="col-span-full py-8 text-center">
            <p className="text-muted-foreground">No news items found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
