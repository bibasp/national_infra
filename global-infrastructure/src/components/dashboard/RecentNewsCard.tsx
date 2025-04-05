
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RecentNewsCardProps {
  news: NewsItem[];
}

export function RecentNewsCard({ news }: RecentNewsCardProps) {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      case "negative":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
    }
  };

  return (
    <Card className="h-[350px]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Recent News</CardTitle>
          <Newspaper className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[290px] px-6">
          <div className="space-y-4 py-4">
            {news.map((item) => (
              <motion.div 
                key={item.id} 
                className="flex flex-col space-y-2 border-b pb-4 last:border-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-medium leading-tight">{item.title}</h3>
                  <Badge variant="outline" className={cn("text-xs ml-2", getSentimentColor(item.sentiment))}>
                    {item.sentiment}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.summary}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="font-medium">{item.source}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
