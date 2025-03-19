import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CarFleet = () => {
  const cars = [
    // PCO Cars
    {
      image: "/toyota-prius.webp", // Replace with actual image paths
      make: "Toyota",
      model: "Prius",
      year: 2020,
      type: "PCO",
    },
    {
      image: "/nissan-leaf1.png", // Replace with actual image paths
      make: "Nissan",
      model: "Leaf",
      year: 2021,
      type: "PCO",
    },
    // Daily Rental Cars
    {
      image: "/mercedes-benz-c-class.jpg", // Replace with actual image paths
      make: "Mercedes",
      model: "C Class",
      year: 2024,
      type: "Daily Rental",
    },
    {
      image: "/Eclass.jpg", // Replace with actual image paths
      make: "Mercedes",
      model: "E Class",
      year: 2024,
      type: "Daily Rental",
    },
    {
      image: "/5series.webp", // Replace with actual image paths
      make: "BMW",
      model: "5 Series",
      year: 2023,
      type: "Daily Rental",
    },
    // Chauffeur Cars
    {
      image: "/SClass.avif", // Replace with actual image paths
      make: "Mercedes",
      model: "S Class",
      year: 2024,
      type: "Chauffeur",
    },
    {
      image: "/7series.jpg", // Replace with actual image paths
      make: "BMW",
      model: "7 Series",
      year: 2024,
      type: "Chauffeur",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Car Fleet - 52J Car Hire</title>
        <meta
          name="description"
          content="Browse through our fleet of cars available for hire. We offer a variety of models to suit your needs."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-blue-500 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Our Premium Car Fleet</h1>
          <p className="text-xl mb-8">
            Choose from a wide selection of cars for hire, including PCO, daily rentals, and luxury chauffeur-driven vehicles.
          </p>
          <p className="text-lg">
            Whether you're looking for a vehicle for daily rentals, PCO hire, or chauffeur services, we are here to help.
          </p>
        </div>
      </section>

      {/* Car Fleet Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Car Fleet</h1>
          <p className="text-lg text-gray-700 mb-12">
            Explore our diverse fleet of cars available for hire. Whether you're looking for a PCO vehicle, a daily rental, or a luxury chauffeur-driven experience, we have options to suit every need and budget.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative w-full h-0 pb-[56.25%] md:pb-[50%] lg:pb-[60%]">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-800">{car.make} {car.model}</h2> {/* Reduced font size */}
                  <p className="text-gray-600 mb-2">Year: {car.year}</p>
                  <p className="text-sm text-gray-500">Type: {car.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CarFleet;
