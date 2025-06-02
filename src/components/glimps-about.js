import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AboutUsGlimpse = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const images = [
    "/images/westpoint-1.jpg",
    "/images/westpoint-2.jpg",
    "/images/westpoint-5.jpg",
    "/images/westpoint-13.jpg",
  ];

  return (
    <section className="bg-[#FFF8F0] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#BA5A31] mb-4 leading-snug">
            Feel at Home, Away from Home
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            At our Darjeeling homestay, you’re not just a guest—you’re family.
            Enjoy warm hospitality, scenic views, and the charm of local culture
            hosted by two wonderful souls: Rebecca and Shubhanjali.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="px-6 py-2 bg-[#BA5A31] text-white rounded-full hover:bg-[#a84a25] transition"
          >
            More About Us
          </button>
        </div>

        {/* Image Slider */}
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-2">
                <img
                  src={img}
                  alt={`About glimpse ${index + 1}`}
                  className="rounded-xl shadow-lg w-full h-64 md:h-72 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/fallback.jpg"; // Optional fallback image
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutUsGlimpse;
