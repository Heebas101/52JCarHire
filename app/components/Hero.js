import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero_image.jpg" 
          alt="Luxury Car Hire"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-50"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Drive in Style, Rent with Confidence
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200">
          Premium car hire services tailored for your needs. Choose from{" "}
          <span className="text-blue-400 font-semibold">Daily Rental</span>,{" "}
          <span className="text-blue-400 font-semibold">PCO Rental</span>, and{" "}
          <span className="text-blue-400 font-semibold">Chauffeur Drive</span>.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/fleet"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            View Fleet
          </a>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
