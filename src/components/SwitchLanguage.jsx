import { useTranslation } from "react-i18next";
import SpainFlag from "../assets/SpainFlag.png";
import UKFlag from "../assets/UKFlag.png";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (e) => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-100 dark:text-gray-300">
        {i18n.language === "en" ? "English" : "Español"}
      </span>

      <button
        onClick={(e) => {
          toggleLanguage(e);
        }}
        className={`relative inline-flex h-6 w-12 items-center rounded-full focus:outline-none`}
        style={{
          backgroundImage: `url(${
            i18n.language === "en" ? UKFlag : SpainFlag
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            i18n.language === "en" ? "translate-x-1" : "translate-x-7"
          }`}
        />
      </button>
    </div>
  );
};

export default SwitchLanguage;
