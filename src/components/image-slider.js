import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const images = [
  "images/WhatsApp Image 2025-01-03 at 10.39.02 PM.jpeg",
  "images/partners/WhatsApp Image 2025-01-03 at 10.45.56 PM.jpeg",
  "/images/slider/slide3.jpg",
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover absolute top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Optional overlay text */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to West Point Hostel
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          A backpacker’s paradise in the heart of Darjeeling
        </p>
      </div>
    </div>
  );
}
