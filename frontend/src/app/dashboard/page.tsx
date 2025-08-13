"use client";
import { Card, Col, Row } from "antd";
import TicketStatsCards from "@/components/dashboard/TicketStatsCards";
import SentimentPieChart from "@/components/dashboard/SentimentPieChart";
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
    </>
  );
}
