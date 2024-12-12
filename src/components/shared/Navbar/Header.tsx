"use client";
import Link from "next/link";
import React from "react";
import Menu, { Item } from "./Menu";
import headerlogo from "@/assets/logo.png";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

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

  { title: "Contact", link: "/contact" },
];

const Header: React.FC<HeaderProps> = ({ header, menu }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <React.Fragment>
      {/* header top */}
      <div className=" z-10">
        <div className="flex justify-between items-center gap-5 container px-4 mx-auto py-1 ">
          <Link href="/">
            <div className="lg:w-full md:w-[300px] w-[200px]">
              <Image src={headerlogo} width={400} height={100} alt="logo" />
            </div>
          </Link>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-end items-center">
              <div className=" rounded-full flex justify-center items-center p-[6px] w-8 h-8 bg-accent border border-primary hover:bg-primary text-primary hover:text-accent transition-all duration-300">
                <FaFacebookF />
              </div>
              <div className=" rounded-full flex justify-center items-center p-[6px] w-8 h-8 bg-accent border border-primary hover:bg-primary text-primary hover:text-accent transition-all duration-300">
                <FaYoutube />
              </div>
              <div className=" rounded-full flex justify-center items-center p-[6px] w-8 h-8 bg-accent border border-primary hover:bg-primary text-primary hover:text-accent transition-all duration-300">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      {header === 1 && (
        <div className="bg-primary text-white sticky top-0 z-10">
          <div className=" container px-4 mx-auto ">
            <div className="flex items-center  lg:justify-start md:justify-start justify-end lg:py-0 md:py-0 py-1 gap-1 flex-wrap">
              {/* Toggle button for mobile menu */}
              <button
                className="md:hidden text-accent"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="text-accent hover:scale-110 transition-all duration-300" />
                ) : (
                  <MenuIcon className="text-accent hover:scale-110 transition-all duration-300" />
                )}
              </button>

              {/* desktop menu */}
              <div className="hidden md:block ">
                {menu === 1 && <Menu items={menus} />}
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-5 bg-secondary">
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
