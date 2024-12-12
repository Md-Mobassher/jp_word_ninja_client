import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Navbar/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JP Word Ninja",
  description: "Developed by Md Mobassher Hossain",
};

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header header={1} menu={1} top={1} />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
