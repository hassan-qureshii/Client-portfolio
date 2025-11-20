import { motion } from "framer-motion"
import Header from "../components/Header/Header"
import Footer from "../components/Footer"

const Privacy = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center my-10 px-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent mb-4">
          Terms & Privacy
        </h1>

        <p className="text-lg font-semibold mb-10 max-w-3xl mx-auto">
          Welcome to{" "}
          <span className="font-bold bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] bg-clip-text text-transparent">
            Amina Gulzar
          </span>{" "}
          — creative space! Please read these terms and our privacy policy carefully before exploring or working with me.
        </p>
      </motion.div>

      {/* Terms & Privacy Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto text-center transition-transform hover:scale-[1.01] duration-300"
      >
        {/* Accordion-style Terms */}
        <details className="mb-6 cursor-pointer">
          <summary className="text-2xl font-bold mb-2 text-[#670D7F]">Terms & Conditions</summary>
          <p className="text-gray-700 mb-4">
            By accessing and using this portfolio or requesting design services, you agree to these terms.
          </p>
          <ul className="text-gray-800 space-y-2 text-left max-w-2xl mx-auto">
            <li>• Use designs only for the agreed purpose or license.</li>
            <li>• All creative works remain intellectual property unless stated otherwise.</li>
            <li>• Payment and delivery terms will be discussed before starting any project.</li>
            <li>• Misuse or resale of designs without permission is prohibited.</li>
          </ul>
        </details>

        {/* Accordion-style Privacy */}
        <details className="mb-6 cursor-pointer">
          <summary className="text-2xl font-bold mb-2 text-[#670D7F]">Privacy Policy</summary>
          <p className="text-gray-700 mb-4">
            Your trust means everything. I value your privacy and keep your shared information safe and confidential.
          </p>
          <div className="text-gray-800 space-y-3 text-left max-w-2xl mx-auto">
            <p><strong>1. What’s Collected:</strong> Name, email, and project details you share when contacting or collaborating.</p>
            <p><strong>2. How It’s Used:</strong> Communication, previews, updates, and newsletters (if opted in).</p>
            <p><strong>3. Data Safety:</strong> All client information is handled with care and never shared with third parties.</p>
            <p><strong>4. Your Rights:</strong> You can request deletion or updates to your data anytime.</p>
          </div>
        </details>

        {/* Creative Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#670D7F]">Creative Disclaimer</h2>
          <p className="text-gray-700 mb-6 max-w-2xl text-center">
            Every design is crafted with originality and care. I’m not responsible for any misuse or misrepresentation of my work.
          </p>
        </motion.div>

        {/* Divider before footer */}
        <hr className="border-t border-gray-300 my-6" />
        <p className="text-sm text-gray-500">© All Rights Reserved</p>
      </motion.div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}

export default Privacy