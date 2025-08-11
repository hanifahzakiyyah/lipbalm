// Ingredients.jsx
import { motion } from "framer-motion";
import { GiButter, GiCoconuts, GiBee, GiOlive, GiFruitBowl, GiTomato, GiMedicinePills } from "react-icons/gi";

const ingredients = [
  { icon: <GiButter className="text-yellow-600 text-2xl" />, name: "Unrefined Shea Butter", desc: "Melembapkan & memperbaiki kulit bibir." },
  { icon: <GiButter className="text-amber-700 text-2xl" />, name: "Unrefined Cocoa Butter", desc: "Memberikan kelembutan ekstra." },
  { icon: <GiBee className="text-yellow-500 text-2xl" />, name: "Organic Beeswax", desc: "Melindungi bibir dari udara kering & polusi." },
  { icon: <GiCoconuts className="text-brown-500 text-2xl" />, name: "Virgin Coconut Oil", desc: "Menutrisi dan melembutkan." },
  { icon: <GiOlive className="text-green-500 text-2xl" />, name: "Jojoba Oil", desc: "Menghidrasi secara alami." },
  { icon: <GiFruitBowl className="text-yellow-700 text-2xl" />, name: "Argan Oil", desc: "Anti-aging & memperbaiki sel kulit." },
  { icon: <GiTomato className="text-red-500 text-2xl" />, name: "Papua Red Fruit", desc: "Sumber antioksidan & pewarna alami." },
  { icon: <GiMedicinePills className="text-purple-500 text-2xl" />, name: "Vitamin E", desc: "Melindungi dari radikal bebas." },
];

export default function Ingredients() {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img 
            src="/2.jpg" 
            alt="Bahan Bahan Lip Balm" 
            className="rounded-2xl shadow-lg max-w-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bahan-Bahan Premium 🌿
          </h2>

          <ul className="space-y-4">
            {ingredients.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <span>{item.icon}</span>
                <span>
                  <strong className="text-gray-900">{item.name}</strong> — {item.desc}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
