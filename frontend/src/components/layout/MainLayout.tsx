"use client";
import { Layout, Menu } from "antd";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
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
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="light"
      >
        <div className="my-4 text-center font-bold text-lg">Remedy</div>
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
