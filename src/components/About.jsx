import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import aboutImg1 from "../assets/about1.webp";
import aboutImg2 from "../assets/about2.webp";

const About = () => {
  const { t, i18n } = useTranslation();
  const images = [aboutImg1, aboutImg2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <AnimatePresence mode="wait">
        <motion.h1
          key={i18n.language}
          viewport={{ once: true }}
          className="my-20 text-center text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("about.title")}
        </motion.h1>
      </AnimatePresence>

      <div className="flex flex-wrap">
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.img
                viewport={{ once: true }}
                key={currentIndex}
                src={images[currentIndex]}
                width={544}
                height={245}
                alt="about"
                className="rounded-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            viewport={{ once: true }}
            key={i18n.language}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
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
