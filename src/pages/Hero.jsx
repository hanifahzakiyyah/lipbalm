// HeroSection.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            💋 Lip Balm Alami Premium, <br /> 
            <span className="text-pink-600">Lembapkan & Rawat Bibir Secara Alami 🌿</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Dibuat dengan 100% bahan alami pilihan & minyak buah merah Papua — 
            aman untuk bayi & kulit sensitif, tanpa pewarna, pewangi, dan perisa buatan.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Pesan Sekarang — Hanya Rp35.000
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img 
            src="/1.jpg" 
            alt="Lip Balm Alami" 
            className="rounded-2xl shadow-lg max-w-xs md:max-w-sm"
          />
        </motion.div>

      </div>
    </section>
  );
}
