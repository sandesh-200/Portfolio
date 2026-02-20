import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Github, Code2, Globe, Database, Layers, Terminal, BarChart2 } from 'lucide-react'
import { useEffect, useRef } from 'react'

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
      } : {}}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.a
      ref={ref}
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }
      } : {}}
      className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
    >
      {/* Image preview */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-50">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: `${project.accent}10` }}
          >
            <project.icon
              className="w-8 h-8 opacity-20"
              style={{ color: project.accent }}
            />
            <span
              className="text-xs uppercase tracking-widest opacity-30"
              style={{ fontFamily: "'DM Sans', sans-serif", color: project.accent, letterSpacing: '0.2em' }}
            >
              Screenshot coming soon
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-gray-700" />
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ background: project.accent }}
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="text-xl leading-snug text-gray-900 group-hover:text-gray-700 transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            {project.title}
          </h3>
          <span
            className="text-xs mt-1 shrink-0 text-gray-400"
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.15em' }}
          >
            {project.year}
          </span>
        </div>

        <p
          className="text-sm leading-relaxed flex-1  text-gray-500"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          {project.description}
        </p>

      </div>

      {/* Footer */}
      <div className="px-6 py-3.5 border-t border-gray-50 flex items-center gap-2">
        <Github className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors duration-300" />
        <span
          className="text-xs text-gray-300 group-hover:text-gray-500 transition-colors duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.1em' }}
        >
          View Repository
        </span>
      </div>
    </motion.a>
  );
}

const projects = [
  {
    title: 'Portfolio Website',
    year: '2025',
    description: 'A personal portfolio built with React and Tailwind CSS, featuring smooth animations, a hero section, about page, and project showcase.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    repo: 'https://github.com/yourusername/portfolio',
    accent: '#6366f1',
    icon: Globe,
    image: null, // e.g. '/screenshots/portfolio.png'
  },
  {
    title: 'Django REST API',
    year: '2024',
    description: 'A scalable REST API backend built with Django REST Framework and PostgreSQL, featuring JWT authentication, filtering, and Celery task queuing.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Celery'],
    repo: 'https://github.com/yourusername/django-api',
    accent: '#10b981',
    icon: Database,
    image: null,
  },
  {
    title: 'Real Estate Platform',
    year: '2025',
    description: 'Full-stack property listing platform for Buy2Rent with advanced search, user dashboards, and dynamic filtering.',
    tags: ['React', 'Django', 'PostgreSQL', 'Tailwind'],
    repo: 'https://github.com/yourusername/buy2rent',
    accent: '#f59e0b',
    icon: Layers,
    image: null,
  },
  {
    title: 'Inventory System',
    year: '2024',
    description: 'Real-time inventory and data processing system for Fishpalace Limited, handling stock updates, reporting, and automated alerts.',
    tags: ['Django', 'Celery', 'Redis', 'PostgreSQL'],
    repo: 'https://github.com/yourusername/inventory',
    accent: '#3b82f6',
    icon: BarChart2,
    image: null,
  },
  {
    title: 'CLI Dev Toolkit',
    year: '2024',
    description: 'A Python command-line toolkit for automating repetitive development tasks including scaffolding, migrations, and deployment scripts.',
    tags: ['Python', 'Click', 'Shell'],
    repo: 'https://github.com/yourusername/cli-toolkit',
    accent: '#8b5cf6',
    icon: Terminal,
    image: null,
  },
  {
    title: 'Data Dashboard',
    year: '2024',
    description: 'An analytics dashboard built with React and Pandas for visualizing time-series data with interactive charts and CSV export.',
    tags: ['React', 'Python', 'Pandas', 'NumPy'],
    repo: 'https://github.com/yourusername/data-dashboard',
    accent: '#ec4899',
    icon: Code2,
    image: null,
  },
]

export default function Projects() {
  useEffect(() => {
    document.title = 'Sandesh Dhakal - Projects';
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-28 md:py-36">

        {/* Header */}
        <FadeInSection>
          <div className="mb-20">
            <p
              className="text-xs text-gray-400 uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.3em' }}
            >
              Work
            </p>
            <h1
              className="text-5xl sm:text-6xl xl:text-7xl text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Projects
            </h1>
            <div className="w-12 h-px bg-gray-300 mb-8" />
            <p
              className="leading-relaxed max-w-xl text-gray-500"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
            >
              A selection of things I've built — from APIs and dashboards to full-stack platforms. Click any card to view the repository.
            </p>
          </div>
        </FadeInSection>

        {/* Section label */}
        <FadeInSection delay={0.1}>
          <div className="flex items-baseline gap-6 mb-10">
            <p
              className="text-xs text-gray-400 uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.25em' }}
            >
              All Projects
            </p>
            <div className="flex-1 h-px bg-gray-200" />
            <span
              className="text-xs text-gray-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {projects.length} projects
            </span>
          </div>
        </FadeInSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Footer */}
        <FadeInSection delay={0.2}>
          <div className="mt-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-100" />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-xs text-gray-400 hover:text-gray-700 transition-colors duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              <Github className="w-4 h-4" />
              More on GitHub
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
        </FadeInSection>

      </div>
    </div>
  )
}