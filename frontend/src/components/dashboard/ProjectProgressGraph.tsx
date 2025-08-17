"use client";
import { Card } from "antd";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const progressData = [
  { day: 'Mon', progress: 65 },
  { day: 'Tue', progress: 72 },
  { day: 'Wed', progress: 68 },
  { day: 'Thu', progress: 78 },
  { day: 'Fri', progress: 85 },
  { day: 'Sat', progress: 82 },
  { day: 'Sun', progress: 90 },
];

export default function ProjectProgressGraph() {
  return (
    <Card 
      title="Project Progress" 
      className="h-48"
      styles={{ body: { padding: '16px', height: 'calc(100% - 57px)' } }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="progress" 
            stroke="#2563eb" 
            strokeWidth={2}
            dot={{ fill: '#2563eb' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
