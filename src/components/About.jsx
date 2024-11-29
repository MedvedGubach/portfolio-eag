import aboutImg from "../assets/about.jpeg";
import { motion, AnimatePresence } from "motion/react"
import { useTranslation } from "react-i18next";

const About = () => {

  const { t, i18n } = useTranslation();

  return (

    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        {t("about.title")}
      </h1>

      <div className="flex flex-wrap">

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={i18n.language}

            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">{t("about.text")}</p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default About;
