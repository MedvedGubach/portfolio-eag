import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaVuejs, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const FrontendIcons = [
    {
        icon: RiReactjsLine,
        color: "text-cyan-300",
        variants: 2.5,
        tooltip: "React",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]",
        tooltipBg: "bg-cyan-400",
        tooltipText: "text-black",
    },

    {
        icon: SiTypescript,
        color: "text-blue-500",
        variants: 3.5,
        tooltip: "TypeScript",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]",
        tooltipBg: "bg-blue-500",
        tooltipText: "text-white",
    },
    {
        icon: IoLogoJavascript,
        color: "text-yellow-300",
        variants: 4,
        tooltip: "JavaScript",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(253,224,71,0.8)]",
        tooltipBg: "bg-yellow-300",
        tooltipText: "text-black",
    },
    {
        icon: FaHtml5,
        color: "text-orange-500",
        variants: 2,
        tooltip: "HTML",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.8)]",
        tooltipBg: "bg-orange-500",
        tooltipText: "text-white",
    },
    {
        icon: FaCss3Alt,
        color: "text-blue-600",
        variants: 6,
        tooltip: "CSS",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.8)]",
        tooltipBg: "bg-blue-600",
        tooltipText: "text-white",
    },
    {
        icon: RiTailwindCssFill,
        color: "text-cyan-300",
        variants: 5,
        tooltip: "Tailwind CSS",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(103,232,249,0.8)]",
        tooltipBg: "bg-cyan-300",
        tooltipText: "text-black",
    },
    {
        icon: FaBootstrap,
        color: "text-purple-600",
        variants: 3,
        tooltip: "Bootstrap",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(116,17,246,0.8)]",
        tooltipBg: "bg-purple-600",
        tooltipText: "text-white",
    },
];
