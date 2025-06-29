import { useEffect } from 'react';
import Herosections from "../components/sections/Herosections";
import TechExpertise from "../components/sections/TechExpertise";
import FeaturedProjects from "../components/sections/FeaturedProjects";


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
      <FeaturedProjects />
      
      
    </main>
  );
};

export default Home;