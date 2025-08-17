"use client";
import { Card, Col, Row } from "antd";
import TicketStatsCards from "@/components/dashboard/TicketStatsCards";
import SentimentPieChart from "@/components/dashboard/SentimentPieChart";
import StatsFrames from "@/components/dashboard/StatsFrames";
import AIChatFrame from "@/components/dashboard/AIChatFrame";
import Section2Columns from "@/components/dashboard/Section2Columns";
import dynamic from "next/dynamic";

// Dynamically import Recharts to avoid SSR issues
const BarChart = dynamic(() => import("@/components/charts/SampleBarChart"), {
  ssr: false,
});

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <TicketStatsCards className="mb-4" />

      {/* Section 1: Stats Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
        <div className="grid grid-cols-5 gap-4 mb-4">
          {/* Stats frames (2 columns = 40%) */}
          <div className="col-span-2">
            <StatsFrames />
          </div>
          {/* AI Chat frame (3 columns = 60%) */}
          <div className="col-span-3">
            <AIChatFrame />
          </div>
        </div>
        
        {/* Charts moved below AI Chat */}
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card title="Ticket Volume (Sample)">
              <BarChart />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Ticket Sentiment Breakdown">
              <SentimentPieChart />
            </Card>
          </Col>
        </Row>
      </div>

      {/* Section 2: Workflow Columns */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Workflow Status</h2>
        <Section2Columns />
      </div>
    </>
  );
}
