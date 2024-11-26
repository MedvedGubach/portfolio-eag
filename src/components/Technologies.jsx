import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"
import { DiMysql } from "react-icons/di";
import { motion } from "motion/react"
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
        }
    },

});

const Technologies = () => {
    const { t } = useTranslation();
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">{t("technologies.main")}
            </motion.h1>
            
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <RiReactjsLine className="text-7xl text-cyan-300" />
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-300" />
                </motion.div>

                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <SiSequelize className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <SiExpress className="text-7xl text-gray-300" />
                </motion.div>

                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800p-4">
                    <DiMysql className="text-7xl text-sky-700" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies