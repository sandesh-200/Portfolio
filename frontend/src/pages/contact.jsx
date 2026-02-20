// // import { useState } from 'react'
// // import { motion } from 'framer-motion'
// // import { Send, Mail, Phone, MapPin } from 'lucide-react'
// // import { useEffect } from 'react';

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: ''
// //   })

// //   const [status, setStatus] = useState({
// //     submitted: false,
// //     submitting: false,
// //     info: { error: false, msg: null }
// //   })
// //   useEffect(() => {
// //     document.title = 'Sandesh Dhakal - Contact';
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     setStatus(prevStatus => ({ ...prevStatus, submitting: true }))

// //     // Simulate API call
// //     try {
// //       await new Promise(resolve => setTimeout(resolve, 1000))
// //       setStatus({
// //         submitted: true,
// //         submitting: false,
// //         info: { error: false, msg: 'Message sent successfully!' }
// //       })
// //       setFormData({ name: '', email: '', message: '' })
// //     } catch (error) {
// //       setStatus({
// //         submitted: false,
// //         submitting: false,
// //         info: { error: true, msg: 'An error occurred. Please try again later.' }
// //       })
// //     }
// //   }

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     })
// //   }

// //   return (
// //     <div className="min-h-screen py-32 bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="max-w-2xl mx-auto"
// //         >
// //           <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
          
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div>
// //               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
// //                 Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //                 className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-gray-900 focus:ring-gray-900 p-3 text-gray-800"
// //               />
// //             </div>

// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-gray-900 focus:ring-gray-900 p-3 text-gray-800"
// //               />
// //             </div>

// //             <div>
// //               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
// //                 Message
// //               </label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 required
// //                 rows={6}
// //                 className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-gray-900 focus:ring-gray-900 p-3 text-gray-800"
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               disabled={status.submitting}
// //               className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50"
// //             >
// //               {status.submitting ? 
// //                 'Sending...' : 
// //                 <>
// //                   Send Message
// //                   <Send className="ml-2 h-4 w-4" />
// //                 </>
// //               }
// //             </button>

// //             {status.info.msg && (
// //               <div className={`text-center ${status.info.error ? 'text-red-500' : 'text-green-500'}`}>
// //                 {status.info.msg}
// //               </div>
// //             )}
// //           </form>

// //           <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               className="flex flex-col items-center text-center"
// //             >
// //               <div className="p-3 bg-gray-100 rounded-full mb-4">
// //                 <Mail className="h-6 w-6" />
// //               </div>
// //               <h3 className="text-lg font-medium mb-2">Email</h3>
// //               <p className="text-gray-600">dsandesh263@gmail.com</p>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //               className="flex flex-col items-center text-center"
// //             >
// //               <div className="p-3 bg-gray-100 rounded-full mb-4">
// //                 <Phone className="h-6 w-6" />
// //               </div>
// //               <h3 className="text-lg font-medium mb-2">Phone</h3>
// //               <p className="text-gray-600">+977 9811333383</p>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.4 }}
// //               className="flex flex-col items-center text-center"
// //             >
// //               <div className="p-3 bg-gray-100 rounded-full mb-4">
// //                 <MapPin className="h-6 w-6" />
// //               </div>
// //               <h3 className="text-lg font-medium mb-2">Location</h3>
// //               <p className="text-gray-600">Biratnagar, Nepal</p>
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   )
// // }



// import { useState, useEffect, useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Send, Mail, Phone, MapPin } from 'lucide-react'

// function FadeInSection({ children, delay = 0 }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-80px' });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={isInView ? {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
//       } : {}}
//     >
//       {children}
//     </motion.div>
//   );
// }

// const inputBase = {
//   fontFamily: "'DM Sans', sans-serif",
//   fontWeight: 300,
// }

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })
//   const [status, setStatus] = useState({
//     submitted: false,
//     submitting: false,
//     info: { error: false, msg: null }
//   })

