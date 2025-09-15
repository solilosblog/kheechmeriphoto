import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react'

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@studiovision.com",
      link: "mailto:hello@studiovision.com"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "New York, NY",
      link: null
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="contact" className={`py-20 md:py-32 ${
      darkMode ? 'bg-dark-bg' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-wide uppercase ${
            darkMode ? 'text-dark-primary' : 'text-light-primary'
          }`}>
            Get In Touch
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold ${
            darkMode ? 'text-dark-text' : 'text-light-text'
          }`}>
            Let's Create{' '}
            <span className={`${
              darkMode ? 'text-dark-accent' : 'text-light-accent'
            }`}>
              Together
            </span>
          </h2>
          <p className={`mt-6 text-lg leading-relaxed max-w-3xl mx-auto ${
            darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
          }`}>
            Ready to capture your special moments? Let's discuss your photography needs 
            and create something beautiful together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h3 className={`text-2xl md:text-3xl font-display font-bold mb-6 ${
                darkMode ? 'text-dark-text' : 'text-light-text'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  const content = (
                    <div className={`flex items-center p-6 rounded-xl glass ${
                      darkMode ? 'glass-dark' : ''
                    } card-hover`}>
                      <div className={`p-3 rounded-full mr-4 ${
                        darkMode ? 'bg-dark-primary' : 'bg-light-primary'
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${
                          darkMode ? 'text-dark-text' : 'text-light-text'
                        }`}>
                          {info.title}
                        </h4>
                        <p className={`${
                          darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
                        }`}>
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  )
                  
                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className={`text-lg font-display font-bold mb-4 ${
                darkMode ? 'text-dark-text' : 'text-light-text'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'bg-dark-surface hover:bg-dark-surface-variant text-dark-text-muted hover:text-dark-primary' 
                          : 'bg-light-surface hover:bg-light-surface-variant text-light-text-muted hover:text-light-primary'
                      }`}
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className={`p-8 rounded-2xl glass ${
              darkMode ? 'glass-dark' : ''
            }`}>
              <h3 className={`text-2xl md:text-3xl font-display font-bold mb-6 ${
                darkMode ? 'text-dark-text' : 'text-light-text'
              }`}>
                Send a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-dark-text' : 'text-light-text'
                  }`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'bg-dark-surface border-dark-border text-dark-text focus:ring-dark-primary focus:border-dark-primary' 
                        : 'bg-light-surface border-light-border text-light-text focus:ring-light-primary focus:border-light-primary'
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-dark-text' : 'text-light-text'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'bg-dark-surface border-dark-border text-dark-text focus:ring-dark-primary focus:border-dark-primary' 
                        : 'bg-light-surface border-light-border text-light-text focus:ring-light-primary focus:border-light-primary'
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-dark-text' : 'text-light-text'
                  }`}>
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'bg-dark-surface border-dark-border text-dark-text focus:ring-dark-primary focus:border-dark-primary' 
                        : 'bg-light-surface border-light-border text-light-text focus:ring-light-primary focus:border-light-primary'
                    }`}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Sessions</option>
                    <option value="event">Event Photography</option>
                    <option value="commercial">Commercial Photography</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-dark-text' : 'text-light-text'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-offset-2 resize-none ${
                      darkMode 
                        ? 'bg-dark-surface border-dark-border text-dark-text focus:ring-dark-primary focus:border-dark-primary' 
                        : 'bg-light-surface border-light-border text-light-text focus:ring-light-primary focus:border-light-primary'
                    }`}
                    placeholder="Tell me about your photography needs..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 ${
                    darkMode 
                      ? 'bg-dark-primary hover:bg-dark-primary/90 text-white' 
                      : 'bg-light-primary hover:bg-light-primary/90 text-white'
                  }`}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact