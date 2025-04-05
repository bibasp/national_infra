
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-6 max-w-md">
        <div className="w-24 h-24 bg-muted flex items-center justify-center rounded-full mx-auto mb-8">
          <span className="text-4xl font-bold text-muted-foreground">404</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, the infrastructure project or page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
