import HeroSection from '../components/hero-section.jsx';
import FeaturedProjects from '../components/featuredprojects.jsx';
import Explore from '../components/Explore.jsx';
import { useEffect } from 'react'


export default function Home() {
    useEffect(() => {
      document.title = 'Sandesh Dhakal - Home';
    }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <FeaturedProjects /> */}
      <Explore/>
    </main>
  );
}