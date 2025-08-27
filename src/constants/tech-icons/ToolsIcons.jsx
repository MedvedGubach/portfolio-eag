import { FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTestinglibrary, SiVitest } from "react-icons/si";

export const ToolsIcons = [
    {
        icon: FaGitAlt,
        color: "text-orange-500",
        variants: 4,
        tooltip: "Git",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.8)]",
        tooltipBg: "bg-orange-500",
        tooltipText: "text-white",
    },
    {
        icon: FaGithub,
        color: "text-white",
        variants: 2.5,
        tooltip: "GitHub",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]",
        tooltipBg: "bg-white",
        tooltipText: "text-black",
    },

    {
        icon: SiVitest,
        color: "text-lime-300",
        variants: 3.5,
        tooltip: "Vitest",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(114,155,27,0.8)]",
        tooltipBg: "bg-lime-300",
        tooltipText: "text-black",
    },
    {
        icon: SiTestinglibrary,
        color: "text-red-500",
        variants: 3,
        tooltip: "Testing Library",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(252,69,68,0.8)]",
        tooltipBg: "bg-red-500",
        tooltipText: "text-white",
    }
];