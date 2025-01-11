import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2 } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getBgColor = () => {
    if (!isHomePage || isScrolled) return 'bg-slate-50/80 backdrop-blur-sm text-gray-700'
    return 'bg-transparent text-white'
  }

  const menuItems = [
    { text: 'HOME', path: '/' },
    { text: 'ABOUT ME', path: '/about' },
    { text: 'PORTFOLIO', path: '/portfolio' },
    { text: 'BLOG', path: '/blog' },
    { text: 'CONTACT', path: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getBgColor()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="w-8 h-8" />
              <span className="text-lg font-semibold tracking-wider">SANDESH</span>
            </Link>
          </div>
          
          {/* Rest of the navbar code remains the same */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 ${
                !isHomePage || isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  !isHomePage || isScrolled 
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://linkedin.com" className={!isHomePage || isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}>
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className={!isHomePage || isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}>
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            !isHomePage || isScrolled ? 'bg-slate-50/80' : 'bg-black/80'
          }`}>
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100/10 ${
                  !isHomePage || isScrolled
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}