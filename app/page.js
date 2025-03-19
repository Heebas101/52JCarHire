import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
export default function Home() {
  return (
    <div className="bg-gray-100">
    <Navbar/>
    <Hero/>
    <Services/>
    <Footer/>
  </div>
  );
}
