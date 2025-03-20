"use client"; // Ensure this file is treated as a client-side component

import { Mail, Phone, Clock, MessageCircle } from "lucide-react"; // Icons for a clean UI
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head'; // Add this import

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - 52J Car Hire</title>
        <meta
          name="description"
          content="Get in touch with 52J Car Hire for quotes, general inquiries, or assistance with your car rental needs."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className=" relative bg-gradient-to-r from-red-500 to-blue-500 text-white py-20 z-10">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-8">
            Get in touch with us for quotes, general inquiries, or assistance with your car rental needs.
          </p>
          <p className="text-lg">
            Whether you need a vehicle for daily rentals, PCO hire, or chauffeur services, we are here to help.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            We are here to assist with your car rental needs. Reach out for quotes, availability, or any general inquiries.
          </p>

          <div className="flex justify-center">
            {/* Contact Details */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center text-gray-700">
                  <Mail size={24} className="text-red-500 mr-4" />
                  <span className="text-lg font-medium">Email: </span>
                  <a
                    href="mailto:52jcarhire@gmail.com"
                    className="ml-2 text-blue-600 hover:text-blue-800 transition"
                  >
                    52jcarhire@gmail.com
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center text-gray-700">
                  <MessageCircle size={24} className="text-blue-500 mr-4" />
                  <span className="text-lg font-medium">WhatsApp: </span>
                  <a
                    href="https://wa.me/+447647468009"
                    className="ml-2 text-blue-600 hover:text-blue-800 transition"
                  >
                    +44 7647 468009
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center text-gray-700">
                  <Phone size={24} className="text-gray-700 mr-4" />
                  <span className="text-lg font-medium">Telephone: </span>
                  <a
                    href="tel:01782354852"
                    className="ml-2 text-blue-600 hover:text-blue-800 transition"
                  >
                    01782 354852
                  </a>
                </div>

                {/* Opening Hours */}
                <div className="flex items-center text-gray-700">
                  <Clock size={24} className="text-gray-700 mr-4" />
                  <span className="text-lg font-medium">Opening Hours: </span>
                  <span className="ml-2">Mon-Sun: 9am - 6pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;



