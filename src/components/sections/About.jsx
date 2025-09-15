import { motion } from 'framer-motion'
import { Camera, Award, Users, Heart } from 'lucide-react'

const About = ({ darkMode }) => {
  const stats = [
    { icon: Camera, number: "500+", label: "Projects Completed" },
    { icon: Award, number: "15+", label: "Awards Won" },
    { icon: Users, number: "1000+", label: "Happy Clients" },
    { icon: Heart, number: "10+", label: "Years Experience" }
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
    <section id="about" className={`py-20 md:py-32 ${
      darkMode ? 'bg-dark-surface' : 'bg-light-surface'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Photographer portrait"
                className="w-full h-96 md:h-128 object-cover rounded-2xl shadow-2xl"
              />
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl glass ${
                darkMode ? 'glass-dark' : ''
              } flex items-center justify-center`}>
                <Camera className={`w-12 h-12 ${
                  darkMode ? 'text-dark-primary' : 'text-light-primary'
                }`} />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="mb-8">
              <span className={`text-sm font-semibold tracking-wide uppercase ${
                darkMode ? 'text-dark-primary' : 'text-light-primary'
              }`}>
                About Studio Vision
              </span>
              <h2 className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold ${
                darkMode ? 'text-dark-text' : 'text-light-text'
              }`}>
                Capturing Stories Through{' '}
                <span className={`${
                  darkMode ? 'text-dark-accent' : 'text-light-accent'
                }`}>
                  Art
                </span>
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
              }`}>
                Welcome to Studio Vision, where every photograph tells a unique story. 
                I'm passionate about capturing the authentic moments that matter most to you, 
                from intimate weddings to corporate events and personal portraits.
              </p>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
              }`}>
                With over a decade of experience in professional photography, 
                I combine technical expertise with artistic vision to create 
                timeless images that you'll treasure forever.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`p-6 rounded-xl glass ${
                      darkMode ? 'glass-dark' : ''
                    } text-center card-hover`}
                  >
                    <IconComponent className={`w-8 h-8 mx-auto mb-3 ${
                      darkMode ? 'text-dark-primary' : 'text-light-primary'
                    }`} />
                    <div className={`text-2xl font-bold mb-1 ${
                      darkMode ? 'text-dark-text' : 'text-light-text'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-sm ${
                      darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About