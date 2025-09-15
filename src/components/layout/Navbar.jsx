import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Camera } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? `glass ${darkMode ? 'glass-dark' : ''} backdrop-blur-lg`
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <Camera className={`h-8 w-8 ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`} />
            <span className={`text-xl md:text-2xl font-display font-bold ${
              darkMode ? 'text-dark-text' : 'text-light-text'
            }`}>
              Studio Vision
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    darkMode 
                      ? 'text-dark-text-muted hover:text-dark-text hover:bg-dark-surface-variant' 
                      : 'text-light-text-muted hover:text-light-text hover:bg-light-surface-variant'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                darkMode 
                  ? 'bg-dark-surface hover:bg-dark-surface-variant text-dark-text' 
                  : 'bg-light-surface hover:bg-light-surface-variant text-light-text'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${
                  darkMode 
                    ? 'text-dark-text hover:bg-dark-surface-variant' 
                    : 'text-light-text hover:bg-light-surface-variant'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden glass ${darkMode ? 'glass-dark' : ''} backdrop-blur-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  darkMode 
                    ? 'text-dark-text-muted hover:text-dark-text hover:bg-dark-surface-variant' 
                    : 'text-light-text-muted hover:text-light-text hover:bg-light-surface-variant'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar