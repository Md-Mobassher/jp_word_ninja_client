import Link from "next/link";

type LinkButtonProps = {
  link?: string;
  btnTitle?: string;
};
const LinkButton = ({ link, btnTitle }: LinkButtonProps) => {
  return (
    <Link href={link || "#"}>
      <button className="lg:mt-10 md:mt-7 mt-5 px-7 py-3 bg-gray-300 rounded-full  uppercase font-semibold text-gray-800 hover:bg-primary hover:text-white transition-all duration-300 hover:animate-pulse ">
        {btnTitle || "Learn More"}
      </button>
    </Link>
  );
};

export default LinkButton;
