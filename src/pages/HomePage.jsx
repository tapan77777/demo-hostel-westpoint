
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ExplorePreview from "../components/explorePreview";
import AboutUsGlimpse from "../components/glimps-about";
import ImageSlider from "../components/image-slider";

export default function HomePage() {

  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
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

    {/*instagram */}

    {/* <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-[#FFF1E6] via-[#FFE8D6] to-[#FFF1E6] rounded-lg shadow-lg max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-[#FF5E5B] flex items-center gap-3 animate-fadeIn">
        <Instagram className="w-8 h-8 stroke-current" />
        Our Moments
      </h2>

      <p className="text-lg mb-10 max-w-xl mx-auto text-center text-gray-700">
        Follow us on Instagram{" "}
        <a
          className="text-[#FF5E5B] underline font-semibold hover:text-[#d94a49] transition-colors duration-300"
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
          className="w-full md:w-[80%] h-[350px] md:h-[450px] rounded-xl shadow-2xl border border-[#FFB3AB] hover:shadow-[#FF5E5B]/50 transition-shadow duration-500"
          allowTransparency={true}
          frameBorder="0"
          scrolling="no"
          title="Instagram Feed"
        ></iframe>
      </div>
    </section> */}

 

      

      <Footer />
    </div>
  );
}
