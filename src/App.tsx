import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Páginas principais
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import HmiPage from './pages/HmiPage';
import HmiCipPage from './pages/HmiCipPage';

// Categorias de projetos
import AutomationProjects from './pages/categories/AutomationProjects';
import WebProjects from './pages/categories/WebProjects';
import PLCProjects from './pages/categories/PLCProjects';
import Industry40Projects from './pages/categories/Industry40Projects';

function App() {
  return (
    <BrowserRouter basename="/portfolio-danilo">
      <div className="bg-primary min-h-screen">
        <Navbar />
        <Routes>
          {/* Páginas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />

          {/* Categorias de projetos */}
          <Route path="/projetos/automacao" element={<AutomationProjects />} />
          <Route path="/projetos/web" element={<WebProjects />} />
          <Route path="/projetos/plc" element={<PLCProjects />} />
          <Route path="/projetos/industria40" element={<Industry40Projects />} />

          {/* Página de detalhes do projeto */}
          <Route path="/projeto/:id" element={<ProjectDetail />} />

          {/* Página HMI especial */}
          <Route path="/hmi-transporte" element={<HmiPage />} />
          <Route path="/hmi-cip" element={<HmiCipPage />} />

          {/* Fallback para rotas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
