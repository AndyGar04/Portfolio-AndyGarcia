import { Code, User } from 'lucide-react';
import React, { useState } from 'react';

import { 
    SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiVite,
    SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiJsonwebtokens, SiJira,
    SiGithub, SiPostman, SiDocker
} from 'react-icons/si';

// Definimos la estructura de una Skill
interface Skill {
    name: string;
    icon: React.ReactNode;
    color: string; // Color hexadecimal oficial para el icono
}

type SkillCategory = 'frontend' | 'backend' | 'tools';

// Los datos actualizados con iconos y colores
const skillsData: Record<SkillCategory, Skill[]> = {
    frontend: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    ],
    backend: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000" }, // Express es blanco/negro
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "#D63AFF" },
    ],
    tools: [
        { name: "GitHub", icon: <SiGithub />, color: "#181717" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Jira", icon: <SiJira />, color: "#0052CC" },
    ]
};

export const SobreMi: React.FC = () => {

    const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');

    return (
        <section id="sobre-mí" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-12">
                        <User className="text-blue-600 dark:text-blue-400" size={28} />
                        <h2 className="text-3xl font-bold">Sobre mí</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        <p>
                            Soy un desarrollador buscando mejor día a día, terminando este 2025 la carrera de Tecnico Universitario en Programacion, buscando mi primer experiencia laboral.
                        </p>
                        <p>
                            Me considero atento, responsable y cuento con la capacidad de resolver problemas de desarrollo de software tanto en el frontend como en el backend. 
                        </p>
                        <p>
                            Preparado para crear soluciones eficientes y escalables que brinden una experiencia de usuario excepcional.
                        </p>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
                        
                        <h3 className="font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                            <Code size={20} className="text-blue-500" />
                            Stack Tecnológico
                        </h3>
            
                        <div className="flex gap-2 p-1 bg-slate-200 dark:bg-slate-900/50 rounded-lg mb-6 overflow-x-auto">
                            {(['frontend', 'backend', 'tools'] as SkillCategory[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                flex-1 px-4 py-2 rounded-md text-sm font-semibold capitalize transition-all duration-300
                                ${activeTab === tab 
                                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-300/50 dark:hover:bg-slate-800/50'}
                                `}
                            >
                                {tab === 'tools' ? 'Herramientas' : tab}
                            </button>
                            ))}
                        </div>
            
                        <div className="min-h-[120px]">
                            <div className="flex flex-wrap gap-3 animate-fadeIn">
                            {skillsData[activeTab].map((skill) => (
                                <div 
                                key={skill.name} 
                                className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 cursor-default"
                                >
                                <span 
                                    className="text-lg transition-transform group-hover:scale-110" 
                                    style={{ color: skill.color }} // <--- ACÁ ESTÁ LA MAGIA DEL COLOR
                                >
                                    {skill.icon}
                                </span>
                                
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    {skill.name}
                                </span>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        
    );
};        