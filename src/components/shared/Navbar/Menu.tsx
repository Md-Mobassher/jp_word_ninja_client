"use client";
import { useState } from "react";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";

type SubItem = {
  title: string;
  link: string;
};

export type Item = {
  title: string;
  link: string;
  option?: "sub" | undefined;
  subItems?: SubItem[] | undefined;
};

type MenuProps = {
  items: Item[];
};

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const userInfo = useUserInfo();
  const router = useRouter();


  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <div className="z-20 block sticky top-10 w-full">
      <div className="flex lg:flex-row md:flex-row  flex-col justify-start  lg:items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={` ${item.option === "sub" ? "relative" : ""}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <Link
              href={item.link}
              className=" lg:py-[10px] md:py-2 py-2  lg:px-4 md:px-3 px-6 w-full   hover:bg-primary hover:text-white font-semibold   hover:transition-all hover:duration-300 text-lg 
              inline-block rounded-full"
            >
              <div className="flex gap-[1px] lg:justify-center md:justify-center justify-start items-center">
                {item.title}
                {item.option === "sub" && (
                  <MdArrowDropDown className="size-6" />
                )}
              </div>
            </Link>
            {hoverIndex === index && item.option === "sub" && item.subItems && (
              <>
                <div className="absolute lg:left-0 md:left-0 left-20 shadow-lg lg:w-64 md:w-64 sm:w-5/6 xs:2/3 border border-primary border-t-accent z-50">
                  <div className="flex flex-col bg-primary">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.link}
                        className="py-1 px-5 block hover:bg-accent hover:text-primary  font-semibold   hover:transition-all hover:duration-300 text-lg 
              "
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        {userInfo?.userId ? (
          <h5
            onClick={() => handleLogOut()}
            className=" lg:py-[10px] md:py-2 py-2  lg:px-4 md:px-3 px-6 w-full   hover:bg-primary hover:text-white font-semibold   hover:transition-all hover:duration-300 text-lg 
              inline-block rounded-full"
          >
            Logout
          </h5>
        ) : (
          <Link
            href={"/login"}
            className=" lg:py-[10px] md:py-2 py-2  lg:px-4 md:px-3 px-6 w-full   hover:bg-primary hover:text-white font-semibold   hover:transition-all hover:duration-300 text-lg 
              inline-block rounded-full"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Menu;
