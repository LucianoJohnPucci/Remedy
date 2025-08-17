"use client";

import { Card, Table, Tag, Badge } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Section2Columns from "@/components/dashboard/Section2Columns";

// Sample data for demand tickets
const demandTicketsData = [
  {
    key: '1',
    id: 'DT-001',
    title: 'E-commerce Platform Migration',
    priority: 'High',
    status: 'Open',
    requester: 'John Smith',
    dateCreated: '2024-01-15',
    skillsRequired: ['React', 'Node.js', 'AWS'],
  },
  {
    key: '2',
    id: 'DT-002',
    title: 'Mobile App Development',
    priority: 'Medium',
    status: 'In Review',
    requester: 'Sarah Johnson',
    dateCreated: '2024-01-14',
    skillsRequired: ['React Native', 'Firebase'],
  },
  {
    key: '3',
    id: 'DT-003',
    title: 'Database Optimization',
    priority: 'Low',
    status: 'Open',
    requester: 'Mike Davis',
    dateCreated: '2024-01-13',
    skillsRequired: ['PostgreSQL', 'Performance Tuning'],
  },
];


export default function WorkflowPage() {
  const demandTicketsColumns = [
    {
      title: 'Ticket ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => (
        <Tag color={priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'green'}>
          {priority}
        </Tag>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Badge 
          status={status === 'Open' ? 'processing' : 'default'} 
          text={status} 
        />
      ),
    },
    {
      title: 'Requester',
      dataIndex: 'requester',
      key: 'requester',
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
    },
    {
      title: 'Skills Required',
      dataIndex: 'skillsRequired',
      key: 'skillsRequired',
      render: (skills: string[]) => (
        <>
          {skills.map(skill => (
            <Tag key={skill} color="blue" className="mb-1">
              {skill}
            </Tag>
          ))}
        </>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Workflow Management</h1>
      </div>

      {/* Top Section - Demand Tickets */}
      <Card 
        title={
          <div className="flex items-center gap-2">
            <ExclamationCircleOutlined className="text-blue-500" />
            <span>Demand Tickets</span>
          </div>
        }
        className="shadow-sm"
      >
        <Table 
          columns={demandTicketsColumns}
          dataSource={demandTicketsData}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 800 }}
        />
      </Card>

      {/* Bottom Section - Workflow Status */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Workflow Status</h2>
        <Section2Columns />
      </div>
    </div>
  );
}
