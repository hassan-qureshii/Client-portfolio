import { Link } from "react-router-dom";

const services = [
  {
    title: "Logo & Brand Identity Design",
    tag: "Premium",
    features: [
      "Custom Logo Design",
      "Full Brand Kit (logo, colors, typography, guidelines)",
    ],
    price: "$50",
  },
  {
    title: "Thumbnail & Fiverr Gig Images",
    tag: "Fast",
    features: ["YouTube Thumbnails", "Fiverr / Upwork Gig Covers"],
    price: "$15",
  },
  {
    title: "Social Media Designs",
    tag: "Popular",
    features: [
      "Instagram Posts & Stories",
      "Facebook Ads & Covers",
      "LinkedIn Banners",
    ],
    price: "$10",
  },
  {
    title: "Facebook / LinkedIn Branding",
    tag: "Pro",
    features: ["Full profile branding package (cover + post templates)"],
    price: "$70",
  },
  {
    title: "CV / Resume Design",
    tag: "Career",
    features: ["Professional modern CV layout", "Editable versions"],
    price: "$30",
  },
  {
    title: "Stationery Design",
    tag: "Corporate",
    features: ["Business Cards", "Letterheads", "Envelopes"],
    price: "$25",
  },
  {
    title: "Stationery Design",
    tag: "Corporate",
    features: ["Business Cards", "Letterheads", "Envelopes"],
    price: "$25",
  },
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
          <div
            key={index}
            className="bg-[#1e1e2f] text-white rounded-xl shadow-lg p-6 border border-[#670D7F] hover:border-[#D63D98] transition duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{service.title}</h2>
              <span className="text-sm px-2 py-1 rounded-full bg-gradient-to-r from-[#670D7F] to-[#D63D98] text-white font-semibold">
                {service.tag}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm mb-4 space-y-1">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-block text-sm font-medium text-purple-300 hover:text-white transition"
            >
              Request Quote →
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              Starting from <span className="font-bold">{service.price}</span>
            </p>
          </div>
        ))}
      </div>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/923349313075" // Replace with your actual number
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-block bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
      >
        💬 Chat on WhatsApp for Urgent Requests
      </a>
    </div>
  );
};

export default Services;