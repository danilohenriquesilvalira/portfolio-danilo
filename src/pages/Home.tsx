import { useEffect } from 'react';
import Herosections from "../components/sections/Herosections";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import ContactCTA from "../components/home/ContactCTA";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      {/* Hero Section */}
      <Herosections />
      
      {/* Featured Projects Section */}
      <FeaturedProjects />
      
      {/* Contact CTA Section */}
      <ContactCTA />
    </main>
  );
};

export default Home;