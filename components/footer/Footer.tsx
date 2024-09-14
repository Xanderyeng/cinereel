import { GiSpartanHelmet } from "react-icons/gi";
import ByLine from "./ByLine";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" overflow-hidden min-h-[10dvh] max-h-[10dvh] flex flex-grow justify-center gap-5 w-[85vw] mx-auto items-center outline outline-2 outline-red-500">
      <div>
        © {currentYear} Cinema
      </div>
        <ByLine>
          <GiSpartanHelmet />
        </ByLine>
    
    </footer>
  );
};

export default Footer;
