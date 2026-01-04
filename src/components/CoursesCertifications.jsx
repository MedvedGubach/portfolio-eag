import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const CoursesCertifications = () => {
    const { t, i18n } = useTranslation();
    const coursesCertifications = t("courses-certifications", { returnObjects: true });
    const [isMobile, setIsMobile] = useState(false);
    const [visibleItems, setVisibleItems] = useState({});
    const handleEnterViewport = (index) => { setVisibleItems((prev) => ({ ...prev, [index]: true })) };

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 8;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        const maxIndex = Math.ceil(coursesCertifications.length / itemsPerPage) - 1;
        setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
    };

    const start = currentIndex * itemsPerPage;
    const visibleCourses = coursesCertifications.slice(start, start + itemsPerPage);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isMobileUserAgent =
            /android/i.test(userAgent) ||
            /iPad|iPhone|iPod/.test(userAgent) ||
            /Tablet|Touch/i.test(userAgent) ||
            (navigator.maxTouchPoints && navigator.maxTouchPoints > 1);

        setIsMobile(isMobileUserAgent);

        const observers = [];

        coursesCertifications.forEach((_, index) => {
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
    }, [coursesCertifications]);


    return (
        <section id='courses' className="border-b border-neutral-900 pb-4">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={i18n.language}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold tracking-tight my-20 text-center text-4xl">{t("main-title-courses-certifications")}
                </motion.h1>
            </AnimatePresence>

            <div className='flex flex-col items-center'>
                <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 sm:gap-1 lg:gap-4 xl:gap-4 text-center'>
                    {visibleCourses.map((course, index) => (
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
                                    <object data={course.image} loading="lazy" type="application/pdf" className="w-full h-auto">
                                        <img src={course.imagePng} loading="lazy" alt={`${course.title} (Course Image)`} className="w-full h-auto" />
                                    </object>
                                ))}
                        </motion.div>
                    ))}
                </div>


                {/* Controls */}
                <div className="mt-8 space-x-2">
                    <button
                        onClick={handlePrev}
                        className="bg-indigo-600 text-white px-4 py-2  disabled:opacity-50 hover:bg-indigo-800 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring- focus:ring-indigo-400"
                        disabled={currentIndex === 0}
                    >
                        ← Anterior
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-indigo-600 text-white px-4 py-2 disabled:opacity-50 hover:bg-indigo-800 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring- focus:ring-indigo-400"
                        disabled={start + itemsPerPage >= coursesCertifications.length}
                    >
                        Siguiente →
                    </button>
                </div>

                <div className="mt-4 space-x-4">
                    {Array.from({ length: Math.ceil(coursesCertifications.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'} transition-all`}
                            aria-label="review-bullets"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default CoursesCertifications