"use client";
import { Card } from "antd";

interface ColumnData {
  title: string;
  items: string[];
}

const columnData: ColumnData[] = [
  {
    title: "Open",
    items: ["Ticket #1234", "Ticket #1235", "Ticket #1236", "Ticket #1237", "Ticket #1238"]
  },
  {
    title: "In-Progress",
    items: ["Ticket #1220", "Ticket #1221", "Ticket #1222", "Ticket #1223"]
  },
  {
    title: "Hurdles",
    items: ["Ticket #1240", "Ticket #1241", "Ticket #1242"]
  },
  {
    title: "Closed/Completed",
    items: ["Ticket #1200", "Ticket #1201", "Ticket #1202", "Ticket #1203", "Ticket #1204", "Ticket #1205"]
  }
];

export default function Section2Columns() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {columnData.map((column, index) => (
        <Card 
          key={index}
          title={column.title}
          className="h-64"
          styles={{ body: { padding: '16px', height: 'calc(100% - 57px)', overflow: 'auto' } }}
        >
          <div className="space-y-2">
            {column.items.map((item, itemIndex) => (
              <div 
                key={itemIndex}
                className="p-2 bg-gray-50 rounded text-sm hover:bg-gray-100 cursor-pointer transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
