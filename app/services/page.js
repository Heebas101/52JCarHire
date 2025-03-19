import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services - 52J Car Hire</title>
        <meta
          name="description"
          content="Explore the range of services offered by 52J Car Hire, including daily rentals, PCO hire, and luxury chauffeur services."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-blue-500 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl mb-8">
            Discover the variety of car hire services we offer, designed to meet your needs. Whether you're looking for a short-term rental, a vehicle for rideshare, or a luxury chauffeur service, 52J Car Hire has got you covered.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-700 text-left">
              At 52J Car Hire, we specialize in providing flexible and affordable car hire services to suit your needs. Whether you require a daily rental, a PCO hire for work, or a luxury chauffeur experience, we ensure that each service is tailored to provide you with the best possible experience.
            </p>
          </div>

          {/* Daily Rental */}
          <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-8 mb-16">
            <div className="w-full lg:w-1/2">
              <img
                src="/daily-rental.webp" 
                alt="Daily Rental"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Daily Rental</h3>
              <p className="text-lg text-gray-700 mb-4">
                Need a car for a day or two? Our daily rental service offers a wide selection of well-maintained vehicles for both short-term and long-term use. Whether you're visiting the city or need a temporary vehicle for work, we have affordable and flexible rental options.
              </p>
              <div className="text-lg text-gray-700 space-y-2">
                <p>• Wide selection of cars for different needs</p>
                <p>• Affordable daily rates</p>
                <p>• No hidden fees</p>
                <p>• Easy online booking and quick delivery</p>
              </div>
            </div>
          </div>

          {/* PCO Hire */}
          <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-8 mb-16">
            <div className="w-full lg:w-1/2">
              <img
                src="/pco-hire.png" 
                alt="PCO Hire"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">PCO Hire</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our PCO (Private Hire Car Operator) hire service is perfect for drivers working with rideshare platforms such as Uber, Bolt, and Lyft. We offer fully licensed and insured vehicles to ensure your ride-sharing experience is smooth, safe, and compliant with all regulations.
              </p>
              <div className="text-lg text-gray-700 space-y-2">
                <p>• Fully licensed and insured vehicles</p>
                <p>• Ideal for rideshare drivers</p>
                <p>• Flexible rental terms</p>
                <p>• Affordable rates for daily or weekly hire</p>
              </div>
            </div>
          </div>

          {/* Chauffeur Service */}
          <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-8 mb-16">
            <div className="w-full lg:w-1/2">
              <img
                src="/Chauffeur-Image.jpg" // Replace with your own image
                alt="Chauffeur Service"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Chauffeur Service</h3>
              <p className="text-lg text-gray-700 mb-4">
                For those seeking a more luxurious experience, our chauffeur service offers you a professional driver and a premium vehicle for any occasion. Whether it’s for business, a special event, or airport transfers, we provide a comfortable and elegant ride that exceeds your expectations.
              </p>
              <div className="text-lg text-gray-700 space-y-2">
                <p>• Professional and courteous drivers</p>
                <p>• Luxury vehicles for comfort and style</p>
                <p>• Available for special events, airport transfers, and more</p>
                <p>• Customized packages to suit your needs</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
