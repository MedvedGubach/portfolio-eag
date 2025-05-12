import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLink } from "react-icons/fa";
import { tagStyles, techStyles, tagMap } from "../constants/project-tags/tagStyles";

const Projects = () => {

    const { t, i18n } = useTranslation();
    const projects = t("projects", { returnObjects: true });

    return (
        <Fragment>

            <section id="projects" className="border-b border-neutral-900 pb-4">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={i18n.language}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5 }}
                        className="my-20 text-center text-4xl">{t("main-title-projects")}
                    </motion.h1>
                </AnimatePresence>
                <div>

                    {projects.map((project, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="w-full lg:w-1/4">
                                <img className="mb-6 rounded" height={150} width={150} src={project.image} alt={project.title} />
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
                                    <div className="space-x-6">
                                        {project.repo === '' ? null :
                                            <a href={project.repo} className="inline-block" aria-label="Visit my GitHub Project" target="_blank" rel="noopener noreferrer">
                                                <FaGithub className="hover:text-white transition duration-300 text-4xl pb-1" />
                                            </a>
                                        }
                                        {
                                            project.deploy === '' ? null :
                                                <a href={project.deploy} className="inline-block" aria-label="Checkout my Project" target="_blank" rel="noopener noreferrer" >
                                                    <FaLink className="hover:text-white transition duration-300 text-4xl pb-1"></FaLink>
                                                </a>
                                        }
                                    </div>
                                    <h1 className="mb-4 font-semibold">
                                        {project.title} - {" "}
                                        {project.tag && (
                                            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${tagStyles[project.tag]?.color || "bg-neutral-700 text-white"}`}>
                                                {t(`tags.${tagMap[project.tag]}`)} {tagStyles[tagMap[project.tag]]?.icon || "📁"}
                                            </span>)}
                                    </h1>
                                    <p className="mb-4 text-neutral-400">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
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
    )

}

export default Projects