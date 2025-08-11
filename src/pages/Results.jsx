// Results.jsx
import { motion } from "framer-motion";
import { FaRegSmile, FaRegGrinHearts, FaRegKissBeam } from "react-icons/fa";

const results = [
  {
    day: "Hari 1",
    icon: <FaRegSmile className="text-pink-500 text-3xl" />,
    desc: "Bibir terasa lebih lembut."
  },
  {
    day: "Hari 3",
    icon: <FaRegGrinHearts className="text-red-500 text-3xl" />,
    desc: "Bibir lebih lembap, pecah-pecah berkurang."
  },
  {
    day: "Hari 7",
    icon: <FaRegKissBeam className="text-pink-400 text-3xl" />,
    desc: "Bibir sehat, kenyal, dan tampak alami cantik."
  }
];

export default function Results() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Hasil yang Bisa Dirasakan ✨
        </motion.h2>

        {/* Timeline */}
        <div className="mt-12 relative flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-12 md:space-y-0">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center max-w-xs mx-auto"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{item.day}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
