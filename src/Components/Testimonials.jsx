import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6a81eace9afbeb48.mokky.dev/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fikrlarni yuklashda xatolik:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-[#DD661C] py-12 px-4 md:px-8">
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-10">
        Bitiruvchilarimiz fikrlari
      </h2>

      {loading ? (
        <p className="text-white text-center text-lg">Yuklanmoqda...</p>
      ) : (
        <Swiper
          modules={[Pagination, EffectCoverflow, Autoplay]}
          // effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="1.5"
          spaceBetween={"50"}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="max-w-7xl mx-auto">
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="w-[100%] sm:w-[300px] md:w-[350px]">
              <div className="bg-[#1E40AF] text-white p-6 rounded-2xl h-full shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{review.name}</h4>
                    <p className="text-sm opacity-80">{review.position}</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

export default Testimonials;
