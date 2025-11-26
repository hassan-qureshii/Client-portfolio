import logo from '../assets/logo.png'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Resume from '../assets/Resume.pdf';

const Hero = () => {
  return (
    <div className="w-full sm:min-h-[75vh] md:min-h-[70vh] flex items-center justify-center bg-[#f3f8fc] px-6 md:px-16">
      {/* flex-col-reverse ensures image shows first on mobile */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10">

        {/* Left Side - Text */}
        <motion.div 
          className="flex-1 text-center md:text-left font-poppins"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold ">
           <b>Hi</b> I'm Amina Gulzar 
          </h1>

          <p className="mt-4 text-gray-700 text-lg md:text-xl">
            Where creativity meets strategy! I help businesses grow with impactful visuals, engaging social media, and professional websites.
          </p>

          <motion.p 
            className="text-xl md:text-2xl font-bold text-gray-600 mt-6 h-10 md:h-12"
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
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.p>

          {/* Action Buttons */}
          <div className="mt-6 md:mt-10 flex flex-wrap gap-6 justify-center md:justify-start">
            {/* Hire Me - Gradient Button */}
            <motion.button
              onClick={() => window.open('https://wa.me/923349313075', '_blank')} 
              className="px-8 py-2 bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] text-white text-lg md:text-xl font-extrabold rounded-[10px] shadow-xl hover:scale-105 hover:shadow-2xl transition-transform transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>

            {/* Download CV Button */}
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = Resume;            // imported file path
                link.download = 'Resume.pdf';  // filename for download
                link.click();
              }}
              className="font-bold text-lg md:text-xl text-gray-800 hover:underline cursor-pointer transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download My CV
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="p-2 rounded-full bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] shadow-[0_10px_30px_rgba(103,13,127,0.4)]"
          >
            <img 
              src={logo} 
              alt="Amina Gulzar" 
              className="h-64 w-64 md:h-[22rem] md:w-[22rem] rounded-full bg-white p-2"
            />
          </div>
        </motion.div>

      </div>
    </div>
  )
}
  
export default Hero