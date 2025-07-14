import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Apenas a página principal
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter basename="/portfolio-danilo">
      <div className="bg-primary min-h-screen">
        <Navbar />
        <Routes>
          {/* Página única com todas as seções */}
          <Route path="/" element={<Home />} />
          {/* Qualquer rota não encontrada redireciona para Home */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;