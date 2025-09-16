import { motion } from 'framer-motion'
import { Heart, Users, Camera, Calendar, Check } from 'lucide-react'

const Services = ({ darkMode }) => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      subtitle: "Plan Your",
      description: "Is your big day outside, on a private property or in a warehouse style venue? We are the outdoor & private property experts!",
      features: ["Full day coverage", "Engagement session", "Online gallery", "Print release"],
      price: "Starting at $2,500",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      layout: "left"
    },
    {
      icon: Users,
      title: "Portrait Sessions",
      subtitle: "Capture Your",
      description: "Professional portraits for individuals, families, and couples in studio or natural outdoor settings with authentic storytelling.",
      features: ["1-2 hour session", "Multiple outfit changes", "High-res digital files", "Print options"],
      price: "Starting at $350",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      layout: "right"
    },
    {
      icon: Calendar,
      title: "Event Photography",
      subtitle: "Document Your",
      description: "Event production is our jam, we're known for our years of corporate and public event production experience. You know, like, trade shows, festivals, night markets, galas, auctions, golf tournaments. To name a few.",
      features: ["Event coverage", "Candid moments", "Quick turnaround", "Commercial license"],
      price: "Starting at $500",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      layout: "left"
    },
    {
      icon: Camera,
      title: "Commercial Photography",
      subtitle: "Elevate Your",
      description: "Professional commercial photography for businesses, products, and marketing materials that tell your brand story with visual excellence.",
      features: ["Product photography", "Headshots", "Branding images", "Usage rights"],
      price: "Starting at $750",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      layout: "right"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className={`py-20 md:py-32 ${
      darkMode ? 'bg-dark-bg' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className={`text-sm font-semibold tracking-wide uppercase ${
            darkMode ? 'text-dark-primary' : 'text-light-primary'
          }`}>
            Our Offerings
          </span>
          <h2 className={`mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold ${
            darkMode ? 'text-dark-text' : 'text-light-text'
          }`}>
            Photography{' '}
            <span className={`${
              darkMode ? 'text-dark-accent' : 'text-light-accent'
            }`}>
              Services
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isLeft = service.layout === "left"
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <div className={`${isLeft ? 'lg:order-1' : 'lg:order-2'} order-2`}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 md:h-128 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl transition-all duration-300 group-hover:bg-opacity-10" />
                    <div className="absolute top-8 left-8">
                      <div className="p-4 rounded-full glass glass-strong">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} order-1`}>
                  <div className="mb-6">
                    <span className={`text-sm font-semibold tracking-wide uppercase ${
                      darkMode ? 'text-dark-primary' : 'text-light-primary'
                    }`}>
                      {service.subtitle}
                    </span>
                    <h3 className={`mt-2 text-3xl md:text-4xl lg:text-5xl font-display font-bold ${
                      darkMode ? 'text-dark-text' : 'text-light-text'
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  <p className={`text-lg md:text-xl leading-relaxed mb-8 ${
                    darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
                  }`}>
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center p-4 rounded-lg glass ${
                          darkMode ? 'glass-dark' : ''
                        }`}
                      >
                        <div className={`p-1 rounded-full mr-3 ${
                          darkMode ? 'bg-dark-primary' : 'bg-light-primary'
                        }`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-dark-text' : 'text-light-text'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className={`text-2xl md:text-3xl font-bold ${
                        darkMode ? 'text-dark-accent' : 'text-light-accent'
                      }`}>
                        {service.price}
                      </span>
                    </div>
                    <button className={`px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 magnetic ${
                      darkMode 
                        ? 'bg-dark-primary hover:bg-dark-primary/90 text-white' 
                        : 'bg-light-primary hover:bg-light-primary/90 text-white'
                    }`}>
                      Get Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services