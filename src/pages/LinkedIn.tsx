import Header from '../components/Header/Header'
import { motion } from "framer-motion"

const LinkedIn = () => {
  return (
    <div>
      <Header/>

      {/* Hero Section */}
      <motion.div 
        className="text-center my-10 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent mb-4 text-center">
          LinkedIn Banners
        </h1>

        <motion.p 
          className="text-lg font-bold text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Stand Out Professionally
        </motion.p>
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="max-w-3xl mx-auto text-center mt-12 p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-700 text-lg">
          Professional LinkedIn banners designed to elevate your profile and make a lasting impression. 
          Hover over this section to feel the subtle interaction ✨
        </p>
      </motion.div>
    </div>
  )
}

export default LinkedIn