import { Metadata } from "next";
import DashboardLayout from "./dashboard/components/DashboardLayout";

export const metadata: Metadata = {
  title: "JP Word Ninja",
  description: "Developed by Md Mobassher Hossain",
};

const DashboardRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardRootLayout;
