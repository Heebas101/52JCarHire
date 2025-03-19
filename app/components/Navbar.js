"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icon library for a clean look
import Image from "next/image"; // Import the Image component for optimization

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/52JCarHireLogo.jpeg" // Replace with the actual path to your logo
                alt="Logo"
                width={150} // Adjust width as needed
                height={40} // Adjust height as needed
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>
            <Link href="/fleet" className="hover:text-gray-300">
              Fleet
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 space-y-2 py-4">
          <Link href="/" className="block text-center hover:bg-gray-700 py-2">
            Home
          </Link>
          <Link href="/about" className="block text-center hover:bg-gray-700 py-2">
            About
          </Link>
          <Link href="/services" className="block text-center hover:bg-gray-700 py-2">
            Services
          </Link>
          <Link href="/fleet" className="block text-center hover:bg-gray-700 py-2">
            Fleet
          </Link>
          <Link href="/contact" className="block text-center hover:bg-gray-700 py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
