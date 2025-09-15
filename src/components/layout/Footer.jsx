import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Heart } from 'lucide-react'

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    "Wedding Photography",
    "Portrait Sessions",
    "Event Photography",
    "Commercial Photography"
  ]

  const contactInfo = [
    { icon: Mail, text: "hello@studiovision.com", href: "mailto:hello@studiovision.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "New York, NY", href: null }
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={`pt-16 pb-8 ${
      darkMode ? 'bg-dark-surface' : 'bg-light-surface'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Camera className={`h-8 w-8 ${
                darkMode ? 'text-dark-primary' : 'text-light-primary'
              }`} />
              <span className={`text-2xl font-display font-bold ${
                darkMode ? 'text-dark-text' : 'text-light-text'
              }`}>
                Studio Vision
              </span>
            </div>
            <p className={`mb-6 leading-relaxed ${
              darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
            }`}>
              Capturing life's beautiful moments with artistic vision and professional excellence. 
              Creating timeless memories that you'll treasure forever.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-dark-surface-variant hover:bg-dark-primary text-dark-text-muted hover:text-white' 
                        : 'bg-light-surface-variant hover:bg-light-primary text-light-text-muted hover:text-white'
                    }`}
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className={`text-lg font-display font-bold mb-6 ${
              darkMode ? 'text-dark-text' : 'text-light-text'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`transition-colors duration-200 hover:text-opacity-80 ${
                      darkMode 
                        ? 'text-dark-text-muted hover:text-dark-primary' 
                        : 'text-light-text-muted hover:text-light-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-display font-bold mb-6 ${
              darkMode ? 'text-dark-text' : 'text-light-text'
            }`}>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className={`${
                    darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
                  }`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-display font-bold mb-6 ${
              darkMode ? 'text-dark-text' : 'text-light-text'
            }`}>
              Contact Info
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const content = (
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-5 h-5 ${
                      darkMode ? 'text-dark-primary' : 'text-light-primary'
                    }`} />
                    <span className={`${
                      darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
                    }`}>
                      {info.text}
                    </span>
                  </div>
                )
                
                return (
                  <li key={index}>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`transition-colors duration-200 ${
                          darkMode 
                            ? 'hover:text-dark-primary' 
                            : 'hover:text-light-primary'
                        }`}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
          darkMode ? 'border-dark-border' : 'border-light-border'
        }`}>
          <p className={`text-sm mb-4 md:mb-0 ${
            darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
          }`}>
            © {currentYear} Studio Vision. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-1 text-sm">
            <span className={`${
              darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
            }`}>
              Made with
            </span>
            <Heart className={`w-4 h-4 ${
              darkMode ? 'text-red-400' : 'text-red-500'
            }`} />
            <span className={`${
              darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
            }`}>
              for photography
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer