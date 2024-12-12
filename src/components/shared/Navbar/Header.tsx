"use client";
import Link from "next/link";
import React from "react";
import Menu, { Item } from "./Menu";
import headerlogo from "@/assets/logo.png";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

import Image from "next/image";

interface HeaderProps {
  top?: number;
  header?: number;
  menu?: number;
}

const menus: Item[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Lessons",
    link: "/lessons",
  },
  {
    title: "Tutorials",
    link: "/tutorials",
  },
  { title: "Login", link: "/login" },
];

const Header: React.FC<HeaderProps> = ({ header, menu }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <React.Fragment>
      {/* menu */}
      {header === 1 && (
        <div className="shadow-sm border-b text-primary sticky top-0 z-10 bg-gray-100">
          <div className=" container px-4 mx-auto ">
            <div className="flex items-center  justify-between  lg:py-0 md:py-0 py-1 gap-1 flex-wrap">
              <Link href="/">
                <div className="lg:w-full md:w-[300px] w-[250px]">
                  <Image src={headerlogo} width={400} height={100} alt="logo" />
                </div>
              </Link>
              {/* Toggle button for mobile menu */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className=" hover:scale-110 transition-all duration-300" />
                ) : (
                  <MenuIcon className=" hover:scale-110 transition-all duration-300" />
                )}
              </button>

              {/* desktop menu */}
              <div className="hidden md:block ">
                {menu === 1 && <Menu items={menus} />}
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-5">
                <Menu items={menus} />
              </div>
            )}
            <div />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
