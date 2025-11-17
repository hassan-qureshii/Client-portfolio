import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const HeaderLogo = () => {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Logo"
        className="h-16 w-16 mb-2 border border-white rounded-full shadow-lg"
      />

    <motion.h1
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-2xl font-bold pl-4 "
>
  Amina Gulzar
</motion.h1>

    </div>
  );
};

export default HeaderLogo;