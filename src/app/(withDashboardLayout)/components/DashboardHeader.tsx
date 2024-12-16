import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import headerlogo from "@/assets/logo.png";
import { Header } from "antd/es/layout/layout";

type DashboardHeaderProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
export default function DashboardHeader({
  collapsed,
  setCollapsed,
}: DashboardHeaderProps) {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: "0px",
        padding: "0px",
        borderBottom: "1px solid lightgray",
      }}
    >
      <nav className="flex items-center justify-between w-full py-3 px-5 ">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className=" w-[170px]">
              <Image src={headerlogo} width={170} height={100} alt="logo" />
            </div>
          </Link>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <BellOutlined className="text-xl" />
          <UserOutlined className="text-xl" />
        </div>
      </nav>
    </Header>
  );
}
