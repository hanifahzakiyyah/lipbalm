import { useState } from "react";

const faqs = [
  {
    question: "Bagaimana cara memesan produk?",
    answer:
      "Anda cukup memilih produk yang diinginkan, klik tombol 'Beli Sekarang', lalu ikuti instruksi pembayaran.",
  },
  {
    question: "Apakah bisa kirim ke seluruh Indonesia?",
    answer:
      "Ya, kami bekerja sama dengan berbagai jasa pengiriman untuk mengirimkan pesanan ke seluruh wilayah Indonesia.",
  },
  {
    question: "Berapa lama proses pengiriman?",
    answer:
      "Proses pengiriman biasanya memakan waktu 1-3 hari kerja, tergantung lokasi Anda.",
  },
  {
    question: "Apakah ada garansi produk?",
    answer:
      "Tentu, kami memberikan garansi penggantian produk jika ditemukan kerusakan saat penerimaan.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center hover:bg-gray-100 transition"
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