//   useEffect(() => {
//     document.title = 'Sandesh Dhakal - Contact';
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setStatus(prev => ({ ...prev, submitting: true }))
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000))
//       setStatus({ submitted: true, submitting: false, info: { error: false, msg: 'Message sent successfully.' } })
//       setFormData({ name: '', email: '', message: '' })
//     } catch {
//       setStatus({ submitted: false, submitting: false, info: { error: true, msg: 'Something went wrong. Please try again.' } })
//     }
//   }

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

//   const contactDetails = [
//     { icon: Mail,    label: 'Email',    value: 'dsandesh263@gmail.com' },
//     { icon: Phone,   label: 'Phone',    value: '+977 9811333383' },
//     { icon: MapPin,  label: 'Location', value: 'Biratnagar, Nepal' },
//   ]

//   return (
//     <div className="min-h-screen bg-[#fafaf9]">
//       <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-28 md:py-36 flex flex-col justify-center items-center">

//         {/* Header */}
//         <FadeInSection>
//           <div className="mb-20">
//             <p
//               className="text-xs text-gray-400 uppercase mb-5"
//               style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.3em' }}
//             >
//               Contact
//             </p>
//             <h1
//               className="text-5xl sm:text-6xl xl:text-7xl text-gray-900 mb-8 leading-tight"
//               style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
//             >
//               Get in Touch
//             </h1>
//             <div className="w-12 h-px bg-gray-300 mb-8" />
//             <p
//               className="leading-relaxed max-w-xl text-gray-500"
//               style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
//             >
//               Have a project in mind or just want to say hello? I'd love to hear from you.
//             </p>
//           </div>
//         </FadeInSection>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

//           {/* ── Form ── */}
//           <FadeInSection delay={0.1} className="lg:col-span-3">
//             <div className="lg:col-span-3">
//               <form onSubmit={handleSubmit} className="space-y-8">

//                 {/* Name */}
//                 <div className="relative">
//                   <label
//                     htmlFor="name"
//                     className="block text-xs uppercase text-gray-400 mb-2"
//                     style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     style={inputBase}
//                     className="w-full bg-transparent border-0 border-b border-gray-200 pb-3 pt-1 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors duration-300"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="relative">
//                   <label
//                     htmlFor="email"
//                     className="block text-xs uppercase text-gray-400 mb-2"
//                     style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     style={inputBase}
//                     className="w-full bg-transparent border-0 border-b border-gray-200 pb-3 pt-1 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors duration-300"
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div className="relative">
//                   <label
//                     htmlFor="message"
//                     className="block text-xs uppercase text-gray-400 mb-2"
//                     style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     style={inputBase}
//                     className="w-full bg-transparent border-0 border-b border-gray-200 pb-3 pt-1 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors duration-300 resize-none"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>

//                 {/* Submit */}
//                 <div className="pt-2">
//                   <button
//                     type="submit"
//                     disabled={status.submitting}
//                     className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors duration-300 disabled:opacity-40"
//                     style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
//                   >
//                     <span
//                       className="inline-block w-10 h-px bg-gray-900 group-hover:w-16 group-disabled:w-10 transition-all duration-500 group-hover:bg-gray-400"
//                     />
//                     {status.submitting ? 'Sending...' : 'Send Message'}
//                     <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>

//                   {status.info.msg && (
//                     <motion.p
//                       initial={{ opacity: 0, y: 6 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                       className={`mt-6 text-xs tracking-wide ${status.info.error ? 'text-red-400' : 'text-gray-400'}`}
//                       style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.1em' }}
//                     >
//                       {status.info.msg}
//                     </motion.p>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </FadeInSection>

//           {/* ── Contact details ── */}
//           <FadeInSection delay={0.25}>
//             <div className="lg:col-span-2 flex flex-col gap-10 lg:pt-8">

//               {/* Divider for mobile */}
//               <div className="lg:hidden w-12 h-px bg-gray-200" />

