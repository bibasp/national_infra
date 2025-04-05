
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ProjectStatus } from "@/types";

interface ProjectStatusChartProps {
  data: {
    status: ProjectStatus;
    value: number;
  }[];
}

const COLORS = {
  [ProjectStatus.PLANNED]: "#3b82f6", // blue
  [ProjectStatus.ONGOING]: "#22c55e", // green
  [ProjectStatus.COMPLETED]: "#a855f7", // purple
  [ProjectStatus.HALTED]: "#ef4444", // red
};

export function ProjectStatusChart({ data }: ProjectStatusChartProps) {
  return (
    <Card className="h-[350px]">
      <CardHeader>
        <CardTitle className="text-base font-medium">Projects by Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={270}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="status"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.status]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [value, "Count"]} />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
