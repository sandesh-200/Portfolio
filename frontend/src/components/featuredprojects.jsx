import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with React and Node.js',
      image: '/placeholder.svg',
      link: '/portfolio/ecommerce'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: '/placeholder.svg',
      link: '/portfolio/dashboard'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application',
      image: '/placeholder.svg',
      link: '/portfolio/banking'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-gray-600">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-center h-full">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

