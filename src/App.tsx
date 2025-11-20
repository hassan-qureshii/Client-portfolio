import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Faqs from "./pages/Faqs";
import Privacy from "./pages/Privacy";
import Flyers from "./pages/Flyers"
import LinkedIn from "./pages/LinkedIn";
import Logofolio from "./pages/Logofolio";
import SMPartner from "./pages/SMPartner";
import SMDesigns from "./pages/SMDesigns";
import Thumbnails from "./pages/Thumbnails";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/faq" element={<Faqs />} />
      <Route path="/terms" element={<Privacy />} />
      <Route path="/flyer" element={<Flyers />} />
      <Route path="/linkedin" element={<LinkedIn />} />
      <Route path="/logofolio" element={<Logofolio />} />
      <Route path="/smpartner" element={<SMPartner />} />
      <Route path="/smdesigns" element={<SMDesigns/>} />
      <Route path="/thumbnails" element={<Thumbnails/>} />
      
    </Routes>
  );
};

export default App;