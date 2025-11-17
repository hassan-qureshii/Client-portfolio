import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => window.open("https://wa.me/923349313075", "_blank")}
      className="hidden md:flex items-center gap-2 bg-[#791585] px-4 py-2 rounded-full shadow-md hover:scale-105"
    >
      <FaWhatsapp size={20} />+92 334 9313075
    </button>
  );
};

export default WhatsAppButton;