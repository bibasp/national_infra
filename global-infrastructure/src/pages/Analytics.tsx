
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useEffect, useState } from "react";
import { ProjectStatus, ProjectType } from "@/types";
import { mockProjects } from "@/data/mockData";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const Analytics = () => {
  const [projectsByStatus, setProjectsByStatus] = useState<{ name: string; value: number }[]>([]);
  const [projectsByType, setProjectsByType] = useState<{ name: string; value: number }[]>([]);
  const [budgetByType, setBudgetByType] = useState<{ name: string; value: number }[]>([]);
  const [monthlyProgress, setMonthlyProgress] = useState<{ month: string; completed: number; ongoing: number }[]>([]);

  useEffect(() => {
    // Transform data for status chart
    const statusCounts = Object.values(ProjectStatus).reduce((acc, status) => {
      acc[status] = mockProjects.filter(project => project.status === status).length;
      return acc;
    }, {} as Record<string, number>);
    
    setProjectsByStatus(
      Object.entries(statusCounts).map(([name, value]) => ({ name, value }))
    );

    // Transform data for type chart
    const typeCounts = Object.values(ProjectType).reduce((acc, type) => {
      acc[type] = mockProjects.filter(project => project.type === type).length;
      return acc;
    }, {} as Record<string, number>);
    
    setProjectsByType(
      Object.entries(typeCounts).map(([name, value]) => ({ name, value }))
    );

    // Transform data for budget chart
    const budgetByTypeData = Object.values(ProjectType).reduce((acc, type) => {
      acc[type] = mockProjects
        .filter(project => project.type === type)
        .reduce((sum, project) => sum + project.budget, 0);
      return acc;
    }, {} as Record<string, number>);
    
    setBudgetByType(
      Object.entries(budgetByTypeData).map(([name, value]) => ({ name, value }))
    );

    // Monthly progress data (mock data)
    setMonthlyProgress([
      { month: "Jan", completed: 2, ongoing: 5 },
      { month: "Feb", completed: 3, ongoing: 7 },
      { month: "Mar", completed: 5, ongoing: 8 },
      { month: "Apr", completed: 7, ongoing: 9 },
      { month: "May", completed: 8, ongoing: 10 },
      { month: "Jun", completed: 10, ongoing: 8 },
    ]);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-2 border border-border rounded-md shadow-sm">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${typeof entry.value === 'number' ? entry.value.toLocaleString(undefined, { 
                maximumFractionDigits: 2 
              }) : entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Visualize and analyze global infrastructure data.</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="status">Status Analysis</TabsTrigger>
          <TabsTrigger value="budget">Budget Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Projects by Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectsByStatus}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {projectsByStatus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Projects by Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={projectsByType}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="value" fill="#0088FE" name="Count" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="status" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Project Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyProgress}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="completed" stroke="#00C49F" name="Completed" />
                    <Line type="monotone" dataKey="ongoing" stroke="#0088FE" name="Ongoing" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="budget" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Budget Allocation by Project Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={budgetByType}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="value" fill="#FFBB28" name="Budget (USD)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
