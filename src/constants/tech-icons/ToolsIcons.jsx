import { FaGithub, FaGitAlt } from "react-icons/fa";

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
];