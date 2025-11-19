import { motion } from "framer-motion";
import logo from '../../assets/logo.png';

const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <img src={logo} alt="logo" className="rounded-full h-15 w-15 md:h-20 md:w-20" />
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold"
      >
        Amina Gulzar
      </motion.h1>
    </div>
  );
};

export default HeaderLogo;