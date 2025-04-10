import { useState } from "react";
import logo from "../assets/SlothBearIcon.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SwitchLanguage from "./SwitchLanguage";
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll';

const Navbar = () => {
  const { t } = useTranslation();
  const anchorLinks = t("navbar-anchor-links", { returnObjects: true });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 mb-20 flex items-center justify-between py-6 backdrop-blur bg-neutral-950/80">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 rounded-2xl" src={logo} alt="logo" />
      </div>

      <div className="hidden sm:flex sm:space-x-12">
        {anchorLinks.map((anchor, index) => (
          <Link key={index} className="hover:cursor-pointer text-white hover:text-cyan-300" to={anchor.id} smooth={true} duration={500} >
            {anchor.name}
          </Link>
        ))}
      </div>


      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute top-16 left-0 w-full bg-neutral-800 p-4 space-y-4`}>
        {anchorLinks.map((anchor, index) => (
          <Link
            className="block text-center text-white hover:text-cyan-300"
            key={index}
            onClick={() => setIsMenuOpen(false)}
            to={anchor.id} smooth={true} duration={500}
          >
            {anchor.name}
          </Link>
        ))}
      </div>

      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <SwitchLanguage />
        <a href="https://www.linkedin.com/in/emmanuel-arana-gutierrez-32013429b/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-sky-300 transition duration-300" /></a>
        <a href="https://github.com/MedvedGubach" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white transition duration-300" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
