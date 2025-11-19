import { motion } from 'framer-motion';
import main from '../assets/Testimonials/main.png';
import Testimonial1 from '../assets/Testimonials/Testimonial1.png';
import Testimonial2 from '../assets/Testimonials/Testimonial2.png';
import Testimonial3 from '../assets/Testimonials/Testimonial3.png';
import Testimonial4 from '../assets/Testimonials/Testimonial4.png';
import Testimonial5 from '../assets/Testimonials/Testimonial5.png';
import Testimonial6 from '../assets/Testimonials/Testimonial6.png';

const Testimonials = [
  Testimonial1,
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Testimonial5,
  Testimonial6
];

const Reviews = () => {
  return (
    <div className="my-12 px-6 w-full bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] text-white">
      
      {/* Heading */}
      <div className="text-center py-10">
        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our Happy Clients
        </motion.h1>

        <motion.p
          className="py-4 text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          See what our clients are saying about us!
        </motion.p>
      </div>

      {/* Flex container */}
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
        
        {/* Left Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={main} 
            alt="Main testimonial" 
            className="w-full max-w-lg h-auto object-contain mb-10 md:max-w-[40rem] md:ml-[100px]" 
          />
        </motion.div>

        {/* Swipeable Testimonials */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center max-h-[300px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex gap-4 px-4 py-2 overflow-x-scroll no-scrollbar cursor-grab snap-x snap-mandatory w-full max-w-[900px] h-full mb-5 md:mb-0"
            whileTap={{ cursor: 'grabbing' }}
          >
            {Testimonials.map((img, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[75%] md:w-[35%] flex justify-center snap-start"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <img
                  src={img}
                  alt={`Testimonial ${index + 1}`}
                  className="rounded-xl shadow-lg w-full h-full object-cover focus:outline-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;