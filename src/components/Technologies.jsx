import { Fragment } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <section id="technologies">
        <AnimatePresence mode="wait">
          <motion.h1
            key={i18n.language}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -80 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl"
          >
            {t("technologies.main")}
          </motion.h1>
        </AnimatePresence>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-300" />
          </motion.div>

          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800p-4"
          >
            <IoLogoJavascript className="text-7xl text-yellow-300" />
          </motion.div>

          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800p-4"
          >
            <FaHtml5 className="text-7xl text-orange-500" />
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800p-4"
          >
            <FaCss3Alt className="text-7xl text-blue-600" />
          </motion.div>

          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800p-4"
          >
            <SiSequelize className="text-7xl text-blue-500" />
          </motion.div>

          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800p-4"
          >
            <SiExpress className="text-7xl text-gray-300" />
          </motion.div>

          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800p-4"
          >
            <DiMysql className="text-7xl text-sky-700" />
          </motion.div>
        </motion.div>

        {/* Familar With Technologies */}
        <div className="border-b border-neutral-800 pb-24">
          <AnimatePresence mode="wait">
            <motion.h1
              key={i18n.language}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -80 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.5 }}
              className="my-20 text-center text-4xl"
            >
              {t("technologies.familiar")}
            </motion.h1>
          </AnimatePresence>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >


            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800p-4"
            >
              <FaVuejs className="text-7xl text-green-500" />
            </motion.div>

            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800p-4"
            >
              <SiTypescript className="text-7xl text-blue-500" />
            </motion.div>

            <motion.div
              variants={iconVariants(6)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800p-4"
            >
              <SiMongodb className="text-7xl text-green-700" />
            </motion.div>


            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800p-4"
            >
              <RiTailwindCssFill className="text-7xl text-cyan-300" />
            </motion.div>

          </motion.div>
        </div>
      </section>
    </Fragment>
  );
};

export default Technologies;
