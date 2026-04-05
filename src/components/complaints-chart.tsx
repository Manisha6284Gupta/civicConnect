// "use client"

// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
// import * as React from "react";

// import {
//   ChartContainer,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// import type { Complaint } from "@/lib/types";

// interface ComplaintsChartProps {
//     complaints: Complaint[];
// }


// const chartConfig = {
//   count: {
//     label: "Count",
//     color: "hsl(var(--primary))",
//   },
// }

// export function ComplaintsChart({ complaints }: ComplaintsChartProps) {
//     const chartData = React.useMemo(() => {
//         if (!complaints || complaints.length === 0) return [];

//         const categoryCounts = complaints.reduce((acc, complaint) => {
//             const category = complaint.category;
//             acc[category] = (acc[category] || 0) + 1;
//             return acc;
//         }, {} as Record<string, number>);

//         return Object.entries(categoryCounts).map(([category, count]) => ({
//             category,
//             count
//         })).sort((a,b) => b.count - a.count);

//     }, [complaints]);

//   if (chartData.length === 0) {
//     return <div className="flex items-center justify-center h-[350px] text-muted-foreground">No complaint data to display.</div>
//   }

//   return (
//     <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
//       <ResponsiveContainer width="100%" height={350}>
//         <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 60, left: 0 }}>
//           <XAxis
//             dataKey="category"
//             stroke="#888888"
//             fontSize={12}
//             tickLine={false}
//             axisLine={false}
//             interval={0}
//             angle={-45}
//             textAnchor="end"
//           />
//           <YAxis
//             stroke="#888888"
//             fontSize={12}
//             tickLine={false}
//             axisLine={false}
//             tickFormatter={(value) => `${value}`}
//             allowDecimals={false}
//           />
//           <Tooltip content={<ChartTooltipContent />} />
//           <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//   )
// }



"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import type { Complaint } from "@/lib/types";

interface ComplaintsChartProps {
  complaints: Complaint[];
}

// Default color palette
const COLORS = [
  "#3b82f6", // Blue
  "#10b981", // Green
  "#f59e0b", // Yellow
  "#ef4444", // Red
  "#8b5cf6", // Purple
  "#ec4899", // Pink
  "#f97316", // Orange
];

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--primary))",
  },
};

export function ComplaintsChart({ complaints }: ComplaintsChartProps) {
  // Prepare chart data
  const chartData = React.useMemo(() => {
    if (!complaints || complaints.length === 0) return [];

    const categoryCounts = complaints.reduce((acc, complaint) => {
      const category = complaint.category || "Other";
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryCounts)
      .map(([category, count], index) => ({
        category,
        count,
        color: COLORS[index % COLORS.length], // Assign a color
      }))
      .sort((a, b) => b.count - a.count);
  }, [complaints]);

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[350px] text-muted-foreground">
        No complaint data to display.
      </div>
    );
  }

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 60, left: 0 }}
        >
          <XAxis
            dataKey="category"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            interval={0}
            angle={-45}
            textAnchor="end"
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            allowDecimals={false}
          />
          <Tooltip
            content={(props) => (
              <ChartTooltipContent {...props} showColor />
            )}
          />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}