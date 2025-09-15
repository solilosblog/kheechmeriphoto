import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxScroll = ({ images, darkMode }) => {
  const gridRef = useRef(null)
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"]
  })

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const third = Math.ceil(images.length / 3)
  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <div
      className="h-[40rem] items-start overflow-y-auto w-full rounded-xl"
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-6 md:gap-10 py-20 md:py-40 px-4 md:px-10">
        <div className="grid gap-6 md:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              className="group cursor-pointer"
            >
              <img
                src={el}
                className="h-60 md:h-80 w-full object-cover object-center rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                height="400"
                width="400"
                alt="gallery image"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="grid gap-6 md:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
              className="group cursor-pointer"
            >
              <img
                src={el}
                className="h-60 md:h-80 w-full object-cover object-center rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                height="400"
                width="400"
                alt="gallery image"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="grid gap-6 md:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="group cursor-pointer"
            >
              <img
                src={el}
                className="h-60 md:h-80 w-full object-cover object-center rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                height="400"
                width="400"
                alt="gallery image"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ParallaxScroll