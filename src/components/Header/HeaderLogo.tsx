import { motion } from "framer-motion";

const HeaderLogo = () => {
  return (
    <div className="flex items-center">
  <motion.h1
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-2xl md:text-3xl font-bold pl-4 "
>
  Amina Gulzar
</motion.h1>

    </div>
  );
};

export default HeaderLogo;