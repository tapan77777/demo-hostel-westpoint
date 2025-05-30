import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const images = [
  {
    src: "/images/hiden-route.jpg",
    alt: "Sunrise over Tiger Hill",
    caption: "Sunrise from Tiger Hill - breathtaking view!",
  },
  {
    src: "/images/batasia.jpg",
    alt: "Batasia Loop",
    caption: "Scenic walk through Batasia Loop",
  },
  {
    src: "/images/darj-train1.jpg",
    alt: "Local Tea Tasting",
    caption: "Enjoying the local Darjeeling tea",
  },
  {
    src: "/images/monastry.jpg",
    alt: "Peace Pagoda",
    caption: "Visit the serene Peace Pagoda",
  },
  {
    src: "/images/westpoint-5.jpg",
    alt: "Local Cafes & Culture",
    caption: "Exploring local cafes and vibrant culture",
  },
  {
    src: "/images/westpoint-9.jpg",
    alt: "Ropeway Adventure",
    caption: "Thrilling Ropeway ride over the hills",
  },
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-[#FF5E5B] text-center">
          Explore Our Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map(({ src, alt, caption }, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImg({ src, alt, caption })}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {caption}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <div
              className="relative max-w-4xl max-h-full p-4"
              onClick={(e) => e.stopPropagation()} // prevent close on image click
            >
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
                onClick={() => setSelectedImg(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
              />
              <p className="mt-3 text-white text-center">{selectedImg.caption}</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
