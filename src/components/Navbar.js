import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false); // Close menu on link click

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#FF5E5B] hover:text-[#e14e4b]">
          WestPoint
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-[#FF5E5B]">Home</Link>
          <Link to="/about" className="hover:text-[#FF5E5B]">About</Link>
          <Link to="/explore" className="hover:text-[#FF5E5B]">Explore Us</Link>
          <Link to="/gallery" className="hover:text-[#FF5E5B]">Gallery</Link>
          <a href="tel:+918327823438" className="hover:text-[#FF5E5B]">📞 9811534922</a>
          <a href="mailto:westpointdarjeeling@gmail.com" className="hover:text-[#FF5E5B]">📧 Email</a>
        </div>

        {/* Desktop Button */}
        <a
          href="https://www.booking.com/hotel/in/west-point-backpackers-hostel.en-gb.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline"
        >
          <button className="bg-[#FF5E5B] hover:bg-[#e14e4b] text-white px-4 py-2 rounded-md">
            Book Now
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#FF5E5B]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-6 pt-4 text-sm bg-white shadow-md border-t">
          <Link to="/" onClick={handleLinkClick} className="hover:text-[#FF5E5B]">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-[#FF5E5B]">About</Link>
          <Link to="/explore" onClick={handleLinkClick} className="hover:text-[#FF5E5B]">Explore Us</Link>
          <Link to="/gallery" onClick={handleLinkClick} className="hover:text-[#FF5E5B]">Gallery</Link>
          <a href="tel:+918327823438" className="hover:text-[#FF5E5B]">📞 9811534922</a>
          <a href="mailto:westpointdarjeeling@gmail.com" className="hover:text-[#FF5E5B]">📧 Email</a>
          <a
            href="https://www.booking.com/hotel/in/west-point-backpackers-hostel.en-gb.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#FF5E5B] hover:bg-[#e14e4b] text-white w-full py-2 rounded-md">
              Book Now
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
