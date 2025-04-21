import { SiSequelize, SiExpress, SiMongodb, SiGraphql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

export const BackendIcons = [
    {
        icon: FaNodeJs,
        color: "text-green-500",
        variants: 4,
        tooltip: "Node.JS",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]",
        tooltipBg: "bg-green-500",
        tooltipText: "text-white",
    },
    {
        icon: SiExpress,
        color: "text-gray-300",
        variants: 5,
        tooltip: "Express.JS",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(209,213,219,0.8)]",
        tooltipBg: "bg-gray-300",
        tooltipText: "text-white",
    },
    {
        icon: SiGraphql,
        color: "text-purple-500",
        variants: 4.5,
        tooltip: "GraphQL",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]",
        tooltipBg: "bg-purple-500",
        tooltipText: "text-white",
    },
    {
        icon: SiSequelize,
        color: "text-blue-500",
        variants: 2.5,
        tooltip: "Sequelize",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]",
        tooltipBg: "bg-blue-400",
        tooltipText: "text-white",
    },
    {
        icon: DiMysql,
        color: "text-sky-700",
        variants: 6,
        tooltip: "MySQL",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(0,123,181,0.8)]",
        tooltipBg: "bg-sky-700",
        tooltipText: "text-white",
    },
    {
        icon: SiMongodb,
        color: "text-green-700",
        variants: 3,
        tooltip: "MongoDB",
        hoverStyles: "hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(21,128,61,0.8)]",
        tooltipBg: "bg-green-700",
        tooltipText: "text-white",
    },
];
