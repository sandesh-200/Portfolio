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
    { text: 'Home', path: '/' },
    { text: 'About Me', path: '/about' },
    { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getBgColor()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="w-8 h-8" />
              <span className="text-lg font-serif font-semibold tracking-wider">SANDESH</span>
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
                className={`text-md font-bold font-serif transition-colors ${
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
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/sandesh1011/"
    target="_blank"
    rel="noopener noreferrer"
    className={!isHomePage || isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}
  >
    <span className="sr-only">LinkedIn</span>
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/sandesh-200"
    target="_blank"
    rel="noopener noreferrer"
    className={!isHomePage || isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}
  >
    <span className="sr-only">GitHub</span>
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.469-2.381 1.237-3.221-.124-.304-.536-1.528.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.648.243 2.872.119 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.103.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
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
                className={`block px-3 py-2 rounded-md text-base font-medium font-serif hover:bg-gray-100/10 ${
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