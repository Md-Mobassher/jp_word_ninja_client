"use client";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Title from "antd/es/typography/Title";
import { LogOut, UserIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";

const sidebaritems = [
  {
    key: "1",
    icon: <MdDashboard />,
    label: "Dashboard",
    url: "/dashboard",
  },
  {
    key: "2",
    icon: <UserIcon />,
    label: "Users",
    url: "/dashboard/user",
  },
  {
    key: "3",
    icon: <UserIcon />,
    label: "Lessons",
    url: "/dashboard/lessons",
  },
  {
    key: "4",
    icon: <UserIcon />,
    label: "Tutorials",
    url: "/dashboard/tutorials",
  },
  {
    key: "5",
    icon: <LogOut />,
    label: "Logout",
    url: "/logout",
  },
];

const SidebarItems = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" style={{ textAlign: "center", padding: "16px" }}>
          <Title level={4} style={{ color: "white", margin: 0 }}>
            {!collapsed ? "My Dashboard" : "MD"}
          </Title>
        </div>
        <Menu theme="dark" mode="inline" style={{ height: "100%" }}>
          {sidebaritems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link href={item.url}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
};

export default SidebarItems;
