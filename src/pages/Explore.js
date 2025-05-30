import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const activities = [
  {
    title: "🌄 Sunrise from Tiger Hill",
    short: "Experience the magical sunrise view.",
    details: "Watch the first light hit Mt. Kanchenjunga. Best time: 4:30 AM to 5:30 AM.",
  },
  {
    title: "🚡 Ropeway Adventure",
    short: "Soar above tea gardens.",
    details: "Darjeeling ropeway offers a thrilling aerial view of the valleys.",
  },
  {
    title: "🚶‍♀️ Walk to Batasia Loop",
    short: "A scenic walk with a twisty view.",
    details: "Catch a glimpse of the toy train navigating a spiral loop with mountain views.",
  },
  {
    title: "☕ Local Tea Tasting",
    short: "Sip the best of Darjeeling tea.",
    details: "Visit a local tea estate and learn how the world-famous tea is made.",
  },
  {
    title: "🏞️ Visit Peace Pagoda",
    short: "A moment of calm and peace.",
    details: "One of the 70 pagodas built worldwide by a Buddhist monk for world peace.",
  },
  {
    title: "📸 Explore Local Cafes",
    short: "Coffee, views & chill vibes.",
    details: "Darjeeling has some beautiful Instagram-worthy cafes to explore.",
  },
];

const activity = [
     {
    title: "🌄 Sunrise from Tiger Hill",
    description: "Witness the magical sunrise with Kanchenjunga glowing in golden hues.",
  },
  {
    title: "🚡 Ropeway Adventure",
    description: "Enjoy breathtaking views from the Darjeeling ropeway ride.",
  },
  {
    title: "☕ Local Tea Tasting",
    description: "Sip world-famous Darjeeling tea at cozy tea houses.",
  },
  {
    title: "🚶‍♀️ Walk to Batasia Loop",
    description: "A peaceful spiral garden with panoramic views and the War Memorial.",
  },
  {
    title: "🏞️ Visit Peace Pagoda",
    description: "Serene vibes and a spiritual feel atop the peaceful hill.",
  },
  {
    title: "📸 Explore Local Cafes & Culture",
    description: "Darjeeling has charming corners, graffiti, and hip cafés to discover.",
  },
];

function ExploreUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Navbar />
      <div className="px-6 md:px-16 py-12">
        <h2 className="text-4xl font-bold text-[#FF5E5B] mb-10 text-center">
          Explore Us – Things to Do
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className="cursor-pointer transition-all duration-300 border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold text-[#FF5E5B]">{activity.title}</h3>
              <p className="mt-2 text-gray-600">{activity.short}</p>

              {activeIndex === index && (
                <div className="mt-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-dashed border-gray-300">
                  {activity.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Photo Gallery */}
      <section className="py-12 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-[#FF5E5B] mb-6 text-center">Glimpses of Darjeeling</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/assets/gallery1.jpg",
            "/assets/gallery2.jpg",
            "/assets/gallery3.jpg",
            "/assets/gallery4.jpg",
            "/assets/gallery5.jpg",
            "/assets/gallery6.jpg",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-48 w-full"
            />
          ))}
        </div>
      </section>

      {/* Section 3: Nearby Attractions */}
      <section className="px-6 md:px-16 py-12 bg-white">
        <h2 className="text-3xl font-bold text-[#FF5E5B] mb-6 text-center">Nearby Attractions</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Himalayan Mountaineering Institute",
              desc: "Museum & training center with Everest exhibits.",
            },
            {
              name: "Darjeeling Mall Road",
              desc: "Stroll around shops, food stalls & local life.",
            },
            {
              name: "Rock Garden",
              desc: "Manmade garden with waterfalls and rocks.",
            },
          ].map((spot, i) => (
            <div key={i} className="p-6 bg-[#FFFAFA] rounded-xl border shadow-md">
              <h3 className="text-lg font-semibold text-[#FF5E5B] mb-2">{spot.name}</h3>
              <p className="text-gray-600">{spot.desc}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Section 1: Activities */}
      <section className="px-6 md:px-16 py-12 bg-[#FFF5F5]">
        <h2 className="text-3xl font-bold text-[#FF5E5B] mb-6 text-center">Things To Do</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {activity.map((activity, index) => (
            <div
              key={index}
              onClick={() => alert(`You clicked on: ${activity.title}`)}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 cursor-pointer border"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#FF5E5B]">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ExploreUs;
