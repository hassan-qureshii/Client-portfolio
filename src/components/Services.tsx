import { Link } from "react-router-dom";
import flyer from "../assets/flyer.png";
import linkedin from "../assets/linkedin.png";
import logofolio from "../assets/logofolio.png";
import smdesigns from "../assets/smdesigns.png";
import smpartner from "../assets/smpartner.png";
import thumbnails from "../assets/thumbnails.png";

const services = [
  { img: logofolio, path: "/logofolio", title: "Logofolio" },
  { img: smdesigns, path: "/smdesigns", title: "Social Media Designs" },
  { img: linkedin, path: "/linkedin", title: "LinkedIn Branding" },
  { img: thumbnails, path: "/thumbnails", title: "YouTube Thumbnails" },
  { img: flyer, path: "/flyer", title: "Flyer Design" },
  { img: smpartner, path: "/smpartner", title: "Social Media Partnership" },
];

const Services = () => {
  return (
    <div className="my-16 w-full px-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent mb-4 text-center">
        Services Offered
      </h1>

      <p className="text-center text-lg font-semibold mb-10 max-w-3xl">
        Professional design services by{" "}
        <span className="font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent">
          Amina Gulzar
        </span>{" "}
        — clean, modern and tailored to your brand.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[90rem]">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className="w-full rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <p className="text-center font-semibold mt-2">{service.title}</p>
          </Link>
        ))}
      </div>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/923349313075"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-block bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
      >
        Chat on WhatsApp for Urgent Requests
      </a>
    </div>
  );
};

export default Services;