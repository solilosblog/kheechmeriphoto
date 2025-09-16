import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      name: "Sarah & Tom",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 5,
      comment: "Our wedding photos were absolutely magical! Every moment captured with perfect artistry and emotion.",
      service: "Wedding",
      size: "large"
    },
    {
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      comment: "Beautiful family portraits that capture our love perfectly.",
      service: "Family",
      size: "small"
    },
    {
      name: "David Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      comment: "Professional headshots that elevated my career. The attention to detail and lighting was perfect.",
      service: "Corporate",
      size: "medium"
    },
    {
      name: "Lisa & James",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      comment: "Our engagement session was pure magic! Creative and romantic approach that told our story.",
      service: "Engagement",
      size: "small"
    },
    {
      name: "Amanda Foster",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 5,
      comment: "The maternity photoshoot exceeded all our expectations. Every image tells the story of this precious time in our lives with such beauty and care.",
      service: "Maternity",
      size: "large"
    },
    {
      name: "Robert Wilson",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      comment: "Event photography that captured every important moment flawlessly. Professional and unobtrusive service.",
      service: "Events",
      size: "medium"
    },
    {
      name: "Jennifer Clark",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      comment: "Amazing graduation photoshoot that captured this milestone perfectly.",
      service: "Graduation",
      size: "small"
    },
    {
      name: "Michael Torres",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      comment: "Corporate event coverage was exceptional. Every key moment documented with professional excellence.",
      service: "Corporate Events",
      size: "medium"
    },
    {
      name: "Sophie Martinez",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      comment: "The newborn photoshoot was perfect. Gentle approach and beautiful results that we'll treasure forever.",
      service: "Newborn Photography",
      size: "small"
    },
    {
      name: "Daniel Kim",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      comment: "Real estate photography that showcased our property perfectly. Highly professional service.",
      service: "Real Estate Photography",
      size: "medium"
    },
    {
      name: "Rachel Adams",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      comment: "Beautiful lifestyle photography that perfectly captured our everyday moments with artistic flair.",
      service: "Lifestyle Photography",
      size: "small"
    },
    {
      name: "Thomas Wright",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 5,
      comment: "Studio Vision delivered outstanding product photography for our brand launch. Every detail was captured with precision and creativity.",
      service: "Product Photography",
      size: "large"
    }
  ]

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-1 md:row-span-1'
      default:
        return 'md:col-span-1 md:row-span-1'
    }
  }

  const getImageHeight = (size) => {
    switch (size) {
      case 'large':
        return 'h-96'
      case 'medium':
        return 'h-64'
      default:
        return 'h-48'
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className={`py-20 md:py-32 ${
      darkMode ? 'bg-dark-surface' : 'bg-light-surface'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-wide uppercase ${
            darkMode ? 'text-dark-primary' : 'text-light-primary'
          }`}>
            Client Experiences
          </span>
          <h2 className={`mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold ${
            darkMode ? 'text-dark-text' : 'text-light-text'
          }`}>
            Love{' '}
            <span className={`${
              darkMode ? 'text-dark-accent' : 'text-light-accent'
            }`}>
              Stories
            </span>
          </h2>
          <p className={`mt-6 text-lg leading-relaxed max-w-3xl mx-auto ${
            darkMode ? 'text-dark-text-muted' : 'text-light-text-muted'
          }`}>
            Discover why couples, families, and businesses choose Studio Vision to capture their most important moments and create lasting visual memories.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid relative rounded-2xl group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 mb-4 md:mb-6"
            >
              <div className={`relative ${getImageHeight(testimonial.size)} overflow-hidden rounded-2xl`}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                  <div className="flex mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className={`text-sm ${testimonial.size === 'large' ? 'md:text-base' : ''} mb-3 leading-relaxed`}>
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm opacity-80">{testimonial.service}</p>
                    </div>
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-400 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className={`inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 magnetic ${
            darkMode 
              ? 'bg-dark-text text-dark-bg hover:bg-dark-text/90' 
              : 'bg-light-text text-light-bg hover:bg-light-text/90'
          }`}>
            View More Stories
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials