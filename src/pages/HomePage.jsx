
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ExplorePreview from "../components/explorePreview";
import AboutUsGlimpse from "../components/glimps-about";
import ImageSlider from "../components/image-slider";

export default function HomePage() {

  const images = [
    "/images/westpoint-3.jpg",
    "/images/westpoint-9.jpg",
    "/images/westpoint-11.jpg",
    "/images/westpoint-10.jpg",
    "/images/westpoint-6.jpg",
    "/images/westpoint-4.jpg",
  ];
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <ImageSlider/>
      {/* About Us Glimpse */}
<AboutUsGlimpse/>

<ExplorePreview/>





<section className="px-6 md:px-16 py-20 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-[#FF5E5B] mb-4 text-center">Gallery Glimpses</h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        A peek into our vibrant hostel life — from bonfires to café corners and misty mornings 🌿✨
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-52 object-cover"
            />
          </div>
        ))}
      </div>
    </section>

    X

 

      

      <Footer />
    </div>
  );
}



