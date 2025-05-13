import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons

import upload from "./images/upload.png";
import trusted from "./images/trusted.jpg";
import getpaid from "./images/getpaid.png";
import fast from "./images/fast_transaction.png";
import bestrate from "./images/bestrate.png";
import getvalidation from "./images/getvalidation.jpg";
import secure from "./images/secureprocess.png";
import aiIcon from "./images/ai_image.jpg"; // Replace this with your chatbot icon
import ChatWidget from "./ChatWidget.jsx"; // Ensure this is in the same directory or adjust the path
import SellLicenseForm from "./SellLicenseForm.jsx";
const charAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 1.0,
    },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SoftSellLandingPage() {
  const [animKey, setAnimKey] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false); // State for blur effect

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const textColor = isDarkMode ? "text-gray-100" : "text-[#2D2D2D]";
  const bgColor = isDarkMode ? "bg-[#121212]" : "bg-white";
  const cardBg = isDarkMode ? "bg-[#1E1E1E]" : "bg-white";
  const sectionBg = isDarkMode ? "bg-[#1A1A1A]" : "bg-[#E8F0FE]";
  const primaryText = isDarkMode ? "text-white" : "text-[#1A73E8]";

  // Handle the Sell My License button click
  const handleSellLicenseClick = () => {
    setIsBlurred(true);
  };

  return (
    <div className={`font-sans ${textColor} ${bgColor} min-h-screen overflow-x-hidden`}>
      {/* Background blur when Sell License button is clicked */}
   {isBlurred && <SellLicenseForm onClose={() => setIsBlurred(false)} />}

      {/* Hero Section */}
      <section className="bg-[#1A73E8] text-white py-20 px-6 text-center">
        <motion.h1
          key={animKey}
          className="text-4xl md:text-5xl font-bold mb-4 flex justify-center flex-wrap"
          initial="hidden"
          animate="visible"
        >
          {"Unlock Value from Unused Software Licenses".split("").map((char, i) => (
            <motion.span key={i} custom={i} variants={charAnimation} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          Turn dormant software into dollars with SoftSell
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <button className="bg-white text-[#1A73E8] font-semibold px-6 py-3 rounded-full hover:bg-[#E8F0FE] transition duration-300 hover:scale-105 hover:shadow-lg">
            Get a Quote
          </button>
          <button
            onClick={handleSellLicenseClick}
            className="bg-white text-[#1A73E8] font-semibold px-6 py-3 rounded-full hover:bg-[#E8F0FE] transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            Sell My License
          </button>
        </motion.div>

        {/* Toggle Dark Mode Button with Sun/Moon Icon */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#1A73E8] shadow-lg hover:scale-110 transition"
        >
          {isDarkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
        </button>
      </section>

      {/* How It Works */}
      <motion.section
        className={`py-16 px-6 ${sectionBg} text-center ${textColor}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{ title: "Upload License", src: upload }, { title: "Get Valuation", src: getvalidation }, { title: "Get Paid", src: getpaid }].map(
            ({ title, src }, idx) => (
              <motion.div
                key={idx}
                className={`${cardBg} rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="mb-4">
                  <img src={src} alt={title} className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className={`py-16 px-6 text-center ${textColor}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-10">Why Choose SoftSell?</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[{ src: fast, title: "Fast Transactions", desc: "Quick and easy license liquidation." }, { src: secure, title: "Secure Process", desc: "Your data and licenses are safe with us." }, { src: bestrate, title: "Best Market Rates", desc: "Get top dollar for your unused licenses." }, { src: trusted, title: "Trusted Experts", desc: "Years of experience in software resale." }].map(
            ({ src, title, desc }, idx) => (
              <motion.div
                key={idx}
                className={`${cardBg} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="mb-3">
                  <img src={src} alt={title} className="w-12 h-12 mx-auto object-contain" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm">{desc}</p>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className={`py-16 px-6 ${sectionBg} text-center ${textColor}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[{ name: "Emily Chen", role: "IT Director", company: "TechNova Inc.", review: "SoftSell made it incredibly easy to recover value from our legacy software. Highly recommend!" }, { name: "David Lopez", role: "Procurement Manager", company: "BrightWave Solutions", review: "Fast, secure, and great customer service. SoftSell helped us monetize unused tools in days." }].map(
            ({ name, role, company, review }, idx) => (
              <motion.div
                key={idx}
                className={`${cardBg} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Quote className={`w-6 h-6 ${primaryText} mb-2 mx-auto`} />
                <p className="italic mb-4">"{review}"</p>
                <div className="font-semibold">{name}</div>
                <div className="text-sm">{role}, {company}</div>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

            {/* Contact Form */}
      <motion.section
        className={`py-16 px-6 text-center ${textColor}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
        <motion.form
          className="max-w-xl mx-auto grid gap-4 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {["Name", "Email", "Company"].map((placeholder, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <input
                type={placeholder === "Email" ? "email" : "text"}
                placeholder={placeholder}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition hover:shadow-md hover:scale-105"
              />
            </motion.div>
          ))}

          <motion.div variants={fadeInUp}>
            <select
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition hover:shadow-md hover:scale-105"
            >
              <option value="">Select License Type</option>
              <option value="Single User">Single User</option>
              <option value="Multi User">Multi User</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <textarea
              placeholder="Message"
              rows={4}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition hover:shadow-md hover:scale-105"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-[#1A73E8] text-white py-3 rounded-lg hover:bg-[#155ACF] transition duration-300"
            variants={fadeInUp}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.section>


      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
