import { useState, useEffect } from "react";
import logo from "../assets/SlothBearIcon.webp";
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
    const handleScroll = () => { setScrolled(window.scrollY > 75); }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <nav className={`sticky top-0 z-50 mb-20 py-2 sm:flex-wrap flex sm:flex-row items-center justify-between transition-all duration-500 ease-in-ou
    ${scrolled ? "backdrop-blur bg-neutral-950/80 shadow-md" : "bg-transparent"}`}>
      <div className="flex flex-shrink-0 items-center">
        <img height={40} width={40} className="mx-2 w-10 rounded-xl" src={logo} alt="logo" />
      </div>

      <div className="hidden sm:flex  sm:space-x-5 lg:space-x-5 xl:space-x-10">
        {anchorLinks.map((anchor, index) => (
          <a key={index} href={`#${anchor.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(anchor.id)?.scrollIntoView({ behavior: "smooth" }); }}
            className="hover:cursor-pointer text-white hover:text-cyan-300 transition duration-300">
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
        } sm:hidden absolute top-20 left-0 w-full bg-neutral-800 p-4 space-y-4`}>
        {anchorLinks.map((anchor, index) => (
          <a key={index} href={`#${anchor.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(anchor.id)?.scrollIntoView({ behavior: "smooth" }); toggleMenu(); }}
            className="block hover:cursor-pointer text-white hover:text-cyan-300">
            {anchor.name}
          </a>
        ))}
      </div>
      <div className="m-8 flex items-center justify-center gap-x-2 gap-y-2 text-2xl xl:text-3xl sm:px-4">
        <SwitchLanguage />
        <a href="https://www.linkedin.com/in/emmanuel-arana-gutierrez-32013429b/" aria-label="Visit my LinkedIn Profile" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-sky-300 transition duration-300" /></a>
        <a href="https://github.com/MedvedGubach" aria-label="Visit my GitHub Profile" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white transition duration-300" /></a>
      </div>
    </nav >
  );
};

export default Navbar;
