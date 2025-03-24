import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Layouts
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Páginas com lazy loading para otimização
const Home = lazy(() => import('@/pages/Home'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="canvas-loader"></div>
  </div>
);

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;