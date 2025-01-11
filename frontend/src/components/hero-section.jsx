import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Fullstack Developer",
    "Python Specialist",
    "Django Developer",
    "React Developer",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover z-0"
        style={{ 
          backgroundImage: "url('/hero_image.jpg')",
          backgroundPosition: "65% center", // Center horizontally on mobile
          '@media (min-width: 1024px)': {
            backgroundPosition: "85% center" // Position towards right for desktop
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-48">
        <div className="text-white text-center lg:text-left w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="space-y-2 mb-6">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl">
                <span className="font-bold">I'm Sandesh</span>
              </h1>
              {/* <p className="text-3xl sm:text-4xl xl:text-5xl font-light text-gray-200">
                The rest is classified
              </p> */}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="h-20 mb-12"
            >
              <motion.h3 
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl text-gray-200 font-light"
              >
                {roles[roleIndex]}
              </motion.h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hidden md:block" // Hide on mobile, show on md and up
            >
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg sm:text-xl font-medium rounded-lg text-white bg-black/40 hover:bg-black/60 transition-all duration-300 hover:scale-105"
              >
                Overview
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}