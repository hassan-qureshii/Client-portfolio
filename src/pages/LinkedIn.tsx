import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import linkedin1 from "../assets/linkedin/linkedin1.png";
import linkedin2 from "../assets/linkedin/linkedin2.png";
import linkedin3 from "../assets/linkedin/linkedin3.png";
import linkedin4 from "../assets/linkedin/linkedin4.png";
import linkedin5 from "../assets/linkedin/linkedin5.png";
import linkedin6 from "../assets/linkedin/linkedin6.png";
import linkedin7 from "../assets/linkedin/linkedin7.png";
import linkedin8 from "../assets/linkedin/linkedin8.png";

const linkedins = [
  linkedin5,
  linkedin1,
  linkedin3,
  linkedin7,
  linkedin2,
  linkedin6,
  linkedin4,
  linkedin8,
];

const LinkedIn = () => {
  const [selectedBanner, setSelectedBanner] = useState<string | null>(null);

  // ✅ Close modal with Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedBanner(null);
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
          LinkedIn Banners
        </h1>

        <p className="text-gray-700 text-lg">
          Professional LinkedIn banners designed to elevate your profile and make a lasting impression.
        </p>
      </motion.div>

      {/* Masonry Grid (like Logofolio) */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 px-6 columns-1 sm:columns-2 md:columns-2 gap-6 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {linkedins.map((banner, index) => (
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
              whileHover={{ scale: 1.02, rotate: 0.2 }}   // ✅ subtle hover
              whileTap={{ scale: 0.98 }}                  // ✅ gentle tap
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.01}> {/* ✅ softer tilt */}
                <div
                  onClick={() => setSelectedBanner(banner)}
                  className="w-full overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-all"
                >
                  <img
                    src={banner}
                    alt={`LinkedIn Banner ${index + 1}`}
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
        {selectedBanner && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBanner(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedBanner}
                alt="Selected LinkedIn Banner"
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

export default LinkedIn;