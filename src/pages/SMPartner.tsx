import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Tilt from "react-parallax-tilt";

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

  // ✅ Close modal with Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
          Social Media Partner
        </h1>

        <p className="text-gray-700 text-lg">
          Creative Partner For Brands
        </p>
      </motion.div>

      {/* Interactive Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center px-5"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-700 text-lg">
          Collaborating with brands to craft impactful campaigns, engaging visuals, and lasting digital presence.
        </p>
      </motion.div>

      {/* Partners Grid (Masonry style) */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 px-6 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {medias.map((img, index) => (
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
              whileHover={{ scale: 1.02, rotate: 0.3 }}   // ✅ subtle hover
              whileTap={{ scale: 0.98 }}                  // ✅ gentle tap
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.01}>
                <div
                  onClick={() => setSelectedImage(img)}
                  className="w-full overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-all"
                >
                  <img
                    src={img}
                    alt={`Media Partner ${index + 1}`}
                    className="w-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
              </Tilt>
            </motion.div>
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Selected Media Partner"
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

export default SMPartner;