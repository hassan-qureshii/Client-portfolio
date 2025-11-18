import Header from "../components/Header/Header";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
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
    <div className="w-full min-h-screen bg-[#f3f8fc] text-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-sm uppercase tracking-wide text-gray-300">
            Get In Touch
          </h3>

          <h1 className="text-4xl font-bold leading-tight">
            Let’s Talk For your <br />
            <span className="text-purple-400">Next Projects</span>
          </h1>

          <p className="text-gray-400">
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
              <div key={i} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </span>
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
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

            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name *"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-[#1a1a1a] p-4 rounded-xl w-full outline-none text-white placeholder-gray-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1a1a1a] p-4 rounded-xl w-full outline-none text-white placeholder-gray-500"
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-[#1a1a1a] p-4 rounded-xl w-full outline-none text-white placeholder-gray-500"
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject *"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#1a1a1a] p-4 rounded-xl w-full outline-none text-white placeholder-gray-500"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Write message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="bg-[#1a1a1a] p-4 rounded-xl w-full outline-none text-white placeholder-gray-500"
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSendWhatsApp}
            className="bg-purple-500 hover:bg-purple-600 transition p-4 rounded-xl font-semibold w-full text-center"
          >
            Send Us Message →
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;