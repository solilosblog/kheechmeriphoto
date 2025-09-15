import { motion } from 'framer-motion'
import { Heart, Users, Camera, Calendar } from 'lucide-react'

const Services = ({ darkMode }) => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Capture your special day with elegant, timeless wedding photography that tells your unique love story.",
      features: ["Full day coverage", "Engagement session", "Online gallery", "Print release"],
      price: "Starting at $2,500",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Users,
      title: "Portrait Sessions",
      description: "Professional portraits for individuals, families, and couples in studio or natural outdoor settings.",
      features: ["1-2 hour session", "Multiple outfit changes", "High-res digital files", "Print options"],
      price: "Starting at $350",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Calendar,
      title: "Event Photography",
      description: "Document your corporate events, parties, and celebrations with professional event photography.",
      features: ["Event coverage", "Candid moments", "Quick turnaround", "Commercial license"],
      price: "Starting at $500",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Camera,
      title: "Commercial Photography",
      description: "Professional commercial photography for businesses, products, and marketing materials.",
      features: ["Product photography", "Headshots", "Branding images", "Usage rights"],
      price: "Starting at $750",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
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
    <section id="services" className={`py-20 md:py-32 ${
      darkMode ? 'bg-dark-surface' : 'bg-light-surface'
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
            Photography Services
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold ${
            darkMode ? 'text-dark-text' : 'text-light-text'
          }`}>
            What I{' '}
            <span className={`${
              darkMode ? 'text-dark-accent' : 'text-light-accent'
            }`}>
              Offer
            </span>
          </h2>
          <p className={`mt-6 text-lg leading-relaxed max-w-3xl mx-auto ${
            darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
          }`}>
            Professional photography services tailored to capture your most important moments 
            and create lasting memories you'll treasure forever.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-2xl overflow-hidden glass ${
                  darkMode ? 'glass-dark' : ''
                } card-hover group`}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute top-6 left-6">
                    <div className={`p-3 rounded-full glass glass-strong`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <span className="text-white font-bold text-lg">
                      {service.price}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className={`text-xl md:text-2xl font-display font-bold mb-4 ${
                    darkMode ? 'text-dark-text' : 'text-light-text'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`mb-6 leading-relaxed ${
                    darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
                  }`}>
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center text-sm ${
                          darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          darkMode ? 'bg-dark-primary' : 'bg-light-primary'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-dark-primary hover:bg-dark-primary/90 text-white' 
                      : 'bg-light-primary hover:bg-light-primary/90 text-white'
                  }`}>
                    Learn More
                  </button>
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