import { useState } from "react";
import Header from "../components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

import media1 from "../assets/smpartner/media1.png";
import media2 from "../assets/smpartner/media2.png";
import media3 from "../assets/smpartner/media3.png";
import media4 from "../assets/smpartner/media4.png";
import media5 from "../assets/smpartner/media5.png";
import media6 from "../assets/smpartner/media6.png";
import media7 from "../assets/smpartner/media7.png";
import media8 from "../assets/smpartner/media8.png";
import media9 from "../assets/smpartner/media9.png";
import media10 from "../assets/smpartner/media10.png";
import media11 from "../assets/smpartner/media11.png";
import media12 from "../assets/smpartner/media12.png";
import media13 from "../assets/smpartner/media13.png";
import media14 from "../assets/smpartner/media14.png";
import media15 from "../assets/smpartner/media15.png";

const medias = [
  media1, media2, media3, media4, media9,
  media5, media8, media7, media6, media10,
  media15, media12, media13, media14, media11
];

const SMPartner = () => {
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
          Social Media Partner
        </h1>

        <motion.p
          className="text-lg font-bold text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Creative Partner For Brands
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
          Collaborating with brands to craft impactful campaigns, engaging visuals, and lasting digital presence.
          Hover over this section to feel the subtle interaction ✨
        </p>
      </motion.div>

      {/* Partners Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {medias.map((img, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden rounded-lg shadow-lg cursor-pointer bg-[linear-gradient(145deg,_#670D7F,_#851988,_#D63D98)] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Media Partner ${index + 1}`}
              className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105"
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
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={selectedImage}
                alt="Selected Media Partner"
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default SMPartner;