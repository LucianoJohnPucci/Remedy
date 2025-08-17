"use client";

interface StatFrameProps {
  title: string;
  value: string | number;
  className?: string;
  color: string;
  shape: string;
}

const StatFrame = ({ title, value, className = "", color, shape }: StatFrameProps) => (
  <div className={`relative ${className} overflow-hidden`}>
    <div className={`${shape} ${color} p-3 h-full w-full flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-200`}>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-xs font-medium text-center opacity-90 leading-tight">{title}</div>
    </div>
  </div>
);

export default function StatsFrames() {
  return (
    <div className="grid grid-cols-7 gap-3 h-80 p-2">
      {/* 4 Horizontal small frames (top left) */}
      <div className="col-span-4 grid grid-cols-2 gap-3">
        <StatFrame 
          title="Active Tickets" 
          value="247" 
          color="bg-gradient-to-br from-blue-500 to-blue-700" 
          shape="rounded-tl-2xl rounded-br-2xl border-2 border-blue-300"
        />
        <StatFrame 
          title="Resolved Today" 
          value="18" 
          color="bg-gradient-to-br from-green-500 to-green-700" 
          shape="rounded-tr-2xl rounded-bl-2xl border-2 border-green-300"
        />
        <StatFrame 
          title="Pending Review" 
          value="32" 
          color="bg-gradient-to-br from-orange-500 to-orange-700" 
          shape="rounded-bl-2xl rounded-tr-2xl border-2 border-orange-300"
        />
        <StatFrame 
          title="Overdue" 
          value="5" 
          color="bg-gradient-to-br from-red-500 to-red-700" 
          shape="rounded-br-2xl rounded-tl-2xl border-2 border-red-300"
        />
      </div>
      
      {/* 3 Vertical frames (right side) */}
      <div className="col-span-3 grid grid-rows-3 gap-3">
        <StatFrame 
          title="Client Satisfaction" 
          value="94%" 
          color="bg-gradient-to-br from-purple-500 to-purple-700" 
          shape="rounded-t-2xl rounded-bl-2xl border-2 border-purple-300"
        />
        <StatFrame 
          title="Avg Response Time" 
          value="2.3h" 
          color="bg-gradient-to-br from-indigo-500 to-indigo-700" 
          shape="rounded-l-2xl rounded-tr-2xl border-2 border-indigo-300"
        />
        <StatFrame 
          title="Team Efficiency" 
          value="87%" 
          color="bg-gradient-to-br from-teal-500 to-teal-700" 
          shape="rounded-b-2xl rounded-tr-2xl border-2 border-teal-300"
        />
      </div>
    </div>
  );
}
