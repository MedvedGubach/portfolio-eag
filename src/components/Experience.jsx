import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { techStyles } from "../constants/project-tags/tagStyles";
const Experience = () => {
  const { t, i18n } = useTranslation();
  const experiences = t("experience", { returnObjects: true });

  return (
    <Fragment>
      <section id="experience" className="border-b  border-neutral-900 pb-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={i18n.language}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold tracking-tight my-20 text-center text-4xl"
          >
            {t("main-title-experience")}
          </motion.h1>
        </AnimatePresence>

        <div>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-300">{experience.year}</p>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={i18n.language}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h1 className="mb-2 font-extrabold text-white">
                    {experience.role} -
                    <span className="text-sm text-purple-100">
                      {experience.company}
                    </span>
                  </h1>

                  {experience.description.map((desc) => (
                    <p key={desc} className="mb-4 text-neutral-300">
                      -{desc}
                    </p>
                  ))}


                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span key={tech}
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${techStyles[tech]?.color || "bg-neutral-800 text-white"}`}
                      >
                        <span>{techStyles[tech]?.icon || "💻"}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
