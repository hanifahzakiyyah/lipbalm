// WhyChoose.jsx
import { motion } from "framer-motion";
import { FaLeaf, FaTint, FaBaby, FaHeart, FaGem } from "react-icons/fa";

const benefits = [
  {
    icon: <FaLeaf className="text-green-600 text-3xl" />,
    title: "100% Alami & Aman",
    desc: "Tanpa bahan kimia berbahaya, pewarna sintetis, atau parfum."
  },
  {
    icon: <FaTint className="text-blue-500 text-3xl" />,
    title: "Melembapkan & Menutrisi",
    desc: "Cocok untuk bibir kering & pecah-pecah."
  },
  {
    icon: <FaBaby className="text-pink-500 text-3xl" />,
    title: "Aman untuk Semua Usia",
    desc: "Termasuk bayi & kulit sensitif."
  },
  {
    icon: <FaHeart className="text-red-500 text-3xl" />,
    title: "Warna Alami Cantik",
    desc: "Dari minyak buah merah Papua, tanpa pewarna buatan."
  },
  {
    icon: <FaGem className="text-yellow-500 text-3xl" />,
    title: "Bahan Premium",
    desc: "Mengandung Argan Oil, 'liquid gold' untuk kulit."
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          🌟 Kenapa Lip Balm Ini Spesial?
        </motion.h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
