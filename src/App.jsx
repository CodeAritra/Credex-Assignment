import React from "react";
import { FcOk, FcDocument } from "react-icons/fc";

const App = () => {
 

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-softBlue text-white py-20  text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Turn Software into Cash
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Sell your software licenses in minutes with SoftSell.
        </p>
        <button className="bg-white text-softBlue font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
          Sell My Licenses
        </button>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Upload License", "Get Valuation", "Get Paid"].map((step, i) => (
            <div key={i} className="p-6 bg-white shadow rounded">
              <div className="text-5xl mb-3 flex justify-center">
                <FcDocument />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step}</h3>
              <p className="text-gray-600">
                Step {i + 1} of the process made simple and fast.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Fast Payments", "Get paid within 24 hours."],
            ["Secure Process", "Your data is encrypted and safe."],
            ["Best Valuations", "We offer top dollar for licenses."],
            ["Expert Support", "Guided help from real people."],
          ].map(([title, desc], i) => (
            <div key={i} className="p-6 bg-gray-50 rounded shadow">
              <div className="text-4xl mb-3 flex justify-center">
                <FcOk />
              </div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-100 text-center">
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
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="italic mb-4">"{quote}"</p>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="max-w-xl mx-auto text-left space-y-4">
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
          />
          <input
            name="company"
            placeholder="Company"
            className="w-full p-3 border rounded"
          />
          <select
            name="licenseType"
            required
            className="w-full p-3 border rounded"
          >
            <option value="">Select License Type</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Adobe">Adobe</option>
            <option value="Autodesk">Autodesk</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            className="w-full p-3 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-softBlue text-white px-6 py-3 rounded "
          >
            Submit
          </button>
        </form>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-50">
        © 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
