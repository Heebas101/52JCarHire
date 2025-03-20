import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - 52J Car Hire</title>
        <meta
          name="description"
          content="Learn more about 52J Car Hire, our mission, and our commitment to providing top-quality car rental services."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-red-500 to-blue-500 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">About 52J Car Hire</h1>
          <p className="text-xl mb-8">
            Your trusted partner for daily rentals, PCO hire, and luxury chauffeur services.
          </p>
          <p className="text-lg">
            At 52J Car Hire, we take pride in offering affordable, reliable, and high-quality car rental services for every occasion.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wide Range of Vehicles</h3>
              <p className="text-lg text-gray-600">
                Whether you need a car for daily use, PCO hire, or a luxury chauffeur service, we have the perfect vehicle for your needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Competitive Pricing</h3>
              <p className="text-lg text-gray-600">
                We offer competitive prices with no hidden fees, ensuring you get great value for your rental.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Customer Service</h3>
              <p className="text-lg text-gray-600">
                Our dedicated customer support team is always ready to assist with your booking and any inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Commitment to You</h2>
          <p className="text-lg text-gray-600 mb-6 text-left">
            We are committed to providing a seamless and hassle-free car rental experience. From the moment you book your car to the moment you return it, we are here to ensure you receive the best service.
          </p>
          <p className="text-lg text-gray-600 text-left">
            Whether you are a business professional, rideshare driver, or just in need of a car for the day, we cater to your specific requirements with ease.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;


