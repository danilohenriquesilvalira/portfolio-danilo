import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import HmiPage from './pages/HmiPage';

function App() {
  return (
    <BrowserRouter basename="/portfolio-automacao">
      <div className="bg-primary min-h-screen">
        <Navbar /> {/* Adicione o Navbar aqui */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projeto/:id" element={<ProjectDetail />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/hmi-transporte" element={<HmiPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer /> {/* Adicione o Footer aqui */}
      </div>
    </BrowserRouter>
  );
}

export default App;