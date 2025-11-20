import { useState } from "react";
import Header from "../components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

import logo1 from "../assets/logofolio/logo1.png";
import logo2 from "../assets/logofolio/logo2.png";
import logo3 from "../assets/logofolio/logo3.png";
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
  logo1, logo2, logo3, logo7, logo6, logo5,
  logo4, logo12, logo16, logo8, logo10, logo9,
  logo13, logo11, logo15
];

const Logofolio = () => {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <motion.div
        className="text-center my-10 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent mb-4 text-center">
          LogoFolio
        </h1>

        <motion.p
          className="text-lg font-bold text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Where Brands Begin
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
          Explore a curated collection of logos designed to capture identity, vision, and creativity.
          Hover over this section to feel the subtle interaction ✨
        </p>
      </motion.div>

      {/* Logos Grid */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="w-full aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedLogo(logo)}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedLogo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLogo(null)}
          >
            <motion.img
              src={selectedLogo}
              alt="Selected Logo"
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Logofolio;