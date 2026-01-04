import { FaAws, FaAngular, FaVuejs } from "react-icons/fa";

export const FamiliarTechs = [
    {
        icon: FaAws,
        color: "text-orange-500",
        variants: 4,
        tooltip: "AWS",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(254,152,0,0.8)]",
        tooltipBg: "bg-orange-500",
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
        icon: FaVuejs,
        color: "text-green-500",
        variants: 3,
        tooltip: "Vue",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]",
        tooltipBg: "bg-green-500",
        tooltipText: "text-black",
    },

]