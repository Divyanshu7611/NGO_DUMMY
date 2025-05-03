"use client";

import React from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from "recharts";

// Simulated donation data for the last 6 months
const data = [
  { month: "Jan", Online: 12500, Offline: 8200, Total: 20700 },
  { month: "Feb", Online: 14800, Offline: 7800, Total: 22600 },
  { month: "Mar", Online: 16200, Offline: 8500, Total: 24700 },
  { month: "Apr", Online: 18900, Offline: 7900, Total: 26800 },
  { month: "May", Online: 17500, Offline: 9100, Total: 26600 },
  { month: "Jun", Online: 19600, Offline: 8800, Total: 28400 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-3 rounded-md shadow-sm text-sm">
        <p className="font-semibold">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name}: ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default function DonationChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
          <YAxis 
            stroke="hsl(var(--muted-foreground))" 
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Online"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Offline"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Total"
            stroke="hsl(var(--chart-3))"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}