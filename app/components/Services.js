"use client"; // Since this is a UI component for the homepage

import Image from "next/image";

const services = [
  {
    title: "Daily Rentals",
    description: "Flexible car hire for personal or business use. Choose from our wide range of vehicles.",
    img: "/daily-rental.webp", 
  },
  {
    title: "PCO Rentals",
    description: "Get a fully insured PCO-licensed vehicle ready for Uber, Bolt, and other ride-hailing services.",
    img: "/pco-hire.png", 
  },
  {
    title: "Chauffeur Service",
    description: "Experience luxury with our professional chauffeur-driven cars for any occasion.",
    img: "/Chauffeur-Image.jpg", 
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-2 text-gray-600">Choose the perfect car hire option for your needs.</p>

        {/* Services Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
              <div className="relative h-48">
                <Image src={service.img} alt={service.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-500">{service.title}</h3>
                <p className="text-gray-700 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
