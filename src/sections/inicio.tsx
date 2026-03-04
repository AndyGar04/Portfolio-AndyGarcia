import { Code, ExternalLink, Github, Linkedin, Send } from 'lucide-react';
import React from 'react';

export const Inicio: React.FC = () => {
    return (
        <section id="inicio" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-screen bg-blue-500/10 rounded-bl-[100px] -z-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full -z-10 blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-center md:text-left">
                
                <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-2 border border-blue-200 dark:border-blue-800">
                ¡Bienvenidos a mi Portafolio!
                </div>
                
                <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Andy Garcia
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                    Desarrollador Full Stack
                </h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Programando y diseñando desde Bahía Blanca, Argentina. Especializado en aplicaciones web funcionales y escalables.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <a href="#contacto" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1">
                    Contactame <Send size={18} />
                </a>
                <a href="#proyectos" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full font-bold transition-all">
                    Ver proyectos <ExternalLink size={18} />
                </a>
                </div>

                <div className="flex justify-center md:justify-start gap-6 pt-4">
                <a href="https://github.com/AndyGar04" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                    <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/andy-garcia-programador/" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                    <Linkedin size={28} />
                </a>
                </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
                
                <div className="absolute bottom-10 right-0 md:-right-4 p-4 bg-white dark:bg-slate-800 rounded-full shadow-xl animate-pulse z-20 border border-slate-100 dark:border-slate-700">
                    <Code size={28} className="text-blue-500" />
                </div>

                <div className="bg-white dark:bg-slate-800 p-4 pb-8 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-700 max-w-sm w-full transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-900 relative group">
                    <img 
                    src="/FotoGit.jpg" 
                    alt="Andy Garcia" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                </div>
                <div className="text-center mt-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Programador</h3>
                    <p className="text-blue-500 font-medium text-sm">Codeando, sin aflojar!</p>
                </div>
                </div>
            </div>

            </div>
        </section>
    );
};    