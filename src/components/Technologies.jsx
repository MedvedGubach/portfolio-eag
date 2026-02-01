import { Fragment } from "react";
import { FrontendIcons } from "../constants/tech-icons/FrontendIcons";
import { BackendIcons } from "../constants/tech-icons/BackendIcons";
import { ToolsIcons } from "../constants/tech-icons/ToolsIcons";

import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { LearningIcons } from "../constants/tech-icons/LearningIcons";
import { FamiliarTechs } from "../constants/tech-icons/FamiliarTechs";

const iconVariants = (duration) => ({ initial: { y: -10 }, animate: { y: [10, -10], transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse", }, } });

const Technologies = () => {
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <section id="technologies" className="border-b border-neutral-800 pb-12">
        <AnimatePresence mode="wait">
          <motion.h1 viewport={{ once: true }} key={i18n.language} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }} exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.5 }} className="my-16 text-center text-4xl text-white font-bold tracking-tight"
          >
            {t("technologies.main")}
          </motion.h1>
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <motion.h2 viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }} exit={{ opacity: 0, y: -80 }} transition={{ duration: 0.5 }}
              className="my-8 text-center text-4xl tex">
              Frontend
            </motion.h2>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {[...FrontendIcons].map(({ icon: Icon, color, variants, hoverStyles, tooltip, tooltipBg, tooltipText }, i) => (
                <motion.div key={i} variants={iconVariants(variants)}
                  initial="initial" animate="animate"
                  className={`rounded-2xl border-4 border-neutral-50 p-1 relative group transition-transform duration-200 ease-in-out ${hoverStyles}`}
                >
                  <Icon className={`text-7xl ${color}`} />
                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block ${tooltipBg} ${tooltipText} text-xs font-semibold px-5 py-1 rounded shadow-md z-10 whitespace-nowrap`}>
                    {tooltip}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h2 viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }} exit={{ opacity: 0, y: -80 }} transition={{ duration: 0.5 }}
              className="my-8 text-center text-4xl" >
              Backend
            </motion.h2>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {[...BackendIcons].map(({ icon: Icon, color, variants, hoverStyles, tooltip, tooltipBg, tooltipText }, i) => (
                <motion.div key={i} variants={iconVariants(variants)}
                  initial="initial" animate="animate"
                  className={`rounded-2xl border-4 border-neutral-50 p-1 relative group transition-transform duration-200 ease-in-out ${hoverStyles}`}

                >
                  <Icon className={`text-7xl ${color}`} />
                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block ${tooltipBg} ${tooltipText} text-xs font-semibold px-5 py-1 rounded shadow-md z-10 whitespace-nowrap`}>
                    {tooltip}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="">
            <AnimatePresence mode="wait">
              <motion.h2 viewport={{ once: true }} key={i18n.language} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }} exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5 }}
                className="my-8 text-center text-4xl" >
                {t("technologies.tools")}
              </motion.h2>
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {[...ToolsIcons].map(({ icon: Icon, color, variants, hoverStyles, tooltip, tooltipBg, tooltipText }, i) => (
                <motion.div key={i} variants={iconVariants(variants)}
                  initial="initial" animate="animate"
                  className={`rounded-2xl border-4 border-neutral-50 p-1 relative group transition-transform duration-200 ease-in-out ${hoverStyles}`}
                >
                  <Icon className={`text-7xl ${color}`} />
                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block ${tooltipBg} ${tooltipText} text-xs font-semibold px-5 py-1 rounded shadow-md z-10 whitespace-nowrap`}>
                    {tooltip}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <AnimatePresence mode="wait">
              <motion.h2 viewport={{ once: true }} key={i18n.language} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }} exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5 }}
                className="my-8 text-center text-4xl tex">
                {t("technologies.familiar")}
              </motion.h2>
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {[...FamiliarTechs].map(({ icon: Icon, color, variants, hoverStyles, tooltip, tooltipBg, tooltipText }, i) => (
                <motion.div key={i} variants={iconVariants(variants)}
                  initial="initial" animate="animate"
                  className={`rounded-2xl border-4 border-neutral-50 p-1 relative group transition-transform duration-200 ease-in-out ${hoverStyles}`}
                >
                  <Icon className={`text-7xl ${color}`} />
                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block ${tooltipBg} ${tooltipText} text-xs font-semibold px-5 py-1 rounded shadow-md z-10 whitespace-nowrap`}>
                    {tooltip}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.h2 viewport={{ once: true }} key={i18n.language} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }} exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5 }}
                className="my-8 text-center text-4xl tex">
                {t("technologies.learning")}
              </motion.h2>
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {[...LearningIcons].map(({ icon: Icon, color, variants, hoverStyles, tooltip, tooltipBg, tooltipText }, i) => (
                <motion.div key={i} variants={iconVariants(variants)}
                  initial="initial" animate="animate"
                  className={`rounded-2xl border-4 border-neutral-50 p-1 relative group transition-transform duration-200 ease-in-out ${hoverStyles}`}
                >
                  <Icon className={`text-7xl ${color}`} />
                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block ${tooltipBg} ${tooltipText} text-xs font-semibold px-5 py-1 rounded shadow-md z-10 whitespace-nowrap`}>
                    {tooltip}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </section>
    </Fragment>
  );
};

export default Technologies;
