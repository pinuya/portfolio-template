import { FaHtml5 as Html, FaNodeJs as NodeJs } from "react-icons/fa6";
import { IoLogoCss3 as CssIcon } from "react-icons/io";
import {
    DiJavascript as Javascript,
    DiMongodb as Database,
} from "react-icons/di";
import { FaReact as ReactIcon } from "react-icons/fa";
import {
    SiNextdotjs as NextJs,
    SiExpress as Server,
    SiKubernetes as Kubernate,
} from "react-icons/si";
import {
    RiTailwindCssFill as Tailwind,
    RiRemixRunFill as Remix,
    RiSupabaseFill as Supabase,
} from "react-icons/ri";
import { GrMysql as Sql } from "react-icons/gr";
import {
    FaGitAlt as Git,
    FaDocker as Docker,
    FaCloud as CloudCog,
    FaFigma as Figma,
} from "react-icons/fa";
import { VscVscode as VsCode } from "react-icons/vsc";


export interface SkillI {
  name: string;
  icon: React.ElementType;
}

interface SkillsI {
    title: string,
    skills: SkillI[],
}


export const skills: SkillsI[] = [
    // template para skills 
    // {
    //     title: "Frontend",
    //     skills: [
    //         { name: "HTML", icon: Html },
    //         { name: "CSS", icon: CssIcon },
    //         { name: "JavaScript", icon: Javascript },
    //         { name: "React", icon: ReactIcon },
    //         { name: "Next.js", icon: NextJs },
    //         { name: "Remix", icon: Remix },
    //         { name: "Tailwind CSS", icon: Tailwind },
    //     ],
    // },


    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: Html },
            { name: "CSS", icon: CssIcon },
            { name: "JavaScript", icon: Javascript },
            { name: "React", icon: ReactIcon },
            { name: "Next.js", icon: NextJs },
            { name: "Remix", icon: Remix },
            { name: "Tailwind CSS", icon: Tailwind },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: NodeJs },
            { name: "Express", icon: Server },
            { name: "Supabase", icon: Supabase },
            { name: "SQL", icon: Sql },
            { name: "MongoDB", icon: Database },
        ],
    },
    {
        title: "DevOps",
        skills: [
            { name: "Git", icon: Git },
            { name: "Docker", icon: Docker },
            { name: "CI/CD", icon: CloudCog },
            { name: "Kubernetes", icon: Kubernate },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "VS Code", icon: VsCode },
            { name: "Figma", icon: Figma },
        ],
    },
];