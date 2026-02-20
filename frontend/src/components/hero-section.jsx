import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
  // Languages
  "Python",
  "C",
  "C++",
  "JavaScript",
  "SQL",
  "NoSQL",

  // Frontend
  "React Js",
  "Tailwind CSS",

  // Backend
  "Node Js",
  "Django",
  "Django Rest Framework",
  "Express Js",
  "Celery",
  "Redis",

  // Databases
  "PostgreSQL",
  "MYSQL",
  "MongoDB",

  // DevOps
  "Docker",
  "NGINX",
];


  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>


      <div className="relative min-h-screen flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover z-0"
          style={{
            backgroundImage: "url('/heroImage.jpg')",
            backgroundPosition: "65% center",
          }}
        >
          {/* Richer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-48">
          <div className="text-white text-center lg:text-left w-full">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="flex flex-col items-center lg:items-start"
            >

              {/* Eyebrow label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="hero-label text-white/50 mb-6 tracking-widest"
              >
                2026
              </motion.p>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                style={{ originX: 0 }}
                className="w-16 h-px bg-white/40 mb-8 hidden lg:block"
              />

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="mb-3"
              >
                <h1 className="hero-name text-6xl sm:text-7xl xl:text-6xl text-white">
                  Sandesh Dhakal
                </h1>
              </motion.div>

              {/* Italic subtitle under name */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="text-white/40 mb-10"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',


                  letterSpacing: '0.06em',
                }}
              >
                Fullstack Developer
              </motion.p>

              {/* Animated role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="h-10 mb-14 overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={roleIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="hero-role text-lg sm:text-xl text-white/60"
                  >
                    {roles[roleIndex]}
                  </motion.h3>
                </AnimatePresence>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="hidden md:block"
              >
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-4 hero-cta text-white/70 hover:text-white transition-colors duration-300"
                >
                  <span
                    className="inline-block w-10 h-px bg-white/40 group-hover:w-16 group-hover:bg-white transition-all duration-500"
                  />
                  Overview
                  <ArrowRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}