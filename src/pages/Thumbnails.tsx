import Header from '../components/Header/Header'
import { motion } from "framer-motion"
import Footer from '../components/Footer'

import thumbnail1 from '../assets/thumbnails/thumbnail1.png';
import thumbnail2 from '../assets/thumbnails/thumbnail2.png';
import thumbnail3 from '../assets/thumbnails/thumbnail3.png';
import thumbnail4 from '../assets/thumbnails/thumbnail4.png';
import thumbnail5 from '../assets/thumbnails/thumbnail5.png';
import thumbnail6 from '../assets/thumbnails/thumbnail6.png';
import thumbnail7 from '../assets/thumbnails/thumbnail7.png';
import thumbnail8 from '../assets/thumbnails/thumbnail8.png';
import thumbnail9 from '../assets/thumbnails/thumbnail9.png';
import thumbnail10 from '../assets/thumbnails/thumbnail10.png'
import thumbnail12 from '../assets/thumbnails/thumbnail12.png';
import thumbnail13 from '../assets/thumbnails/thumbnail13.png';

const thumbnails = [
  thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6, thumbnail7,
  thumbnail8, thumbnail9, thumbnail10, thumbnail12, thumbnail13
];

const Thumbnails = () => {
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
          thumbnails Designs
        </h1>

        <motion.p 
          className="text-lg font-bold text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          thumbnails That Stand Out
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
          Eye-catching thumbnails designed to grab attention and boost clicks. 
          Hover over this section to feel the subtle interaction ✨
        </p>
      </motion.div>

      {/* thumbnails Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {thumbnails.map((thumb, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10">
        <Footer/>
      </div>
    </div>
  )
}

export default Thumbnails;