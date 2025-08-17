"use client";
import { Layout, Menu, Button } from "antd";
import { HomeOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import { ReactNode, useState } from "react";

const { Header, Sider, Content } = Layout;

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible={false}
        collapsed={collapsed}
        theme="light"
        width={250}
        collapsedWidth={80}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className={`font-bold text-lg transition-opacity ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            Remedy
          </div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center"
          />
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          items={[
            {
              key: "dashboard",
              icon: <HomeOutlined />,
              label: <Link href="/dashboard">Dashboard</Link>,
            },
            {
              key: "workflow",
              icon: <span style={{ fontSize: '14px' }}>➡️</span>,
              label: <Link href="/workflow">Workflow</Link>,
            },
            {
              key: "settings",
              icon: <SettingOutlined />,
              label: <Link href="/settings">Settings</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="bg-white shadow px-4">{/* add header content later */}</Header>
        <Content className="p-6 bg-gray-50 min-h-0">{children}</Content>
      </Layout>
    </Layout>
  );
}
