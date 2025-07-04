import { useEffect } from 'react';
import Herosections from "../components/sections/Herosections";
import TechExpertise from "../components/sections/TechExpertise";
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
      
      {/* Tech Expertise Mini Section */}
      <TechExpertise />
      

      
      {/* Featured Projects Section */}
      <ProjectsPage />
      
      
    </main>
  );
};

export default Home;