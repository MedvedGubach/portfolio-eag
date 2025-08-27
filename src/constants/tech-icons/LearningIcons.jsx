import { SiDotnet, SiNextdotjs } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

export const LearningIcons = [
    {
        icon: SiDotnet,
        color: "text-purple-600",
        variants: 2.5,
        tooltip: "ASP.NET Core",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(91,40,145,0.8)]",
        tooltipBg: "bg-purple-600",
        tooltipText: "text-white",
    },
    {
        icon: FaAngular,
        color: "text-red-700",
        variants: 3.5,
        tooltip: "Angular",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(221,0,44,0.8)]",
        tooltipBg: "bg-red-700",
        tooltipText: "text-white",
    },

    {
        icon: SiNextdotjs,
        color: "text-neutral-300",
        variants: 3,
        tooltip: "Next.JS",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(212,212,212,0.8)]",
        tooltipBg: "bg-neutral-300",
        tooltipText: "text-black",
    }
]