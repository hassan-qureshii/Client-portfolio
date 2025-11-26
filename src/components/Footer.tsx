import { Link } from "react-router-dom";
import {
  FaHome,
  FaFolderOpen,
  FaQuestionCircle,
  FaFileContract,
  FaInfoCircle,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

import { SiFiverr, SiUpwork } from "react-icons/si";

const Footer = () => {
  // Explore links array
  const exploreLinks = [
    { name: "Home", icon: FaHome, path: "/" },
    { name: "About", icon: FaInfoCircle, path: "/about" },
    { name: "Contact", icon: FaEnvelope, path: "/contact" },
    { name: "FAQs", icon: FaQuestionCircle, path: "/faq" },
    { name: "Terms & Conditions", icon: FaFileContract, path: "/terms" },
  ];

  // Social media + new icons (without href)
  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/amina-gulzar-341846284/" },
    { icon: FaInstagram, href: "https://www.instagram.com/amina454096/?utm_source=qr&igsh=MTNzN2tleGozN3Izcg%3D%3D#" },
    { icon: FaBehance, href: "https://www.behance.net/AminaGulzar" },

    // Added (NO href as requested)
    { icon: SiUpwork, href: null },
    { icon: SiFiverr, href: null },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold mb-4">Amina Gulzar</h2>
          <p className="text-sm leading-relaxed">
            Creative Designer crafting brand stories and digital art that inspires. 
            Combining emotion, precision, and innovation through design.
          </p>
        </div>

        {/* Explore Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold mb-4">Explore</h2>
          <ul className="space-y-3 text-sm">
            {exploreLinks.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-2 hover:underline cursor-pointer"
              >
                <link.icon /> <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
          <div className="flex gap-4 mb-4 text-xl">
            {socialLinks.map((social, index) => (
              social.href ? (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 cursor-pointer border rounded-full border-white p-1"
                >
                  <social.icon size={18} />
                </a>
              ) : (
                <div
                  key={index}
                  className="hover:text-gray-200 cursor-pointer border rounded-full border-white p-1"
                >
                  <social.icon size={18} />
                </div>
              )
            ))}
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm border-t border-white/30 pt-4">
        © 2025 Amina Gulzar — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;