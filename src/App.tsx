import { Trayectoria } from './sections/Trayectoria';
import { Contacto } from './sections/Contacto';
import { Proyectos } from './sections/Proyectos';
import { SobreMi } from './sections/SobreMi';
import { Inicio } from './sections/Inicio';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

//Modularizacion de secciones y componentes.
const App: React.FC = () => {

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-500/30">
      <Navbar />

      <Inicio />

      <SobreMi />

      <Trayectoria />
      
      <Proyectos />

      <Contacto />

      <Footer />
    </div>
  );
};

export default App;