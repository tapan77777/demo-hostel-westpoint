import { Instagram } from "lucide-react";
import React from "react";


export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* NavBar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-[#FF5E5B]">WestPoint</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-[#FF5E5B]">Home</a>
          <a href="#about" className="hover:text-[#FF5E5B]">About</a>
          <a href="#activities" className="hover:text-[#FF5E5B]">Activities</a>
          <a href="#gallery" className="hover:text-[#FF5E5B]">Gallery</a>
          <a href="tel:+918327823438" className="hover:text-[#FF5E5B]">📞 9811534922</a>
          <a href="mailto:westpointdarjeeling@gmail.com" className="hover:text-[#FF5E5B]">📧 Email</a>
        </div>
        <a
          href="https://www.booking.com/hotel/in/west-point-backpackers-hostel.en-gb.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#FF5E5B] hover:bg-[#e14e4b] text-white px-4 py-2 rounded-md">
  Book Now
</button>

        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-gradient-to-br from-[#FFE5D4] to-[#FFF1E6]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Backpackers Hostel in Darjeeling</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-700">Experience cozy mountain vibes, authentic hospitality, and a homely stay with a view.</p>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-16 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-[#FF5E5B]">About Us</h2>
        <p className="text-lg leading-7 max-w-3xl">West Point Backpackers Hostel is more than just a stay — it's an experience of community, nature, and comfort. Located in the heart of Darjeeling, our hostel is perfect for solo travelers, backpackers, and explorers looking for good vibes, scenic views, and warm-hearted hosts.</p>
      </section>

      {/* Activities Section */}
      <section id="activities" className="px-6 md:px-16 py-16 bg-[#FFF5F5]">
        <h2 className="text-3xl font-bold mb-6 text-[#FF5E5B]">Things To Do</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg">
          <li>🌄 Sunrise from Tiger Hill</li>
          <li>🚡 Ropeway adventure</li>
          <li>🚶‍♀️ Walk to Batasia Loop</li>
          <li>☕ Local tea tasting</li>
          <li>🏞️ Visit Peace Pagoda</li>
          <li>📸 Explore local cafes & culture</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="px-6 md:px-16 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-[#FF5E5B]">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/gallery1.jpg" alt="Gallery 1" className="rounded-2xl shadow" />
          <img src="/images/gallery2.jpg" alt="Gallery 2" className="rounded-2xl shadow" />
          <img src="/images/gallery3.jpg" alt="Gallery 3" className="rounded-2xl shadow" />
          <img src="/images/gallery4.jpg" alt="Gallery 4" className="rounded-2xl shadow" />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="px-6 md:px-16 py-16 bg-[#FFF1E6]">
        <h2 className="text-3xl font-bold mb-4 text-[#FF5E5B] flex items-center gap-2">
          <Instagram className="w-7 h-7" /> Our Moments
        </h2>
        <div className="text-lg mb-4">Follow us on Instagram <a className="text-[#FF5E5B] underline" href="https://www.instagram.com/westpointbackpackershostel/" target="_blank">@westpointbackpackershostel</a> to see our latest stories and memories.</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <iframe
            src="https://snapwidget.com/embed/1052552"
            className="w-full h-[300px] md:h-[400px] rounded-lg shadow"
            allowTransparency={true}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 bg-white border-t">
        &copy; {new Date().getFullYear()} WestPoint Backpackers Hostel. All rights reserved.
      </footer>
    </div>
  );
}