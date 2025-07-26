import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cdimg from "../assets/cdimg.png";
import natijapng from "../assets/natija.png";
import homeimg from "../assets/homeimg.png";
import { GiBookPile } from "react-icons/gi";
import IeltsSteps from "../Components/IeltsStesps";
import TeacherCard from "../Components/TeacherCard";
import Testimonials from "../Components/Testimonials";
// import { teachers } from "../Components/teachers";
function Home() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6a81eace9afbeb48.mokky.dev/comfortteachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("O'qituvchilarni yuklashda xatolik:", err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {/* Bosh Bo'lim */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center max-w-[1280px] m-auto pt-[30px] px-4">
        <div className="left flex flex-col gap-[12px] text-center md:text-left">
          <h3 className="text-[32px] md:text-[40px] font-bold text-white max-w-full md:max-w-[514px]">
            Comfort Edu o’quv markazi bilan 7+ natijaga erishing
          </h3>
          <h5 className="text-[20px] md:text-[25px] font-bold text-white max-w-full md:max-w-[514px]">
            Comfort Edu O’quv markazimiz 100+ o’quvchilarni IELTS olishiga
            ko’maklashgan
          </h5>
          <Link
            to="/ariza"
            className="mt-4 px-4 py-2 border border-orange-400 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white transition w-fit m-auto md:m-0">
            Ariza topshirish
          </Link>
        </div>
        <div className="right relative mb-6 md:mb-0">
          <img className="max-w-full md:max-w-[550px]" src={homeimg} alt="" />
          <div className="person-lyrics absolute top-[80%] left-[40%] flex flex-col items-end">
            <h4 className="text-[20px] md:text-[32px] text-white fanwoodli">
              Sirojiddin Turg’unov
            </h4>
            <h5 className="text-[16px] md:text-[24px] text-white fanwoodli">
              Comfort Edu Asoschisi
            </h5>
          </div>
        </div>
      </section>

      {/* Natijalar */}
      <section className="max-w-[1280px] m-auto pt-[30px] pb-[80px] px-4">
        <h3 className="text-[24px] md:text-[32px] text-white font-semibold">
          O'quv markazimiz natijalari
        </h3>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-[30px] gap-[40px]">
          <div className="left flex flex-col gap-[30px] w-full">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="card flex gap-[20px] items-center">
                <GiBookPile className="text-white text-[60px] md:text-[100px]" />
                <div>
                  <h4 className="text-[24px] md:text-[30px] font-bold text-white">
                    100+
                  </h4>
                  <h5 className="text-[16px] md:text-[18px] font-bold text-white">
                    o'quvchilar IELTS dan 7+ ball olgan
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <div className="right w-full flex justify-center">
            <img
              className="max-w-full md:max-w-[500px]"
              src={natijapng}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Reklama bir */}
      <div className="bg-[#DD661C]">
        <section className="max-w-[784px] m-auto py-[30px] px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <h2 className="text-[20px] md:text-[23px] text-white">
            Ingiliz tilini biz bilan o’rganing va o’zingizga 100% lik 7+ ni
            taqdim eting
          </h2>
          <Link
            to="/ariza"
            className="px-4 py-2 border border-orange-400 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white transition w-fit">
            Ariza topshirish
          </Link>
        </section>
      </div>

      {/* CD IELTS */}
      <section className="max-w-[1280px] pb-[50px] m-auto px-4">
        <div className="top py-[50px] text-center md:text-left">
          <h3 className="text-[24px] md:text-[27px] font-semibold text-white">
            Preparation for CD IELTS
          </h3>
          <h4 className="text-[18px] md:text-[20px] pt-[10px] font-semibold text-white max-w-full md:max-w-[315px]">
            Ushbu kursimizda siz CD IELTS ga 2 oy ichida tayyor bo’lasz
          </h4>
        </div>
        <div className="bottom flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="left flex flex-col gap-[15px] w-full">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="card border-[4px] border-solid rounded-[15px] px-[20px] py-[20px] md:px-[30px] md:py-[30px] hover:border-[#DD661C] hover:cursor-pointer hover:-translate-y-2 ease-in-out transition">
                <h3 className="text-[24px] md:text-[30px] text-white">
                  CD IELTS
                </h3>
                <h5 className="text-[16px] md:text-[20px] text-white">
                  O’zbekistonda paper test to’xtatilganidan so’ng “Comfort Edu “
                  birinchilardan bo’lib CD ga tayyorgarlik kurslarini boshlagan
                </h5>
              </div>
            ))}
          </div>
          <div className="right w-full flex justify-center">
            <img src={cdimg} alt="" className="max-w-full md:max-w-[500px]" />
          </div>
        </div>
      </section>

      {/* Reklama ikki (scroll) */}
      <div className="bg-[#DD661C] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block min-w-full">
          {[...Array(2)]
            .flatMap(() => [
              "🚨 Diqqat! Ro‘yxatdan o‘tish muddati tugash arafasida!",
              "📢 Joylar soni cheklangan — shoshiling!",
            ])
            .map((text, i) => (
              <span
                key={i}
                className="inline-block px-8 text-white text-[18px]">
                {text}
              </span>
            ))}
        </div>
      </div>

      {/* Ielts yo'li */}
      <IeltsSteps />

      {/* Reklama ikki takror */}
      <div className="bg-[#DD661C] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block min-w-full">
          {[...Array(2)]
            .flatMap(() => [
              "🚨 Diqqat! Ro‘yxatdan o‘tish muddati tugash arafasida!",
              "📢 Joylar soni cheklangan — shoshiling!",
            ])
            .map((text, i) => (
              <span
                key={i}
                className="inline-block px-8 text-white text-[18px]">
                {text}
              </span>
            ))}
        </div>
      </div>
      {/* Kuchlilar */}
      <section className="max-w-[1280px] m-auto py-[30px] px-4">
        <h3 className="text-white text-[24px] md:text-[30px] font-semibold mb-6 text-center md:text-left">
          Eng kuchli o’qituvchilarimiz!
        </h3>

        {loading ? (
          <p className="text-white text-lg text-center">Yuklanmoqda...</p>
        ) : teachers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>
        ) : (
          <p className="text-white text-lg text-center">
            O'qituvchilar topilmadi
          </p>
        )}
      </section>

      {/* Comments */}
      <div className="bg-[#dd661c]">
        <section>
          <h2>Bitiruvchilarimiz fikrlari</h2>
          <Testimonials />
        </section>
      </div>
      {/* Reklama bir */}
      <div className="bg-[#DD661C] mt-[30px]">
        <section className="max-w-[784px] m-auto py-[30px] px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <h2 className="text-[20px] md:text-[23px] text-white">
            Ingiliz tilini biz bilan o’rganing va o’zingizga 100% lik 7+ ni
            taqdim eting
          </h2>
          <Link
            to="/ariza"
            className="px-4 py-2 border border-orange-400 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white transition w-fit">
            Ariza topshirish
          </Link>
        </section>
      </div>
    </>
  );
}

export default Home;
