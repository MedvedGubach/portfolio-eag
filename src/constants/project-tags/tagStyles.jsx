import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiSequelize, SiMysql, SiGraphql, SiTailwindcss,
    SiMui, SiBootstrap, SiThreedotjs, SiHeadlessui, SiGmail, SiMongodb, SiFramer, SiFiles, SiJsonwebtokens
} from "react-icons/si";

export const tagStyles = {
    Private: { color: "bg-red-700 text-white", icon: "🔒" },
    MVP: { color: "bg-yellow-500 text-black", icon: "🚧" },
    Prototype: { color: "bg-purple-600 text-white", icon: "🧪" },
    "In Progress": { color: "bg-blue-600 text-white", icon: "🔄" },
    Finished: { color: "bg-green-600 text-white", icon: "✅" }
};

export const tagMap = {
    "Privado": "Private",
    "MVP": "MVP",
    "Prototipo": "Prototype",
    "En progreso": "In Progress",
    "Finalizado": "Finished",
    "Private": "Private",
    "Prototype": "Prototype",
    "In Progress": "In Progress",
    "Finished": "Finished"
};


export const techStyles = {
    "React.JS": { icon: <SiReact />, color: "text-cyan-400 bg-cyan-900" },
    "Next.JS": { icon: <SiNextdotjs />, color: "text-gray-400 bg-gray-700" },
    "TypeScript": { icon: <SiTypescript />, color: "text-blue-500 bg-blue-900" },
    "JavaScript": { icon: <SiJavascript />, color: "text-yellow-400 bg-yellow-800" },
    "Node.JS": { icon: <SiNodedotjs />, color: "text-green-500 bg-green-900" },
    "Express.JS": { icon: <SiExpress />, color: "text-gray-300 bg-gray-800" },
    "Sequelize": { icon: <SiSequelize />, color: "text-blue-300 bg-blue-900" },
    "SQL": { icon: <SiMysql />, color: "text-blue-300 bg-blue-900" },
    "GraphQL": { icon: <SiGraphql />, color: "text-pink-400 bg-pink-900" },
    "HTML": { icon: <SiGraphql />, color: "text-orange-400 bg-orange-900" },
    "CSS": { icon: <SiGraphql />, color: "text-blue-400 bg-blue-900" },
    "Tailwind CSS": { icon: <SiTailwindcss />, color: "text-sky-300 bg-sky-900" },
    "MUI": { icon: <SiMui />, color: "text-indigo-300 bg-indigo-900" },
    "Bootstrap": { icon: <SiBootstrap />, color: "text-purple-300 bg-purple-900" },
    "Three.JS": { icon: <SiThreedotjs />, color: "text-white bg-neutral-800" },
    "Framer": { icon: <SiFramer />, color: "text-purple-400 bg-purple-800" },
    "Headless UI": { icon: <SiHeadlessui />, color: "text-teal-300 bg-teal-800" },
    "NodeMailer": { icon: <SiGmail />, color: "text-lime-300 bg-lime-900" },
    "MongoDB": { icon: <SiMongodb />, color: "text-emerald-400 bg-emerald-900" },
    "Multer": { icon: <SiFiles />, color: "text-cyan-400 bg-cyan-900" },
    "JSON Web Token": { icon: <SiJsonwebtokens />, color: "text-purple-400 bg-purple-900" },

};
