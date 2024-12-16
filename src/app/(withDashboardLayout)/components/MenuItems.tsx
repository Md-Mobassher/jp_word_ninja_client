import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";

export const MenuItems = [
  {
    key: "/",
    icon: <MdOutlineDashboard size={20} />,
    label: <Link href="/dashboard">Dashboard</Link>,
  },
  {
    key: "/allusers",
    icon: <FaUser size={20} />,
    label: <Link href="/dashboard/allusers">All Users</Link>,
  },

  {
    key: "/settings",
    icon: <IoMdSettings size={20} />,
    label: <Link href="/dashboard/settings">Settings</Link>,
  },
];
