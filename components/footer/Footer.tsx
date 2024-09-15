import { GiSpartanHelmet } from "react-icons/gi";
import ByLine from "./ByLine";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" overflow-hidden min-h-[10dvh] max-h-[10dvh] flex tracking-wide justify-center align-middle gap-5 w-[85vw] mx-auto items-center ">
      <span className="text-[0.75rem]">
        © {currentYear} Cinema
      </span>
        <ByLine>
          {/* <GiSpartanHelmet /> */}
          <Link href="https://chepkiyeng.netlify.app">Chepkiyeng</Link>
        </ByLine>
    
    </footer>
  );
};

export default Footer;
