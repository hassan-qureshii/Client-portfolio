import CountUp from "react-countup";
import { motion } from "framer-motion";

const Banner = () => {
  // ✨ Variants for smooth fade + scale
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // children animate one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full my-6 bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] py-16 px-4">
      <motion.div
        className="grid md:grid-cols-3 gap-10 items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Years of Experience */}
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-3xl font-extrabold text-[#f3f8fc]"
            whileHover={{ scale: 1.1, color: "#FFD700" }} // hover glow
          >
            <CountUp end={6} duration={4} />+
          </motion.h1>
          <p className="text-white mt-2 text-lg">Years Of Experience</p>
        </motion.div>

        {/* Projects Completed */}
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-3xl font-extrabold text-[#f3f8fc]"
            whileHover={{ scale: 1.1, color: "#00FFFF" }}
          >
            <CountUp end={200} duration={4} />+
          </motion.h1>
          <p className="text-white mt-2 text-lg">Projects Completed</p>
        </motion.div>

        {/* Client Satisfaction */}
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-3xl font-extrabold text-[#f3f8fc]"
            whileHover={{ scale: 1.1, color: "#32CD32" }}
          >
            <CountUp end={99} duration={4} />%
          </motion.h1>
          <p className="text-white mt-2 text-lg">Client Satisfaction</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
