import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { techStyles } from "../constants/project-tags/tagStyles";
import { FaGithub, FaLink } from "react-icons/fa";

const Customers = () => {
    const { t, i18n } = useTranslation();
    const customers = t("customers", { returnObjects: true });

    return (
        <section className="pb-16 border-b border-neutral-900 pt-12" id="customers">
            <AnimatePresence mode="wait">
                <motion.h1
                    className="text-white py-6 text-center text-4xl font-bold tracking-tight"
                    key={i18n.language}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -25 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.5 }}
                >
                    {t("main-title-customers")}
                </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <motion.p
                    className="text-center text-neutral-300 max-w-3xl mx-auto"
                    key={i18n.language}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -25 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.5 }}
                >
                    {t("sub-title-customers")}
                </motion.p>
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                {customers.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-neutral-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group flex flex-col"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        {project.image ? (
                            <div className="overflow-hidden">
                                <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={project.image}
                                        alt="Project Thumbnail"
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </a>
                            </div>
                        ) : (
                            <div className="w-full h-48 bg-neutral-800 flex items-center justify-center text-neutral-500 text-sm">
                                No image available
                            </div>
                        )}

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <h2 className="text-lg font-semibold text-white text-center mb-4">
                                {project.projectName}
                            </h2>

                            <AnimatePresence mode="wait">
                                <motion.p className="text-sm text-neutral-300 mb-4 line-clamp-4 text-center"
                                    key={i18n.language}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {project.description}
                                </motion.p>
                            </AnimatePresence>

                            <div className="flex flex-wrap gap-2 justify-center mt-auto">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${techStyles[tech]?.color || "bg-neutral-800 text-white"}`}
                                    >
                                        <span>{techStyles[tech]?.icon || "💻"}</span>
                                        <span>{tech}</span>
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-center gap-4 mt-6">
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        aria-label="GitHub Repository"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="text-white hover:text-gray-300 hover:scale-125 text-4xl transition-all duration-300" />
                                    </a>
                                )}
                                {project.deploy && (
                                    <a
                                        href={project.deploy}
                                        aria-label="Link to Website"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaLink className="text-white hover:text-gray-300 hover:scale-125 text-4xl transition-all duration-300"></FaLink>

                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Customers;
