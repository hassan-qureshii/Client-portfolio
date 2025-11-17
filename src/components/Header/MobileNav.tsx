import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navItems } from "./navItems";
import React from "react";

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
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col items-center justify-center">
      {/* Close button */}
      <button
        onClick={close}
        className="absolute top-4 right-4 text-white text-lg font-bold"
      >
        ✕
      </button>

      {/* Navigation items */}
      <ul className="space-y-6 text-lg font-semibold text-white">
        {navItems.map((item: NavItem) => (
          <motion.li
            key={item.label}
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex items-center gap-2 cursor-pointer hover:text-purple-300"
          >
            <item.icon />
            <Link to={item.href} onClick={close} className="hover:text-purple-300">
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;