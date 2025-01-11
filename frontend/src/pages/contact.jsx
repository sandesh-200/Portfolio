import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  useEffect(() => {
    document.title = 'Sandesh Dhakal - Contact';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-gray-900 focus:ring-gray-900 p-3 text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-gray-900 focus:ring-gray-900 p-3 text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-gray-900 focus:ring-gray-900 p-3 text-gray-800"
              />
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50"
            >
              {status.submitting ? 
                'Sending...' : 
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              }
            </button>

            {status.info.msg && (
              <div className={`text-center ${status.info.error ? 'text-red-500' : 'text-green-500'}`}>
                {status.info.msg}
              </div>
            )}
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-3 bg-gray-100 rounded-full mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-gray-600">dsandesh263@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-3 bg-gray-100 rounded-full mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <p className="text-gray-600">+977 9811333383</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-3 bg-gray-100 rounded-full mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-gray-600">Biratnagar, Nepal</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
