
import { Instagram } from "lucide-react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ExplorePreview from "../components/explorePreview";
import AboutUsGlimpse from "../components/glimps-about";
import ImageSlider from "../components/image-slider";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <ImageSlider/>
      {/* About Us Glimpse */}
<AboutUsGlimpse/>

<ExplorePreview/>



      {/* Instagram Section */}
      <section className="px-6 md:px-16 py-16 bg-[#FFF1E6]">
        <h2 className="text-3xl font-bold mb-4 text-[#FF5E5B] flex items-center gap-2">
          <Instagram className="w-7 h-7" /> Our Moments
        </h2>
        <p className="text-lg mb-6">
          Follow us on Instagram{" "}
          <a
            className="text-[#FF5E5B] underline"
            href="https://www.instagram.com/west_point_backpackers_darj"
            target="_blank"
            rel="noopener noreferrer"
          >
            @westpointbackpackershostel
          </a>
        </p>

        <div className="flex justify-center">
          <iframe
            src="https://snapwidget.com/embed/1052552"
            className="w-full md:w-[80%] h-[300px] md:h-[400px] rounded-lg shadow-md"
            allowTransparency={true}
            frameBorder="0"
            scrolling="no"
            title="Instagram Feed"
          ></iframe>
        </div>
      </section>

      

      <Footer />
    </div>
  );
}
