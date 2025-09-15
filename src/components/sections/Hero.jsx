import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Capturing Life's Beautiful Moments",
      subtitle: "Professional Photography Services"
    },
    {
      url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Wedding Photography Excellence",
      subtitle: "Your Special Day, Perfectly Preserved"
    },
    {
      url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Portrait & Lifestyle Sessions",
      subtitle: "Authentic Stories Through Images"
    },
    {
      url: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Event Photography",
      subtitle: "Every Moment Matters"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImages[currentSlide].url})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.h1 
            key={`title-${currentSlide}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow"
          >
            {heroImages[currentSlide].title}
          </motion.h1>
          
          <motion.p 
            key={`subtitle-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-body mb-8 text-shadow"
          >
            {heroImages[currentSlide].subtitle}
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="glass glass-strong px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 magnetic">
              View Portfolio
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:bg-white hover:text-black magnetic">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 glass glass-strong p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 glass glass-strong p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-24 right-4 md:right-8 z-20 glass glass-strong p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
      >
        <Play size={20} className={`transition-all duration-300 ${isAutoPlaying ? 'opacity-100' : 'opacity-50'}`} />
      </button>
    </section>
  )
}

export default Hero