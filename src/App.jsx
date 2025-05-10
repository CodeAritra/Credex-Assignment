/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { FcOk, FcDocument } from "react-icons/fc";
import { MdBrightness2 } from "react-icons/md";
import { TbBrightnessUp } from "react-icons/tb";
import { easeInOut, motion } from "motion/react";

export default function SoftSellLandingPage() {
  const works = ["Upload License", "Get Valuation", "Get Paid"];
  const whyUS = [
    ["Fast Payments", "Get paid within 24 hours."],
    ["Secure Process", "Your data is encrypted and safe."],
    ["Best Valuations", "We offer top dollar for licenses."],
    ["Expert Support", "Guided help from real people."],
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-gray-800">
        <header className="flex justify-between p-4 ">
          <div className="text-xl font-bold text-softBlue dark:text-white">
            SoftSell
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 py-2 border-2 rounded-full text-md dark:border-gray-500 w-20 overflow-hidden"
          >
            <motion.div
              animate={{
                x: !darkMode ? 0 : 45,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              {darkMode ? <MdBrightness2 /> : <TbBrightnessUp />}
            </motion.div>
          </button>
        </header>

        {/* Hero Section */}
        <section className="bg-softBlue text-white py-20 px-6 text-center ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Turn Software into Cash
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Sell your software licenses in minutes with SoftSell.
          </p>
          <motion.button
            whileHover={{ scale: 1.2, transition: { ease: "easeInOut" } }}
            whileTap={{ scale: 0.8, transition: { ease: "easeInOut" } }}
            className="bg-white text-softBlue font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition "
          >
            Sell My Licenses
          </motion.button>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 text-center bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...works, ...works].map((step, i) => (
                <div
                  key={i}
                  className="min-w-[300px] p-6 bg-white shadow rounded dark:bg-gray-700"
                >
                  <div className="text-5xl mb-4 flex justify-center">
                    <FcDocument />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Step {(i % works.length) + 1} of the process made simple and
                    fast.
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 text-center dark:bg-gray-700">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...whyUS, ...whyUS].map(([title, desc], i) => (
                <div
                  key={i}
                  className="min-w-[250px] p-6 bg-gray-50 rounded shadow dark:bg-gray-900"
                >
                  <div className="text-4xl mb-3 flex justify-center">
                    <FcOk />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-gray-700 text-sm dark:text-gray-300">
                    {desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 bg-gray-100 text-center dark:bg-gray-800 overflow-hidden">
          <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                "Alice Smith",
                "IT Manager, TechCorp",
                "SoftSell made the process incredibly easy and quick!",
              ],
              [
                "Bob Johnson",
                "CTO, DevSolutions",
                "Amazing service and great support team. Highly recommended!",
              ],
            ].map(([name, role, quote], i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  transformOrigin: "center",
                  willChange: "transform",
                }}
                className="bg-white p-6 rounded shadow dark:bg-gray-700 cursor-pointer"
              >
                <p className="italic mb-4">"{quote}"</p>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {role}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-6 text-center dark:bg-gray-700">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto text-left space-y-4"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-600 "
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-600"
            />
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-600"
            />
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="">Select License Type</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Adobe">Adobe</option>
              <option value="Autodesk">Autodesk</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message"
              className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-600"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.1, transition: { ease: "easeInOut" } }}
              whileTap={{ scale: 0.8, transition: { ease: "easeInOut" } }}
              type="submit"
              className="bg-softBlue text-white px-6 py-3 rounded "
            >
              Submit
            </motion.button>
          </form>
        </section>

        <footer className="py-6 text-center text-sm text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
          © 2025 SoftSell. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
