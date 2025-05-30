
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function AboutPage() {
const [isExpanded,setIsExpanded] = useState(false);
const [about,setabout] = useState(false)

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden py-20">
  <div className="absolute inset-0 bg-gradient-to-r from-[#ffecd2] via-[#fcb69f] to-[#ffecd2] animate-gradient bg-[length:400%_400%]"></div>

  <div className="relative z-10 px-6 md:px-16">
    <h1 className="text-4xl font-bold mb-4 text-[#FF5E5B]">About Us</h1>
    <p className="text-lg leading-7 max-w-3xl text-gray-800">
      West Point Backpackers Hostel is more than just a stay — it's an experience of community, nature, and comfort...
    </p>
  </div>
</section>


    {/*Video-section*/}

      <section className="px-6 md:px-16 py-16">
        <h1 className="text-4xl font-bold mb-6 text-[#FF5E5B]">About Us</h1>


        <section className="relative h-[500px] overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover z-0"
  >
    <source src="images/train.mp4" type="video/mp4" />
  </video>

  <div className="relative z-10 bg-black/40 w-full h-full flex flex-col justify-center items-start px-6 md:px-16">
    <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
    <p className="text-lg text-white max-w-2xl">
      Discover home in the Himalayas. Comfort, nature, and community await at West Point Hostel.
    </p>
  </div>
</section>

       

        {/* Hostel Intro */}
        <p className="text-lg leading-7 max-w-4xl mb-6">
          <strong>West Point Backpackers Hostel</strong> is a vibrant, cozy, and community-driven stay located in the heart of Darjeeling. Designed with backpackers, solo travelers, and curious wanderers in mind, our hostel is a blend of rustic mountain charm and modern-day comfort.
        </p>
       

        <p className="text-lg leading-7 max-w-4xl mb-6">
          Nestled amidst serene hills with breathtaking views of the Himalayas, we offer dormitories and private rooms, common areas for conversations and connections, a reading corner, and a rooftop that gives you the perfect sunrise tea moment.
        </p>
 {/*about hostel-card*/}
 <motion.div
      className="bg-[#FFF1E6] p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer max-w-2xl w-full mx-auto mb-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={() => setabout(!about)}
    >
      <div className="flex items-center gap-6">
        <img
          src="images/partners/demo.png"
          alt="Rebecca"
          className="w-20 h-20 rounded-full object-cover border-4 border-[#FF5E5B] shadow"
        />
        <div>
          <h3 className="text-2xl font-bold text-[#FF5E5B]">West Point Backpackers Hostel</h3>
          <p className="text-sm text-gray-700">
            Let's peep into where it all began 
          </p>
        </div>
      </div>

      <AnimatePresence>
        {about&& (
          <motion.div
            className="mt-6 text-md text-gray-800 leading-7 whitespace-pre-line"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-justify">
              {/* You can break this into smaller <p> blocks if needed */}
              sdcfsddddddddfsdfds
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>    
        {/* Why stay with us */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#FF5E5B]">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg leading-7 max-w-4xl space-y-2">
          <li>Strategic location – close to major attractions yet peacefully tucked away</li>
          <li>Warm and welcoming community vibe</li>
          <li>Affordable stay with quality service</li>
          <li>Local tips, guided treks, and group activities</li>
          <li>Free Wi-Fi, shared kitchen, and curated playlists 😄</li>
        </ul>

        {/* Hosts Section */}
        <h2 className="text-2xl font-semibold mt-14 mb-6 text-[#FF5E5B]">Meet Your Host</h2>
        <div className="grid md:grid-cols-2 gap-10">
            

        {/*card */}
        <motion.div
      className="bg-[#FFF1E6] p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer max-w-2xl w-full mx-auto mb-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-6">
        <img
          src="images/partners/demo.png"
          alt="Rebecca"
          className="w-20 h-20 rounded-full object-cover border-4 border-[#FF5E5B] shadow"
        />
        <div>
          <h3 className="text-2xl font-bold text-[#FF5E5B]">Rebecca</h3>
          <p className="text-sm text-gray-700">
            Host & Founder of West Point Hostel
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="mt-6 text-md text-gray-800 leading-7 whitespace-pre-line"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-justify">
              {/* You can break this into smaller <p> blocks if needed */}
              West Point Backpackers' Hostel is situated on the outskirts of Darjeeling, about 3 km from the main town...
              {"\n\n"}
              I am Rebecca, your host. After 21 years with a diplomatic mission in Delhi, I returned to my hometown Darjeeling to start this journey. I love cooking, traveling, and sharing stories with people from around the world...
              {"\n\n"}
              From Batasia Loop to Tibetan Refugee Centre — ask me anything, and I’ll help you explore!
              {"\n\n"}
              Languages spoken: Bengali, English, Hindi.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>    

         
        </div>
        

        {/* Quote or Testimonial-style line */}
        <blockquote className="italic text-gray-600 mt-12 text-lg border-l-4 border-[#FF5E5B] pl-4">
          "At West Point, we believe every traveler has a story — and we’re here to be a part of yours."
        </blockquote>
      </section>

      <Footer />
    </div>
  );
}





























// import React from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// export default function AboutPage() {
//   return (
//     <div className="bg-white text-gray-800 min-h-screen">
//       <Navbar />
//       <section className="px-6 md:px-16 py-16">
//         <h1 className="text-4xl font-bold mb-4 text-[#FF5E5B]">About Us</h1>
//         <p className="text-lg leading-7 max-w-3xl">
//           West Point Backpackers Hostel is more than just a stay — it's an experience of community, nature, and comfort. Located in the heart of Darjeeling, our hostel is perfect for solo travelers, backpackers, and explorers looking for good vibes, scenic views, and warm-hearted hosts.
//         </p>
        
//       </section>
//       <Footer />
//     </div>
//   );
// }