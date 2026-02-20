import HeroSection from '../components/hero-section.jsx';
import { useEffect } from 'react'


export default function Home() {
    useEffect(() => {
      document.title = 'Sandesh Dhakal - Home';
    }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
    </main>
  );
}