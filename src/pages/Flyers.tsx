import { useState } from "react";
import Header from "../components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from '../components/Footer'

import flyer1 from "../assets/flyer/flyer1.png";
import flyer2 from "../assets/flyer/flyer2.png";
import flyer3 from "../assets/flyer/flyer3.png";
import flyer4 from "../assets/flyer/flyer4.png";
import flyer5 from "../assets/flyer/flyer5.png";
import flyer6 from "../assets/flyer/flyer6.png";
import flyer8 from "../assets/flyer/flyer8.png";
import flyer11 from "../assets/flyer/flyer11.png";
import flyer12 from "../assets/flyer/flyer12.png";
import flyer13 from "../assets/flyer/flyer13.png";
import flyer14 from "../assets/flyer/flyer14.png";
import flyer15 from "../assets/flyer/flyer15.png";
import flyer16 from "../assets/flyer/flyer16.png";
import flyer17 from "../assets/flyer/flyer17.png";
import flyer18 from "../assets/flyer/flyer18.png";

const flyers = [flyer16, flyer13, flyer14, flyer15, flyer17, flyer18, flyer12 , flyer1, flyer2, flyer3, flyer4, flyer5, flyer6, flyer8, flyer11 ];


const Flyers = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

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
          Flyers, Cards & Covers Designs
        </h1>

        <motion.p
          className="text-lg font-bold text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Visuals That Speak
        </motion.p>
      </motion.div>

      {/* Interactive Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center my-12 p-6 "
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-black text-lg">
          Every flyer, card, and cover is designed to grab attention and deliver your message with impact.
          Hover over this section to feel the subtle interaction.
        </p>
      </motion.div>

      {/* Flyers Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {flyers.map((flyer, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedFlyer(flyer)}
          >
            <img
              src={flyer}
              alt={`Flyer ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedFlyer && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFlyer(null)}
          >
            <motion.img
              src={selectedFlyer}
              alt="Selected Flyer"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10">
        <Footer/>
      </div>
    </div>
  );
};

export default Flyers;