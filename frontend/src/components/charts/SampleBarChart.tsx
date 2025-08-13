"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", tickets: 120 },
  { name: "Tue", tickets: 200 },
  { name: "Wed", tickets: 150 },
  { name: "Thu", tickets: 180 },
  { name: "Fri", tickets: 90 },
];

export default function SampleBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="tickets" fill="#1677ff" />
      </BarChart>
    </ResponsiveContainer>
  );
}
