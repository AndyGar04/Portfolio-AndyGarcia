import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export const Contacto: React.FC = () => {
    return (
        <section id="contacto" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 mb-6">
                <Mail size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Contacto</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Estoy disponible para nuevos desafíos ¡Contactame y coordinemos!
            </p>
            
            <a 
                href="mailto:tuemail@ejemplo.com" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
            >
                <Send size={20} />
                Enviar Correo
            </a>

            <div className="flex justify-center gap-8 mt-16">
                <a href="https://www.linkedin.com/in/andy-garcia-programador/" className="text-slate-400 hover:text-[#0077b5] transition-colors transform hover:scale-110">
                <Linkedin size={28} />
                </a>
                <a href="https://github.com/AndyGar04" className="text-slate-400 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110">
                <Github size={28} />
                </a>
            </div>
            </div>
        </section>
    );
};    