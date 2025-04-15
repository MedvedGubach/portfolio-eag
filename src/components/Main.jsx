import profilePic from "../assets/EAGProfileBW1.webp";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-4 mb lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              viewport={{ once: true }}
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-5 font-thin tracking-tight lg:mt-10 text-4xl  sm:text-5xl md:text-6xl lg:text-6xl"
            >
              Emmanuel Arana Gutierrez
            </motion.h1>

            <AnimatePresence mode="wait">
              <motion.span
                key={i18n.language}
                viewport={{ once: true }}
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-300 via-cyan-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                {t("hero.role")}
              </motion.span>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={i18n.language}
                viewport={{ once: true }}
                variants={container(0.75)}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.75 }}
                className="my-2 max-w-xl py-6 font-light tracking-tighter"
              >
                {t("hero.content")}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center mt-1"></div>
          <motion.img
            width={544}
            height={408}
            viewport={{ once: true }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Emmanuel Arana"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
