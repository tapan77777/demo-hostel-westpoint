import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const exploreItems = [
  {
    title: "Hidden Trails",
    image: "/images/hiden-route.jpg",
    description: "Discover secret spots with breathtaking views.",
  },
  {
    title: "Cafes & Culture",
    image: "/images/cafes.jpg",
    description: "Experience Darjeeling’s cafe charm & local life.",
  },
  {
    title: "Batasia Loop",
    image: "/images/batasia.jpg",
    description: "Feel the rhythm of the heritage toy train.",
  },
  {
    title: "Monasteries",
    image: "/images/monastry.jpg",
    description: "Peaceful moments in ancient spiritual havens.",
  },
];

export default function ExplorePreview() {
  return (
    <section className="bg-[#fefefe] py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#FF5E5B]">
        Glimpse of Explore
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {exploreItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-bold">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/explore">
          <button className="bg-[#FF5E5B] text-white px-6 py-3 rounded-full shadow hover:bg-[#e14c4a] transition">
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
}
