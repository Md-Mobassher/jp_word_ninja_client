"use client";

import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import SidebarItems from "./SidebarItems";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SidebarItems />
      {/* Main Layout */}
      <Layout>
        {/* Header */}
        <Header
          style={{
            padding: "0 16px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid lightgray",
          }}
        >
          <Title level={4} style={{ margin: 0 }}>
            Welcome to JP Word Ninja
          </Title>
        </Header>

        {/* Content */}
        <Content style={{ padding: "24px", background: "#fff" }}>
          <div style={{ minHeight: "280px" }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
