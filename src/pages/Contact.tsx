import Header from "../components/Header/Header";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaBehance, FaUser } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
    const phoneNumber = "+923349313075";
    const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent 
          bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] 
          hover:scale-105 transition-transform duration-300">
          Let's Work Together
        </h1>
        <p className="max-w-xl mx-auto text-lg text-black">
          I’d love to hear about your next project. Share your ideas and let’s
          create something exceptional.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-center gap-12 py-10 px-6 rounded-lg">
        {/* Contact Info */}
        <div className="max-w-md text-black">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text 
            bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98]">Get in Touch</h2>
          <p className="mb-6  text-transparent bg-clip-text 
            bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] font-bold">
            Whether you’re looking to collaborate or just say hello, my inbox is
            always open. Let’s discuss your project details and make it shine.
          </p>

          {/* Contact Options */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <FaEnvelope size={18} className="text-[#33A853] font-bold" />
              <a href="mailto:reshamjan046@gmail.com" className="text-lg hover:underline text-[#33A853] font-bold">
                Send me an Email
              </a>
            </div>

            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <FaWhatsapp size={18} className="text-[#20BC61] font-bold" />
              <a
                href="https://wa.me/923349313075"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline text-[#20BC61] font-bold"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <FaLinkedin size={18} className="text-[#146CC4] font-bold"/>
              <a
                href="https://www.linkedin.com/in/amina-gulzar-341846284/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline text-[#146CC4] font-bold"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <FaBehance size={18} className="text-[#003ECB] font-bold" />
              <a
                href="https://www.behance.net/AminaGulzar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline text-[#003ECB] font-bold"
              >
                Explore my Behance
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text 
            bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98]">
            Send a Message
          </h2>
          <div className="space-y-4">
            {/* Name Input */}
            <div className="flex items-center  bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] rounded-md px-4 py-2">
              <FaUser className="text-[#f3f8fc] mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 text-white text-sm focus:outline-none font-bold"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] rounded-md px-4 py-2">
              <FaEnvelope className="text-[#f3f8fc] mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-white text-sm focus:outline-none font-bold"
              />
            </div>

            {/* Message Input */}
            <div className="flex items-start bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] rounded-lg px-4 py-2">
              <FaEnvelope className="text-[#f3f8fc] mr-3 mt-1" />
              <textarea
                rows={3}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 text-white text-sm focus:outline-none font-bold resize-none"
              />
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-[#D63D98] transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;