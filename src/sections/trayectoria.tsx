import React from 'react';
import { GraduationCap, BookOpen, Award, Link as LinkIcon } from 'lucide-react';

interface TrayectoriaItem {
    tipo: string;
    titulo: string;
    lugar: string;
    fecha: string;
    descripcion?: string;
    link: string;
}

const educationData: TrayectoriaItem[] = [
    { 
        tipo: "Universitario", 
        titulo: "Licenciatura en Ciencias de la Computación", 
        lugar: "UNS", fecha: "2026 - Actualidad", 
        descripcion: "Fundamentos de computación, algoritmos e IA.", 
        link: "https://www.uns.edu.ar/" 
    },
    { 
        tipo: "Universitario", 
        titulo: "Técnico Universitario en Programación", 
        lugar: "UTN", 
        fecha: "2024 - 2025", 
        descripcion: "Desarrollo web, back-end y bases de datos.", 
        link: "https://www.frbb.utn.edu.ar/frbb/" 
    },
    { 
        tipo: "Secundario", 
        titulo: "Técnico en Informática", 
        lugar: "EEST N° 1 De Puan", 
        fecha: "2017 - 2023", 
        descripcion: "Especialización en hardware y software.", 
        link: "https://www.facebook.com/tecnica.puan.75" 
    },
    { 
        tipo: "Primario", 
        titulo: "Escuela Primaria", 
        lugar: "Instituto María Susana", 
        fecha: "2010 - 2016", 
        link: "https://www.facebook.com/InstitutoMariaSusana/" 
    }
];

const trajectoryData: TrayectoriaItem[] = [
    { 
        tipo: "Certificado", 
        titulo: "Desarrollador Python", 
        lugar: "Coderhouse", 
        fecha: "2024", 
        descripcion: "Especialización en Django y Flask.", 
        link: "https://www.coderhouse.com/ar/" 
    }
];

export const Trayectoria: React.FC = () => {
    return (
        <section id="trayectoria" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="flex items-center gap-4 mb-16">
                    <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
                        <GraduationCap className="text-white" size={28} />
                    </div>
                    <h2 className="text-3xl font-bold dark:text-white">Formación y Trayectoria</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Educacion */}
                    <div>
                        <div className="flex items-center gap-3 mb-10 ml-2">
                            <BookOpen className="text-blue-600" size={22} />
                            <h3 className="text-xl font-bold dark:text-white uppercase tracking-tight">Educación</h3>
                        </div>
                        
                        {/* linea de tiempo */}
                        <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-3 space-y-12">
                            {educationData.map((item, index) => (
                                <ItemTimeline key={index} item={item} color="blue" />
                            ))}
                        </div>
                    </div>

                    {/* certificados */}
                    <div>
                        <div className="flex items-center gap-3 mb-10 ml-2">
                            <Award className="text-cyan-500" size={22} />
                            <h3 className="text-xl font-bold dark:text-white uppercase tracking-tight">Certificaciones</h3>
                        </div>
                        
                        {/* otra linea de tiempo */}
                        <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-3 space-y-12">
                            {trajectoryData.map((item, index) => (
                                <ItemTimeline key={index} item={item} color="cyan" />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const ItemTimeline = ({ item, color }: { item: TrayectoriaItem, color: 'blue' | 'cyan' }) => {
    const dotColor = color === 'blue' ? 'bg-blue-600' : 'bg-cyan-500';
    
    return (
        <div className="relative pl-8 group">
            {/* punto sobre la línea */}
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 ${dotColor} group-hover:scale-125 transition-transform z-10`} />
            
            <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    {item.fecha}
                </span>
                
                <h4 className="text-lg font-bold dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.titulo}
                </h4>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
                    {item.lugar}
                </p>

                {item.descripcion && (
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-3 leading-relaxed max-w-md italic">
                        {item.descripcion}
                    </p>
                )}

                <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600/70 hover:text-blue-600 dark:text-blue-400/70 dark:hover:text-blue-400 transition-all uppercase"
                >
                    <LinkIcon size={12} />
                    Saber más
                </a>
            </div>
        </div>
    );
};