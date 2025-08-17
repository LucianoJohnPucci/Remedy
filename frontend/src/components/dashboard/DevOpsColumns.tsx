"use client";

import { Card, Tag } from "antd";
import { ClockCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

// Sample data for DevOps columns
const activeDevOps = [
  { id: 'DEV-001', name: 'Alex Rodriguez', project: 'E-commerce Migration', status: 'Active', progress: 75 },
  { id: 'DEV-002', name: 'Emma Wilson', project: 'Mobile App Dev', status: 'Active', progress: 45 },
  { id: 'DEV-003', name: 'James Chen', project: 'API Integration', status: 'Active', progress: 90 },
];

const validatedDevOps = [
  { id: 'DEV-004', name: 'Lisa Thompson', skills: 'Full Stack, AWS', rating: 4.8, availability: 'Available' },
  { id: 'DEV-005', name: 'David Kumar', skills: 'React, Node.js', rating: 4.6, availability: 'Available' },
  { id: 'DEV-006', name: 'Sophie Martin', skills: 'Mobile, Flutter', rating: 4.9, availability: 'Available' },
];

const prospectDevOps = [
  { id: 'DEV-007', name: 'Ryan Foster', skills: 'Python, Django', status: 'Pending Review', submitted: '2024-01-16' },
  { id: 'DEV-008', name: 'Maria Garcia', skills: 'Vue.js, PHP', status: 'Interview Scheduled', submitted: '2024-01-15' },
  { id: 'DEV-009', name: 'Tom Anderson', skills: 'DevOps, Docker', status: 'Technical Test', submitted: '2024-01-14' },
];

export default function DevOpsColumns() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Active DevOps */}
      <Card 
        title={
          <div className="flex items-center gap-2">
            <CheckCircleOutlined className="text-green-500" />
            <span>Active DevOps</span>
          </div>
        }
        className="shadow-sm"
      >
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {activeDevOps.map((dev) => (
            <div key={dev.id} className="p-4 border rounded-lg bg-green-50 border-green-200">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800">{dev.name}</h4>
                <Tag color="green">{dev.status}</Tag>
              </div>
              <p className="text-sm text-gray-600 mb-2">{dev.project}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Progress:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${dev.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600">{dev.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Validated DevOps for Hire */}
      <Card 
        title={
          <div className="flex items-center gap-2">
            <CheckCircleOutlined className="text-blue-500" />
            <span>Validated DevOps for Hire</span>
          </div>
        }
        className="shadow-sm"
      >
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {validatedDevOps.map((dev) => (
            <div key={dev.id} className="p-4 border rounded-lg bg-blue-50 border-blue-200">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800">{dev.name}</h4>
                <Tag color="blue">{dev.availability}</Tag>
              </div>
              <p className="text-sm text-gray-600 mb-2">{dev.skills}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Rating:</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">{dev.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Prospect DevOps waiting Validation */}
      <Card 
        title={
          <div className="flex items-center gap-2">
            <ClockCircleOutlined className="text-orange-500" />
            <span>Prospect DevOps waiting Validation</span>
          </div>
        }
        className="shadow-sm"
      >
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {prospectDevOps.map((dev) => (
            <div key={dev.id} className="p-4 border rounded-lg bg-orange-50 border-orange-200">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800">{dev.name}</h4>
                <Tag color="orange">{dev.status}</Tag>
              </div>
              <p className="text-sm text-gray-600 mb-2">{dev.skills}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Submitted:</span>
                <span className="text-xs text-gray-600">{dev.submitted}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
