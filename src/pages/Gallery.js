import React from 'react';
import Navbar from '../components/Navbar';

function Gallery () {
    return(
        <div id="gallery" className="bg-white text-gray-800 min-h-screen">
            <Navbar />
        <h2 className="text-3xl font-bold mb-6 text-[#FF5E5B]">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/gallery1.jpg" alt="Gallery 1" className="rounded-2xl shadow" />
          <img src="/images/gallery2.jpg" alt="Gallery 2" className="rounded-2xl shadow" />
          <img src="/images/gallery3.jpg" alt="Gallery 3" className="rounded-2xl shadow" />
          <img src="/images/gallery4.jpg" alt="Gallery 4" className="rounded-2xl shadow" />
        </div>
      </div>
    );
}
export default Gallery;