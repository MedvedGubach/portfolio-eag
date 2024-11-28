//import logo from "../assets/SlothBearIcon.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import SwitchLanguage from "./SwitchLanguage";

const Navbar = () => {

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>

      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <SwitchLanguage />
        <a href="https://www.linkedin.com/in/emmanuel-arana-gutierrez-32013429b/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-sky-300 transition duration-300" /></a>
        <a href="https://github.com/MedvedGubach" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-black transition duration-300" /></a>
        {/* <FaSquareXTwitter />
        <FaInstagram /> */}
      </div>
    </nav>
  );
};

export default Navbar;
