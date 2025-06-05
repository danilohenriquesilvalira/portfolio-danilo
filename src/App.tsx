import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Páginas principais
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter basename="/portfolio-danilo">
      <div className="bg-primary min-h-screen">
        <Navbar />
        <Routes>
          {/* Páginas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/contato" element={<Contact />} />
          
          
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