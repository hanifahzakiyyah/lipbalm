export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Siap Mencoba Layanan Kami?
        </h2>
        <p className="mb-8 text-lg text-gray-100">
          Bergabung sekarang dan nikmati kemudahan layanan terbaik kami.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Mulai Sekarang
          </a>
          <a
            href="#"
            className="border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
}
