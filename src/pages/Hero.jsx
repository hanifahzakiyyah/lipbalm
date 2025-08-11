// HeroSection.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            💋 Lip Balm Alami Premium
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Bismillah, perkenalkan… namaku <span className="font-semibold">Fathimah QA</span>. 
            Aku seorang herbalist yang telah mempelajari berbagai ramuan alami dari bahan-bahan tradisional, 
            serta memproduksi sabun dan produk herbal perawatan kulit sejak tahun <em>(isi sendiri)</em>.  
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Alhamdulillah, hari ini aku ingin memperkenalkan produk baruku — 
            <span className="font-semibold text-pink-600"> Lip Balm Alami dengan minyak buah merah Papua</span>, 
            diracik khusus untuk melembapkan dan merawat bibir tanpa pewarna, pewangi, atau perisa buatan.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed italic">
            “Jangan beli kalau nggak yakin, jangan beli kalau cuma ‘nggak enakan’.  
            Belilah kalau kamu benar-benar ingin mencoba… dan rasakan sendiri khasiatnya.”
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
