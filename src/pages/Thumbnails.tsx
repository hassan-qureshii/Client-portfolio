import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import thumbnail1 from "../assets/thumbnails/thumbnail1.png";
import thumbnail2 from "../assets/thumbnails/thumbnail2.png";
import thumbnail3 from "../assets/thumbnails/thumbnail3.png";
import thumbnail4 from "../assets/thumbnails/thumbnail4.png";
import thumbnail5 from "../assets/thumbnails/thumbnail5.png";
import thumbnail6 from "../assets/thumbnails/thumbnail6.png";
import thumbnail7 from "../assets/thumbnails/thumbnail7.png";
import thumbnail8 from "../assets/thumbnails/thumbnail8.png";
import thumbnail9 from "../assets/thumbnails/thumbnail9.png";
import thumbnail10 from "../assets/thumbnails/thumbnail10.png";
import thumbnail12 from "../assets/thumbnails/thumbnail12.png";
import thumbnail13 from "../assets/thumbnails/thumbnail13.png";

const thumbnails = [
  thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6, thumbnail7,
  thumbnail8, thumbnail9, thumbnail10, thumbnail12, thumbnail13
];

const Thumbnails = () => {
  const [selectedThumb, setSelectedThumb] = useState<string | null>(null);

  // ✅ Close modal with Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedThumb(null);
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
          Thumbnails Designs
        </h1>

        <p className="text-gray-700 text-lg">
          Eye-catching thumbnails designed to grab attention and boost clicks.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 px-6 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {thumbnails.map((thumb, index) => (
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
                  onClick={() => setSelectedThumb(thumb)}
                  className="w-full overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-all"
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
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
        {selectedThumb && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedThumb(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedThumb}
                alt="Selected Thumbnail"
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

export default Thumbnails;
