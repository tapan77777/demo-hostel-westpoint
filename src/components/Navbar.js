// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
//       <Link to="/" className="hover:text-[#FF5E5B]"><div className="text-2xl font-bold text-[#FF5E5B]">WestPoint</div></Link>
//       <div className="space-x-6 hidden md:flex">
//         <Link to="/" className="hover:text-[#FF5E5B]">Home</Link>
//         <Link to="/about" className="hover:text-[#FF5E5B]">About</Link>
//         <Link to="/explore" className="hover:text-[#FF5E5B]">Explore Us</Link>
//         <Link to="/gallery" className="hover:text-[#FF5E5B]">Gallery</Link>
//         <Link to="tel:+918327823438" className="hover:text-[#FF5E5B]">📞 9811534922</Link>
//         <Link to="mailto:westpointdarjeeling@gmail.com" className="hover:text-[#FF5E5B]">📧 Email</Link>
//       </div>
//       <a
//         href="https://www.booking.com/hotel/in/west-point-backpackers-hostel.en-gb.html"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <button className="bg-[#FF5E5B] hover:bg-[#e14e4b] text-white px-4 py-2 rounded-md">
//           Book Now
//         </button>
//       </a>
//     </nav>
//   );
// }



import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#FF5E5B] hover:text-[#e14e4b]">
          WestPoint
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-[#FF5E5B]">Home</Link>
          <Link to="/about" className="hover:text-[#FF5E5B]">About</Link>
          <Link to="/explore" className="hover:text-[#FF5E5B]">Explore Us</Link>
          <Link to="/gallery" className="hover:text-[#FF5E5B]">Gallery</Link>
          <a href="tel:+918327823438" className="hover:text-[#FF5E5B]">📞 9811534922</a>
          <a href="mailto:westpointdarjeeling@gmail.com" className="hover:text-[#FF5E5B]">📧 Email</a>
        </div>

        {/* Book Now Button */}
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

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-sm bg-white border-t">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#FF5E5B]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#FF5E5B]">About</Link>
          <Link to="/explore" onClick={() => setIsOpen(false)} className="hover:text-[#FF5E5B]">Explore Us</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-[#FF5E5B]">Gallery</Link>
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
