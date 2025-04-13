import { useState, useEffect } from "react";
import logo from "../assets/SlothBearIcon.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SwitchLanguage from "./SwitchLanguage";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const anchorLinks = t("navbar-anchor-links", { returnObjects: true });
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 100); }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <nav className={`sticky top-0 z-50 mb-20 py-6 flex items-center justify-between transition-all duration-500 ease-in-out
    ${scrolled ? "backdrop-blur bg-neutral-950/80 shadow-md" : "bg-transparent"}`}>

      <div className="flex flex-shrink-0 items-center">
        <img height={40} width={40} className="mx-2 w-10 rounded-xl" src={logo} alt="logo" />
      </div>

      <div className="hidden sm:flex sm:space-x-12">
        {anchorLinks.map((anchor, index) => (
          <a key={index} href={`#${anchor.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(anchor.id)?.scrollIntoView({ behavior: "smooth" }); }}
            className="hover:cursor-pointer text-white hover:text-cyan-300">
            {anchor.name}
          </a>
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
          <a key={index} href={`#${anchor.id}`} onClick={(e) => { console.log('click en anchor link mobile'); e.preventDefault(); document.getElementById(anchor.id)?.scrollIntoView({ behavior: "smooth" }); }}
            className="hover:cursor-pointer text-white hover:text-cyan-300">
            {anchor.name}
          </a>
        ))}
      </div>

      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <SwitchLanguage />
        <a href="https://www.linkedin.com/in/emmanuel-arana-gutierrez-32013429b/" aria-label="Visit my LinkedIn Profile" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-sky-300 transition duration-300" /></a>
        <a href="https://github.com/MedvedGubach" aria-label="Visit my GitHub Profile" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white transition duration-300" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
