import { useState } from "react";
import Header from "../components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

import social1 from "../assets/smdesign/social1.png";
import social3 from "../assets/smdesign/social3.png";
import social4 from "../assets/smdesign/social4.png";
import social5 from "../assets/smdesign/social5.png";
import social6 from "../assets/smdesign/social6.png";
import social7 from "../assets/smdesign/social7.png";
import social8 from "../assets/smdesign/social8.png";
import social9 from "../assets/smdesign/social9.png";
import social10 from "../assets/smdesign/social10.png";
import social11 from "../assets/smdesign/social11.png";
import social12 from "../assets/smdesign/social12.png";
import social13 from "../assets/smdesign/social13.png";
import social14 from "../assets/smdesign/social14.png";
import social15 from "../assets/smdesign/social15.png";
import social16 from "../assets/smdesign/social16.png";
import social17 from "../assets/smdesign/social17.png";
import social18 from "../assets/smdesign/social18.png";
import social20 from "../assets/smdesign/social20.png";

const socials = [
  social1, social7, social3, social4, social5,
  social6, social9, social8,
  social11, social10, social12, social13, social14, social15,
  social16, social17, social18, social20
];

const SMDesigns = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          Social Media Designs
        </h1>

        <motion.p
          className="text-lg font-bold text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Visuals That Convert
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
          Engaging posts, stories, and banners designed to boost clicks, shares, and conversions. 
          Hover over this section to feel the subtle interaction ✨
        </p>
      </motion.div>

      {/* Images Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {socials.map((img, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Social Design ${index + 1}`}
              className="w-full h-80 object-contain transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected Social Design"
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

export default SMDesigns;