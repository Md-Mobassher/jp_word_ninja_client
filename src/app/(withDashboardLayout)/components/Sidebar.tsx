import React from "react";
import { Button, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { MenuItems } from "./MenuItems";

type SidebarProps = {
  collapsed: boolean;
  location?: { pathname: string };
};
export default function SidebarItems({ collapsed }: SidebarProps) {
  const handleLogout = () => {
    // cookie.remove("access-token");
    // Cookie.remove("refresh-token");
    // dispatch(logout());
    window.location.href = "https://localhost:3000/login";
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        background: "#ffffff",
        padding: "5px",
        borderRight: "1px solid lightgray",
        boxShadow: "none",
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={MenuItems}
        style={{
          borderTop: 0,
          boxShadow: "none",
          border: "none",
          margin: 0,
          padding: 0,
        }}
      />
      <div className="p-1">
        <Button
          onClick={handleLogout}
          type="primary"
          danger
          icon={<LogoutOutlined />}
          block
          className="py-3"
        >
          {!collapsed && "Logout"}
        </Button>
      </div>
    </Sider>
  );
}
