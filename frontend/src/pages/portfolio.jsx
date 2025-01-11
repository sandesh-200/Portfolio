import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Construction from '../components/construction'
import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Sandesh Dhakal - Portfolio';
  }, []);
  // const projects = [
  //   {
  //     title: 'E-commerce Platform',
  //     description: 'A modern e-commerce platform built with React and Node.js',
  //     image: '/placeholder.svg',
  //     category: 'Full Stack',
  //     technologies: ['React', 'Node.js', 'MongoDB']
  //   },
  //   {
  //     title: 'Social Media Dashboard',
  //     description: 'Analytics dashboard for social media management',
  //     image: '/placeholder.svg',
  //     category: 'Frontend',
  //     technologies: ['React', 'Chart.js', 'Tailwind CSS']
  //   },
  //   {
  //     title: 'Mobile Banking App',
  //     description: 'Secure and intuitive mobile banking application',
  //     image: '/placeholder.svg',
  //     category: 'Mobile',
  //     technologies: ['React Native', 'Redux', 'Firebase']
  //   },
  //   {
  //     title: 'Portfolio Website',
  //     description: 'Personal portfolio website with blog functionality',
  //     image: '/placeholder.svg',
  //     category: 'Frontend',
  //     technologies: ['React', 'Next.js', 'Tailwind CSS']
  //   }
  // ]

  // return (
  //   <div className="min-h-screen py-32">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="text-center mb-16">
  //         <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
  //         <p className="text-gray-600">A selection of my recent work</p>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //         {projects.map((project, index) => (
  //           <motion.div
  //             key={project.title}
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.5, delay: index * 0.1 }}
  //             className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
  //           >
  //             <div className="relative h-64">
  //               <img
  //                 src={project.image}
  //                 alt={project.title}
  //                 className="w-full h-full object-cover"
  //               />
  //               <div className="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
  //                 <ArrowUpRight className="w-12 h-12 text-white" />
  //               </div>
  //             </div>
  //             <div className="p-6">
  //               <div className="flex items-center justify-between mb-4">
  //                 <h3 className="text-xl font-semibold">{project.title}</h3>
  //                 <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
  //                   {project.category}
  //                 </span>
  //               </div>
  //               <p className="text-gray-600 mb-4">{project.description}</p>
  //               <div className="flex flex-wrap gap-2">
  //                 {project.technologies.map((tech) => (
  //                   <span
  //                     key={tech}
  //                     className="px-3 py-1 bg-gray-100 rounded-full text-sm"
  //                   >
  //                     {tech}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // )
  return(
    <Construction/>
  )
}

