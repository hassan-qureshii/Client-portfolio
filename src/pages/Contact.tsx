import Header from "../components/Header/Header";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaEnvelope, FaWhatsapp, FaBehance, FaLinkedin } from "react-icons/fa";
import Footer from '../components/Footer'

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // for validation feedback

  const handleSendWhatsApp = () => {
    if (!fullName || !email || !phone || !subject || !message) {
      setError("⚠️ Please fill in all required fields before sending.");
      return;
    }

    setError(""); // clear error if all fields are filled

    const phoneNumber = "+923349313075"; 
    const text = `Hello, my name is ${fullName}.
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-[#f3f8fc]">
      <Header />

      <div className="max-w-[100rem] mx-auto px-10 py-10 md:py-20 grid md:grid-cols-[35%_55%] gap-10 bg-[#f3f8fc] md:bg-white rounded-none md:rounded-xl md:my-20">
        
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="md:text-sm font-semibold text-center md:text-start uppercase text-2xl bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent">
            Get In Touch
          </h3>

          <h1 className="text-4xl text-center md:text-left font-bold leading-tight">
            Let’s Talk For your <br />
            <span className="bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent">
              Next Projects
            </span>
          </h1>

          <p className="text-center md:text-start">
            Let’s Turn your ideas into reality.
          </p>

          {/* Features */}
          <div className="space-y-4 mt-6">
            {[
              "6+ Years of Experience",
              "Professional Graphic Designer",
              "Social Media Marketer",
              "Custom Support",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 ">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </span>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 text-2xl mx-3 md:mx-5">
            <a href="mailto:reshamjan046@gmail.com" target="_blank" rel="noopener noreferrer" >
              <FaEnvelope className="text-black"/>
            </a>
            <a href="https://wa.me/923349313075" target="_blank" rel="noopener noreferrer" >
              <FaWhatsapp className="text-black" />
            </a>
            <a href="https://www.behance.net/AminaGulzar" target="_blank" rel="noopener noreferrer" >
              <FaBehance className="text-black" />
            </a>
            <a href="https://www.linkedin.com/in/amina-gulzar-341846284/" target="_blank" rel="noopener noreferrer" >
              <FaLinkedin className="text-black" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SECTION - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name *"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-[#1a1a1a] p-5 rounded-xl w-full outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D63D98] transition"
            />

            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1a1a1a] p-5 rounded-xl w-full outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D63D98] transition"
            />

            <input
              type="text"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-[#1a1a1a] p-5 rounded-xl w-full outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D63D98] transition"
            />

            <input
              type="text"
              placeholder="Subject *"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#1a1a1a] p-5 rounded-xl w-full outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D63D98] transition"
            />
          </div>

          <textarea
            placeholder="Write message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="bg-[#1a1a1a] p-5 rounded-xl w-full outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-[#D63D98] transition"
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-800 font-medium">{error}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.00 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendWhatsApp}
            className="bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] transition p-5 rounded-xl font-semibold w-full text-center text-white"
          >
            Send Us Message →
          </motion.button>
        </motion.div>

      </div>
      <Footer/>
    </div>
  );
};

export default Contact;