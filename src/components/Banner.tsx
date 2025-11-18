import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <div className="w-full my-6 bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] py-16 px-4">
      <div className="grid md:grid-cols-3 gap-10 items-center text-center">

        {/* Years of Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-extrabold text-[#f3f8fc]">
            <CountUp end={6} duration={3} />+
          </h1>
          <p className="text-white mt-2 text-lg">Years Of Experience</p>
        </motion.div>

        {/* Projects Completed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-extrabold text-[#f3f8fc]">
            <CountUp end={200} duration={3} />+
          </h1>
          <p className="text-white mt-2 text-lg">Projects Completed</p>
        </motion.div>

        {/* Client Satisfaction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-3xl font-extrabold text-[#f3f8fc]">
            <CountUp end={99} duration={3} />%
          </h1>
          <p className="text-white mt-2 text-lg">Client Satisfaction</p>
        </motion.div>

      </div>
    </div>
  )
}

export default Banner
