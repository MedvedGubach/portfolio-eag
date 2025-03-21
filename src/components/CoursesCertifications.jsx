import { Fragment, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const CoursesCertifications = () => {
    const { t, i18n } = useTranslation();
    const coursescertifications = t("courses-certifications", { returnObjects: true });
    const [showPdf, setShowPdf] = useState(false);

    return (
        <Fragment>
            <div className="border-b border-neutral-900 pb-4">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={i18n.language}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5 }}
                        className="my-20 text-center text-4xl">{t("main-title-courses-certifications")}
                    </motion.h1>
                </AnimatePresence>

                <div className='grid grid-cols-4 gap-4 text-center'>
                    {coursescertifications.map((course, index) => (
                        <motion.div
                            key={index}
                            viewport={{ once: true }}
                            onViewportEnter={() => setShowPdf(true)}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-xl lg:w-3/4">
                            {showPdf && (<embed src={course.image} type="" />)}
                            {/* <h6 className="mb-2 font-semibold">{course.title}</h6>
                            <p className="mb-4 text-neutral-400">{course.description}</p> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default CoursesCertifications