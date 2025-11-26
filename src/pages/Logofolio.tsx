import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import logo1 from "../assets/logofolio/logo1.png";
import logo2 from "../assets/logofolio/logo2.png";
import logo4 from "../assets/logofolio/logo4.png";
import logo5 from "../assets/logofolio/logo5.png";
import logo6 from "../assets/logofolio/logo6.png";
import logo7 from "../assets/logofolio/logo7.png";
import logo8 from "../assets/logofolio/logo8.png";
import logo9 from "../assets/logofolio/logo9.png";
import logo10 from "../assets/logofolio/logo10.png";
import logo11 from "../assets/logofolio/logo11.png";
import logo12 from "../assets/logofolio/logo12.png";
import logo13 from "../assets/logofolio/logo13.png";
import logo15 from "../assets/logofolio/logo15.png";
import logo16 from "../assets/logofolio/logo16.png";

const logos = [
  logo1, logo5, logo10, logo13, logo4, logo2,
  logo7, logo8, logo16, logo12 , logo6,
  logo9, logo11, logo15
];

const Logofolio = () => {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 scroll-smooth">
      <Header />

      {/* Hero Section */}
      <motion.div
        className="text-center my-10 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent mb-3">
          LogoFolio
        </h1>

        <p className="text-gray-700 text-lg">
          A collection of logos crafted with creativity & precision.
        </p>
      </motion.div>

      {/* Masonry Logo Grid */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 px-6 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
           <motion.div
  whileHover={{ scale: 1.02, rotate: 0.3 }}   // ✅ reduced hover transform
  whileTap={{ scale: 0.98 }}                  // ✅ gentler tap effect
  transition={{ type: "spring", stiffness: 250 }}
>
  <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.01}>  {/* ✅ softer tilt */}
    <div
      onClick={() => setSelectedLogo(logo)}
      className="w-full overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-all"
    >
      <img
        src={logo}
        alt={`Creative logo design ${index + 1}`}
        className="w-full object-contain p-4"
        loading="lazy"
      />
    </div>
  </Tilt>
</motion.div>

          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedLogo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLogo(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedLogo}
                className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Logofolio;