"use client";
import { Card, Col, Row } from "antd";
import dynamic from "next/dynamic";

// Dynamically import Recharts to avoid SSR issues
const BarChart = dynamic(() => import("@/components/charts/SampleBarChart"), {
  ssr: false,
});

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Ticket Volume (Sample)">
            <BarChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Placeholder">More widgets soon...</Card>
        </Col>
      </Row>
    </>
  );
}
