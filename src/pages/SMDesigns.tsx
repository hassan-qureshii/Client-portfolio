import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

// ✅ Import social media designs
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
  social1, social14, social13, social4, social17,
  social8, social7, social15,
  social11, social6, social20, social9, social3, social16,
  social10, social5, social18, social12
];

const SMDesigns = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          Social Media Designs
        </h1>

        <p className="text-gray-700 text-lg">
          Engaging posts, stories, and banners designed to boost clicks, shares, and conversions.
        </p>
      </motion.div>

      {/* Masonry Grid (same as Logofolio) */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 px-6 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {socials.map((img, index) => (
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
  <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.01}>  {/* ✅ reduced tilt scale */}
    <div
      onClick={() => setSelectedImage(img)}
      className="w-full overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-all"
    >
      <img
        src={img}
        alt={`Social Design ${index + 1}`}
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
                alt="Selected Social Design"
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

export default SMDesigns;