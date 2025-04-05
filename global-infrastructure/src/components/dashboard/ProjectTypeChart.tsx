
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ProjectType } from "@/types";

interface ProjectTypeChartProps {
  data: {
    type: ProjectType;
    count: number;
  }[];
}

export function ProjectTypeChart({ data }: ProjectTypeChartProps) {
  return (
    <Card className="h-[350px]">
      <CardHeader>
        <CardTitle className="text-base font-medium">Projects by Type</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={270}>
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
            <XAxis type="number" />
            <YAxis dataKey="type" type="category" scale="band" width={100} />
            <Tooltip />
            <Bar dataKey="count" fill="#0093b0" radius={[0, 4, 4, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
