import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 transition transform hover:scale-105">
              <img
                className="h-10 w-auto"
                src="/images/logo.svg"
                alt="EastKen Engineering Logo"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}>
              Home
            </Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname === '/about' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}>
              About
            </Link>
            <Link to="/services" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname === '/services' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}>
              Services
            </Link>
            <Link to="/portfolio" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname === '/portfolio' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}>
              Portfolio
            </Link>
            <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname === '/contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}>
              Contact
            </Link>
            <Link to="/request-quote" className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
              Request Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
            Home
          </Link>
          <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === '/about' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
            About
          </Link>
          <Link to="/services" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === '/services' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
            Services
          </Link>
          <Link to="/portfolio" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === '/portfolio' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
            Portfolio
          </Link>
          <Link to="/contact" className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === '/contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
            Contact
          </Link>
          <Link to="/request-quote" className="block px-3 py-2 mt-4 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 text-center">
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}