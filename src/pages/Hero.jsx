// HeroSection.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [nama, setNama] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const namaDariUrl = params.get("kpd");
    if (namaDariUrl) {
      setNama(namaDariUrl);
    }
  }, []);

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
            Bismillah, Halo Kak <span className="font-bold capitalize"> {nama && ` ${nama}`} </span> <br /> kenalin aku <span className="font-semibold">Fathimah QA</span>, 
            seorang herbalist yang udah lama menekuni ramuan alami, bikin sabun, dan produk herbal perawatan kulit sejak tahun .....
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Alhamdulillah, Hari ini aku super excited karena mau ngenalin karya baruku:  
            <span className="font-semibold text-pink-600"> Lip Balm Alami dengan minyak buah merah Papua</span>, 
            diracik khusus untuk melembapkan, menutrisi, dan merawat bibir tanpa bahan kimia berbahaya, pewarna sintetis, pewangi, atau perisa buatan.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed italic">
            “Jangan beli kalau nggak yakin. Jangan beli karena ‘nggak enakan’. Belilah kalau kamu benar-benar mau mencoba… dan rasakan sendiri khasiatnya.” 💖
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
