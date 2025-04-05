
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BibasHeader = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // External links to other parts of your website
  const externalNavigation = [
    { name: "Home", path: "https://www.bibaspokhrel.com.np/index.html" },
    { name: "Blog", path: "https://www.bibaspokhrel.com.np/blog.html" },
    { name: "Computer Vision", path: "https://www.bibaspokhrel.com.np/computer_vision/computer_vision.html" },
    { name: "Research Summaries", path: "https://www.bibaspokhrel.com.np/research.html" },
    { name: "What's New", path: "https://www.bibaspokhrel.com.np/news.html" },
    { name: "Contact", path: "https://www.bibaspokhrel.com.np/contact.html" },
  ];

  // Internal navigation for this app
  const internalNavigation = [
    { name: "Dashboard", path: "/" },
    { name: "Global Projects", path: "/projects" },
    { name: "Map View", path: "/map" },
    { name: "News Feed", path: "/news" },
    { name: "Analytics", path: "/analytics" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-border/40"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <a href="https://www.bibaspokhrel.com.np/index.html" className="text-xl font-semibold text-foreground">
              Bibas Pokhrel
            </a>
          </motion.div>
          
          <nav className="hidden md:flex items-center">
            {/* External website links */}
            {externalNavigation.map((item, i) => (
              <motion.div
                key={`ext-${item.name}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
              >
                <a
                  href={item.path}
                  className="px-3 py-2 text-sm font-medium transition-colors relative text-foreground/80 hover:text-foreground"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
            
            {/* Divider */}
            <motion.div 
              className="mx-2 h-5 border-r border-gray-300 dark:border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            />
            
            {/* Internal app links */}
            {internalNavigation.map((item, i) => (
              <motion.div
                key={`int-${item.name}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    location.pathname === item.path
                      ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {isMounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default BibasHeader;
