import { useEffect } from 'react';
import Herosections from "../components/sections/Herosections";
import TechExpertise from "../components/sections/TechExpertise";
import Experiencia from "../components/sections/Experiencia";
import ProjectsPage from "../components/sections/ProjectsPage";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      {/* Hero Section */}
      <Herosections />
      
      {/* Transição sutil */}
      <div className="section-transition-subtle"></div>
      
      {/* Tech Expertise Mini Section */}
      <TechExpertise />
      
      {/* Transição sutil */}
      <div className="section-transition-minimal"></div>
      
      {/* Experience Section */}
      <Experiencia />
      
      {/* Transição sutil */}
      <div className="section-transition-minimal"></div>
      
      {/* Featured Projects Section */}
      <ProjectsPage />
      
    </main>
  );
};

export default Home;