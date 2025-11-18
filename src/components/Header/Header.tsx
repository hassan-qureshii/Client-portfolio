import { useState } from "react";
import { FaBars } from "react-icons/fa";
import HeaderLogo from "./HeaderLogo";
import DesktopNav from "./DesktopNav";
import WhatsAppButton from "./WhatsAppButton";
import MobileNav from "./MobileNav";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-22 bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] text-white shadow-md relative">
      <div className="h-full px-6 md:px-20 flex items-center justify-between md:justify-evenly">
        <HeaderLogo />
        <DesktopNav />
        <WhatsAppButton />

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <FaBars size={28} />
        </button>
      </div>

      {open && <MobileNav close={() => setOpen(false)} />}
    </header>
  );
};

export default Header;
