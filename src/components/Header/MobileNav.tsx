import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navItems } from "./navItems";
import { FaTimes } from "react-icons/fa";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface MobileNavProps {
  close: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ close }) => {
  return (
    <div className="fixed top-0 right-0 h-screen w-1/2 bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] text-white shadow-lg z-50 flex flex-col justify-start">

      {/* Close button */}
      <div className="flex justify-end p-4">
        <button
          onClick={close}
          aria-label="Close mobile navigation"
          className="text-white text-lg font-bold"
        >
          <FaTimes size={28} />
        </button>
      </div>

      {/* Navigation items directly below X button */}
      <ul className="flex flex-col items-start px-6 space-y-6 text-lg font-semibold">
        {navItems
          .filter((item: NavItem) => item.label.toLowerCase() !== "services")
          .map((item: NavItem) => (
            <motion.li
              key={item.label}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 cursor-pointer hover:text-purple-200"
            >
              <item.icon />
              <Link
                to={item.href}
                onClick={close}
                className="hover:text-purple-200"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
      </ul>

      {/* WhatsApp button fixed at bottom */}
      <div className="mt-auto p-6">
        <a
          href="https://wa.me/1234567890"  // replace with your real WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-black text-[#f3f8fc] py-3 rounded-full font-semibold"
        >
          Chat on Whatsapp
        </a>
      </div>
    </div>
  );
};

export default MobileNav;