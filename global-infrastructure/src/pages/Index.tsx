
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Database, MapPin } from "lucide-react";

const Index = () => {
  return (
    <motion.div 
      className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Global Infrastructure Insight Hub
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Explore and analyze global infrastructure projects with comprehensive data, 
          interactive visualizations, and detailed insights from around the world.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/dashboard">
            <Button size="lg" className="gap-2">
              Dashboard <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline" size="lg" className="gap-2">
              Explore Projects <Database className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Globe className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access data from infrastructure projects across 50+ countries worldwide.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Database className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Rich Dataset</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Over 100 infrastructure projects with detailed technical information and analyses.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <MapPin className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Visualize projects geographically and filter by various criteria.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-12 text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>
            Part of{" "}
            <a 
              href="https://www.bibaspokhrel.com.np/index.html" 
              className="text-blue-600 hover:underline"
            >
              Bibas Pokhrel's
            </a>{" "}
            personal website and research projects.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
