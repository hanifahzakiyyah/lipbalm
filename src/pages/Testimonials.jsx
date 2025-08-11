import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/1.jpg",
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonial</h2>

        {/* Tombol Navigasi */}
        <button
          onClick={() => scrollByAmount(-300)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scrollByAmount(300)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Container Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {testimonials.map((src, idx) => (
            <div
              key={idx}
              className="shrink-0 w-80 snap-center rounded-xl overflow-hidden shadow-lg border"
            >
              <img
                src={src}
                alt={`Testimonial ${idx + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
