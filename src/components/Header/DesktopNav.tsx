import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navItems } from "./navItems";
import React from "react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-6 font-semibold">
        {navItems.map((item: NavItem) => (
          <motion.li
            key={item.label}
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex items-center gap-1 cursor-pointer hover:text-purple-300"
          >
            <item.icon />
            <Link to={item.href} className="hover:text-purple-300">
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;