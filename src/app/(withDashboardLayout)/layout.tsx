"use client";

import DashboardLayout from "./dashboard/components/DashboardLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isLoggedIn } from "@/services/auth.services";

const DashboardRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router]);

  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardRootLayout;
