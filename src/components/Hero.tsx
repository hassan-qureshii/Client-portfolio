import logo from '../assets/logo.png'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className="w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-[#f3f8fc]">
      <div className="flex flex-col justify-center items-center text-center">

        {/* Profile Image with Gradient Border + Hover Animation */}
        <motion.div
          className="p-1.5 rounded-full bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] shadow-[0_10px_30px_rgba(103,13,127,0.4)]"
        >
          <img 
            src={logo} 
            alt="Amina Gulzar" 
            className="h-60 w-60 md:h-70 md:w-70 rounded-full bg-white p-1"
          />
        </motion.div>

        {/* Heading with Fade-in Animation */}
        <motion.div 
          className="text-center font-poppins mt-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold flex flex-wrap justify-center gap-2">
            <span className="text-black">Hi, I'm</span>
            <span className="bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent">
              Amina Gulzar
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with Typing Animation */}
        <motion.p 
          className="text-2xl font-bold md:text-2xl text-gray-600 mt-6 h-10 md:h-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typewriter
            words={[
              'Graphics Designer',
              'Video Editor',
              'Social Media Handler',
              'Digital Art & Branding',
              'Motion & Graphic Design for Business Growth',
              'Co-Founder of Digital Era of Information Technology (DEIT)'
            ]}
            loop={Infinity} // infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.p>

        {/* Download CV Button */}
        <button 
          onClick={() => window.open('/Esaar_Fatima_CV.pdf', '_blank')} 
          className="mt-8 px-8 py-4 bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] text-white text-xl md:text-2xl font-extrabold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-transform transition-shadow whitespace-nowrap"
        >
          Download My CV
        </button>

      </div>
    </div>
  )
}

export default Hero