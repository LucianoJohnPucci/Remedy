"use client";
import { Card, Col, Row, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const mockStats = [
  { title: "Total Tickets", value: 875, diff: 8 },
  { title: "Open", value: 320, diff: -5 },
  { title: "In Progress", value: 215, diff: 12 },
  { title: "Closed", value: 340, diff: 3 },
];

interface Props {
  className?: string;
}

export default function TicketStatsCards({ className }: Props) {
  return (
    <Row gutter={[16, 16]} className={className}>
      {mockStats.map((s) => (
        <Col key={s.title} xs={12} md={6}>
          <Card>
            <Statistic
              title={s.title}
              value={s.value}
              suffix={
                <span className={s.diff >= 0 ? "text-green-600" : "text-red-600"}>
                  {s.diff}% {s.diff >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                </span>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
