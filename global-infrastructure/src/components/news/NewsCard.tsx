
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
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
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between gap-2">
          <CardTitle className="text-base font-medium">{news.title}</CardTitle>
          <Badge variant="outline" className={cn("ml-auto", getSentimentColor(news.sentiment))}>
            {news.sentiment}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{news.summary}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {news.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <span className="font-medium">{news.source}</span>
          <span>•</span>
          <span>{new Date(news.date).toLocaleDateString()}</span>
        </div>
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-primary hover:underline"
        >
          Read <ExternalLink className="h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  );
}