//               {contactDetails.map(({ icon: Icon, label, value }) => (
//                 <div key={label} className="flex items-start gap-4">
//                   <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Icon className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
//                   </div>
//                   <div>
//                     <p
//                       className="text-xs text-gray-400 uppercase mb-1"
//                       style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
//                     >
//                       {label}
//                     </p>
//                     <p
//                       className="text-sm text-gray-600"
//                       style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
//                     >
//                       {value}
//                     </p>
//                   </div>
//                 </div>
//               ))}

//               {/* Divider */}
//               <div className="w-8 h-px bg-gray-200 mt-2" />

//               <p
//                 className="text-xs text-gray-400 leading-relaxed max-w-xs"
//                 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1rem', lineHeight: '1.7' }}
//               >
//                 I typically respond within 24 hours. Looking forward to connecting.
//               </p>
//             </div>
//           </FadeInSection>

//         </div>
//       </div>
//     </div>
//   )
// }


import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

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

const inputBase = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
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
    setStatus(prev => ({ ...prev, submitting: true }))
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus({ submitted: true, submitting: false, info: { error: false, msg: 'Message sent successfully.' } })
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus({ submitted: false, submitting: false, info: { error: true, msg: 'Something went wrong. Please try again.' } })
    }
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const contactDetails = [
    { icon: Mail,   label: 'Email',    value: 'dsandesh263@gmail.com' },
    { icon: Phone,  label: 'Phone',    value: '+977 9811333383' },
    { icon: MapPin, label: 'Location', value: 'Biratnagar, Nepal' },
  ]

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <div className="max-w-2xl mx-auto px-6 sm:px-10 py-28 md:py-36 flex flex-col items-center text-center">

        {/* Header */}
        <FadeInSection>
          <div className="mb-20 w-full">
            <p
              className="text-xs text-gray-400 uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.3em' }}
            >
              Contact
            </p>
            <h1
              className="text-5xl sm:text-6xl xl:text-7xl text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Get in Touch
            </h1>
            <div className="w-12 h-px bg-gray-300 mb-8 mx-auto" />
            <p
              className="leading-relaxed text-gray-500 mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
            >
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>
        </FadeInSection>

        {/* Form */}
        <FadeInSection delay={0.1}>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-8">

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase text-gray-400 mb-2 text-left"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputBase}
                  className="w-full bg-transparent border-0 border-b border-gray-200 pb-3 pt-1 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase text-gray-400 mb-2 text-left"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputBase}
                  className="w-full bg-transparent border-0 border-b border-gray-200 pb-3 pt-1 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase text-gray-400 mb-2 text-left"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={inputBase}
                  className="w-full bg-transparent border-0 border-b border-gray-200 pb-3 pt-1 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit */}
              <div className="pt-2 flex flex-col items-center gap-4">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="group inline-flex items-center gap-4 text-xs uppercase text-gray-900 hover:text-gray-500 transition-colors duration-300 disabled:opacity-40"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
                >
                  <span className="inline-block w-10 h-px bg-gray-900 group-hover:w-16 transition-all duration-500 group-hover:bg-gray-400" />
                  {status.submitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {status.info.msg && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-xs tracking-wide ${status.info.error ? 'text-red-400' : 'text-gray-400'}`}
                    style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.1em' }}
                  >
                    {status.info.msg}
                  </motion.p>
                )}
              </div>
            </form>
          </div>
        </FadeInSection>

        {/* Divider */}
        <FadeInSection delay={0.2}>
          <div className="w-12 h-px bg-gray-200 my-20 mx-auto" />
        </FadeInSection>

        {/* Contact details */}
        <FadeInSection delay={0.3}>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-4 h-4 text-gray-400 mb-1" strokeWidth={1.5} />
                <p
                  className="text-xs text-gray-400 uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
                >
                  {label}
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Closing note */}
        <FadeInSection delay={0.4}>
          <p
            className="mt-16 text-gray-400"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1rem', lineHeight: '1.7' }}
          >
            I typically respond within 24 hours. Looking forward to connecting.
          </p>
        </FadeInSection>

      </div>
    </div>
  )
}