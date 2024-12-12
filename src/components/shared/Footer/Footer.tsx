import { Home, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import headerlogo from "@/assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import bkash from "@/assets/bkash.png";
import nagad from "@/assets/nagad.png";

const Footer = () => {
  return (
    <>
      <div className="border-t bg-gray-200">
        <div className="container px-4 mx-auto pt-10 ">
          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-20 md:gap-14 gap-5 justify-start items-start  ">
            {/* logo */}
            <div className="w-full">
              <Link href="/">
                <div className="lg:w-full ">
                  <Image src={headerlogo} width={400} height={100} alt="logo" />
                </div>
              </Link>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 mt-5 justify-center items-center">
                  <div className=" rounded-full flex justify-center items-center p-[6px] w-8 h-8 bg-accent border border-primary hover:border-accent hover:bg-primary text-primary hover:text-accent transition-all duration-300">
                    <FaFacebookF />
                  </div>
                  <div className=" rounded-full flex justify-center items-center p-[6px] w-8 h-8 bg-accent border border-primary hover:border-accent hover:bg-primary text-primary hover:text-accent transition-all duration-300">
                    <FaYoutube />
                  </div>
                  <div className=" rounded-full flex justify-center items-center p-[6px] w-8 h-8 bg-accent border border-primary hover:border-accent hover:bg-primary text-primary hover:text-accent transition-all duration-300">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-semibold  pb-5 text-center">
                Payment
              </h2>

              <div className="flex gap-3 justify-center items-center">
                <Image src={bkash} alt="bkash" width={150} height={80} />
                <Image src={nagad} alt="bkash" width={150} height={80} />
              </div>
            </div>

            {/* contact */}
            <div className="w-full">
              <h2 className="text-2xl font-semibold  pb-5 text-center">
                Contact
              </h2>
              <ul className=" flex flex-col gap-4">
                <li className="flex justify-start items-start gap-3 hover:gap-5 transition-all duration-300 hover:font-semibold hover:text-accent ">
                  <Home className="size-6" /> Rajathat, Kurigram – 5600,
                  Bangladesh
                </li>
                <li className="flex justify-start items-start gap-3 hover:gap-5 transition-all duration-300 hover:font-semibold hover:text-accent ">
                  <Phone className="size-6 " /> +88 01706060647
                </li>
                <li className="flex justify-start items-start gap-3 hover:gap-5 transition-all duration-300 hover:font-semibold hover:text-accent ">
                  <Mail className="size-6 " /> mdmobassherhossain1@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="bg-secondary">
          <div className="container px-4 mx-auto">
            <div className=" text-white py-2 mt-5   flex lg:justify-between md:justify-between justify-center flex-wrap">
              <p className=" ">
                Copyright © {new Date().getFullYear()} All rights reserved
              </p>
              <p>
                Design and Develop by{" "}
                <a
                  href="https://mobassher.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-black  transition-all duration-500 font-semibold uppercase"
                >
                  Md Mobassher Hossain
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
