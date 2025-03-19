import { Mail, Phone, Clock, MessageCircle } from "lucide-react"; // Clean icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="flex items-center mt-2">
              <Mail size={18} className="mr-2" /> 52jcarhire@gmail.com
            </p>
            <p className="flex items-center mt-2">
              <MessageCircle size={18} className="mr-2" /> WhatsApp: +44 7647 468009
            </p>
            <p className="flex items-center mt-2">
              <Phone size={18} className="mr-2" /> Telephone: 01782 354852
            </p>
            <p className="flex items-center mt-2">
              <Clock size={18} className="mr-2" /> Mon-Sun: 9am - 6pm
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/services" className="hover:text-gray-300">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="text-lg font-semibold">Our Address</h2>
            <p className="mt-2">Unit 9, Hulton Street, Hanley, Stoke on Trent, ST1 6AU</p>
          </div>

          {/* Social Media / Newsletter (Optional) */}
          <div>
            <h2 className="text-lg font-semibold">Stay Connected</h2>
            <p className="mt-2">Follow us on WhatsApp or reach out via email.</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>© {new Date().getFullYear()} 52J Car Hire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

