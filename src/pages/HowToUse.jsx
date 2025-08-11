import { FaHands, FaSmile } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";


export default function HowToUse() {
  return (
    <section className="py-16 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#5C4033] mb-8">
          Cara Pakai Lip Balm
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <FaHands className="text-5xl text-[#D2691E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Bersihkan Bibir</h3>
            <p className="text-gray-600">
              Pastikan bibir dalam keadaan bersih dan kering sebelum penggunaan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <GiLipstick className="text-5xl text-[#FF7F50] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Oleskan Tipis</h3>
            <p className="text-gray-600">
              Oleskan lip balm secukupnya secara merata di permukaan bibir.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <FaSmile className="text-5xl text-[#F4A460] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Tersenyum!</h3>
            <p className="text-gray-600">
              Nikmati kelembutan bibir seharian sambil tetap tampil percaya diri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
