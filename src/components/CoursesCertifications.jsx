import { Fragment, useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const CoursesCertifications = () => {
    const { t, i18n } = useTranslation();
    const coursescertifications = t("courses-certifications", { returnObjects: true });
    const [isMobile, setIsMobile] = useState(false);
    const [visibleItems, setVisibleItems] = useState({});
    const handleEnterViewport = (index) => { setVisibleItems((prev) => ({ ...prev, [index]: true })) };

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isMobileUserAgent =
            /android/i.test(userAgent) ||
            /iPad|iPhone|iPod/.test(userAgent) ||
            /Tablet|Touch/i.test(userAgent) ||
            (navigator.maxTouchPoints && navigator.maxTouchPoints > 1);

        setIsMobile(isMobileUserAgent);

        const observers = [];

        coursescertifications.forEach((_, index) => {
            const el = document.getElementById(`pdf-course-${index}`);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => ({
                            ...prev,
                            [index]: true,
                        }));
                        observer.unobserve(el);
                    }
                },
                {
                    root: null,
                    rootMargin: '200px',
                    threshold: 0.1,
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [coursescertifications]);


    return (
        <Fragment>
            <section id='courses' className="border-b border-neutral-900 pb-4">
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

                <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 sm:gap-1 lg:gap-4 xl:gap-4 text-center'>
                    {coursescertifications.map((course, index) => (
                        <motion.div
                            key={index}
                            viewport={{ once: true }}
                            onViewportEnter={() => handleEnterViewport(index)}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            id={`pdf-course-${index}`}
                            animate={visibleItems[index] ? { opacity: 1, x: 0 } : {}}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full">
                            {isMobile ? (visibleItems[index] && (<img src={course.imagePng} alt={course.title} className="w-full h-auto" />))
                                : (visibleItems[index] && (
                                    <object data={course.image} type="application/pdf" className="w-full h-auto">
                                        <img src={course.imagePng} alt={`${course.title} (Course Image)`} className="w-full h-auto" />
                                    </object>
                                ))}
                        </motion.div>
                    ))}
                </div>
            </section>
        </Fragment>
    )
}
export default CoursesCertifications