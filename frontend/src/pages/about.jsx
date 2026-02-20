import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';

function FadeInSection({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
}

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.5, delay: index * 0.07, ease: 'easeOut' }
      } : {}}
      className="group flex flex-col items-center justify-center p-5 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl hover:border-gray-300 hover:bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="w-10 h-10 mb-3">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
      </div>
      <span className="text-xs font-medium text-gray-500 group-hover:text-gray-900 text-center tracking-wide transition-colors duration-300" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.05em' }}>
        {skill.name}
      </span>
    </motion.div>
  );
}

function ExperienceItem({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }
      } : {}}
      className="relative pl-10 pb-14 last:pb-0"
    >
      {/* Timeline line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1, transition: { duration: 0.6, delay: index * 0.15 + 0.3 } } : {}}
        style={{ originY: 0 }}
        className="absolute left-0 top-3 h-full w-px bg-gradient-to-b from-gray-300 to-transparent last:hidden"
      />

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1, transition: { duration: 0.4, delay: index * 0.15 + 0.1, type: 'spring', stiffness: 200 } } : {}}
        className="absolute left-0 top-3 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gray-900 border-2 border-white shadow"
      />

      <div className="group">
        {/* Year */}
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-2" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}>
          {exp.year}
        </p>

        {/* Role */}
        <h3 className="text-2xl text-gray-900 mb-1 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
          {exp.role}
        </h3>

        {/* Company */}
        <p className="text-sm text-gray-400 mb-4 tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.15em' }}>
          {exp.company}
        </p>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed max-w-xl text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {exp.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  useEffect(() => {
    document.title = 'Sandesh Dhakal - About';
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Django REST', icon: 'https://res.cloudinary.com/apideck/image/upload/v1616206512/icons/django-rest-framework.png' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Tailwind CSS', icon: 'tailwind.svg' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ]
    },
    {
      title: 'Tools & OS',
      skills: [
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      ]
    }
  ]

  const experiences = [
    {
      year: '2025',
      company: 'Buy2Rent',
      role: 'Fullstack Developer',
      description: 'Full-stack developer building dynamic web solutions for a real estate company, enhancing property listings and user experience.'
    },
    {
      year: '2024 – 2025',
      company: 'Lumen Labs',
      role: 'Fullstack Developer',
      description: 'Led the development team and implemented modern web solutions across the full stack.'
    },
    {
      year: '2024',
      company: 'Fishpalace Limited',
      role: 'Django Backend Developer',
      description: 'Built efficient data processing and inventory systems with Django, PostgreSQL, and Celery, ensuring real-time updates and seamless operations.'
    },
  ]

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-28 md:py-36">

        {/* Header */}
        <FadeInSection>
          <div className="mb-28">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-5" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.3em' }}>
              About
            </p>
            <h1 className="text-5xl sm:text-6xl xl:text-6xl text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Sandesh Dhakal
            </h1>
            {/* Divider */}
            <div className="w-12 h-px bg-gray-300 mb-8" />
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl font-serif">
              A web developer who believes every line of code tells a story. From sleek, functional applications to creative solutions, I bring ideas to life with Django, React, and JavaScript. When I'm not coding, I'm either crunching numbers or dreaming up the next big project.
            </p>
          </div>
        </FadeInSection>

        {/* Skills */}
        <section className="mb-32">
          <FadeInSection delay={0.1}>
            <div className="flex items-baseline gap-6 mb-14">
              <h2 className="text-3xl sm:text-4xl text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                Technical Skills
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </FadeInSection>

          <div className="space-y-14">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <FadeInSection delay={categoryIndex * 0.05}>
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.25em' }}>
                    {category.title}
                  </p>
                </FadeInSection>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <FadeInSection delay={0.1}>
            <div className="flex items-baseline gap-6 mb-14">
              <h2 className="text-3xl sm:text-4xl text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                Experience
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </FadeInSection>

          <div className="ml-4">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}