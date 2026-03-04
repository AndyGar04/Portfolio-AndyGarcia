import { Trayectoria } from './sections/trayectoria';
import { Contacto } from './sections/contacto';
import { Proyectos } from './sections/proyectos';
import { SobreMi } from './sections/sobreMi';
import { Inicio } from './sections/inicio';
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