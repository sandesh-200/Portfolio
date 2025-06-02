import { motion } from 'framer-motion'
import { Code2, Briefcase } from 'lucide-react'
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'Sandesh Dhakal - About';
  }, []);
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Python', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'HTML', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Django', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Django REST Framework', level: 85, icon: 'https://res.cloudinary.com/apideck/image/upload/v1616206512/icons/django-rest-framework.png' },
        { name: 'NumPy', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Pandas', level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'Bootstrap', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Tailwind CSS', level: 88, icon: 'tailwind.svg' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ]
    },
    {
      title: 'Tools & Operating Systems',
      skills: [
        { name: 'Linux', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      ]
    }
  ]

  const experiences = [
        {
      year: '2025',
      company: 'Buy2Rent',
      role: 'Fullstack Developer',
      description: 'Full-stack developer building dynamic web solutions for a real estate company, enhancing property listings and user experience'
    },
    {
      year: '2024 - 2025',
      company: 'Lumen Labs',
      role: 'Fullstack Developer',
      description: 'Leading the development team and implementing modern web solutions.',
    },
    {
      year: '2024',
      company: 'Fishpalace Limited',
      role: 'Django Backend Developer',
      description: 'Built efficient data processing and inventory systems with Django, PostgreSQL, and Celery, ensuring real-time updates and seamless operations.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
            I’m Sandesh Dhakal, a web developer who believes every line of code tells a story. From sleek, functional applications to creative solutions, I bring ideas to life with Django, React, and JavaScript. When I'm not coding, I’m either crunching numbers or dreaming up my next big project. Let’s make something unforgettable!
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-12">
            
            <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      className="group flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="relative w-12 h-12 mb-3">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain transition-all duration-300 filter group-hover:filter-none grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 text-center group-hover:text-indigo-600 transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2 mb-12">
            <Briefcase className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-indigo-200">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-600 border-4 border-white" />
                </div>
                
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full mb-4">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}