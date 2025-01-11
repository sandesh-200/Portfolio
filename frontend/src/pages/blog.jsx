import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Construction from '../components/construction'
import { useEffect } from 'react';

export default function Blog() {
  useEffect(() => {
    document.title = 'Sandesh Dhakal - Blog';
  }, []);
  return(
    <Construction/>
  )
  // const posts = [
  //   {
  //     id: 1,
  //     title: 'Getting Started with React',
  //     excerpt: 'Learn the basics of React and start building your first component.',
  //     date: 'Jan 15, 2024',
  //     image: '/placeholder.svg',
  //     category: 'React'
  //   },
  //   {
  //     id: 2,
  //     title: 'Modern CSS Techniques',
  //     excerpt: 'Explore modern CSS features and how to use them effectively.',
  //     date: 'Jan 10, 2024',
  //     image: '/placeholder.svg',
  //     category: 'CSS'
  //   },
  //   {
  //     id: 3,
  //     title: 'JavaScript Best Practices',
  //     excerpt: 'Tips and tricks for writing better JavaScript code.',
  //     date: 'Jan 5, 2024',
  //     image: '/placeholder.svg',
  //     category: 'JavaScript'
  //   }
  // ]

  // return (
  //   <div className="min-h-screen py-32">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="text-center mb-16">
  //         <h1 className="text-4xl font-bold mb-4">Blog</h1>
  //         <p className="text-gray-600">Thoughts, tutorials and insights about web development</p>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //         {posts.map((post, index) => (
  //           <motion.article
  //             key={post.id}
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.5, delay: index * 0.1 }}
  //             className="bg-white rounded-lg shadow-lg overflow-hidden"
  //           >
  //             <div className="relative h-48">
  //               <img
  //                 src={post.image}
  //                 alt={post.title}
  //                 className="w-full h-full object-cover"
  //               />
  //               <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
  //                 {post.category}
  //               </span>
  //             </div>
  //             <div className="p-6">
  //               <time className="text-sm text-gray-600">{post.date}</time>
  //               <h2 className="text-xl font-semibold mt-2 mb-3">{post.title}</h2>
  //               <p className="text-gray-600 mb-4">{post.excerpt}</p>
  //               <Link
  //                 to={`/blog/${post.id}`}
  //                 className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700"
  //               >
  //                 Read More
  //                 <ArrowRight className="ml-2 h-4 w-4" />
  //               </Link>
  //             </div>
  //           </motion.article>
  //         ))}
  //       </div>
  //     </div>
  //   </div>

}

