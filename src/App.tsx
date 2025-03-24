import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from './pages/Home';

// Página 404 simples
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
    <div className="bg-tertiary p-8 rounded-lg max-w-md text-center">
      <h1 className="text-2xl text-white font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-secondary mb-4">A página que você está procurando não existe.</p>
      <a href="/" className="inline-block py-2 px-4 bg-tech-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
        Voltar para Início
      </a>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter basename="/portfolio-automacao">
      <div className="bg-primary min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;