import { motion } from 'framer-motion';

const Reviews = () => {
  return (
    <div className="my-12 px-4 w-full bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] text-white">
      <div className="text-center py-10">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-white">Our Happy Clients</span>
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
    </div>
  );
};

export default Reviews;