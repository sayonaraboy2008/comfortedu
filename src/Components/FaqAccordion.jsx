import React, { useState, useRef, useEffect } from "react";

const faqData = [
  {
    question: "Ushbu sohani o'zlashtira olamanmi?",
    answer:
      "Ha albatta sabab bizning ustozlar juda tajribali va ular sizda bo‘layotgan dars muammosiga tezda yechim topishadi va sizga yordam berishadi.",
  },
  {
    question: "Kurs davomida savollar paydo bo‘lsa, nima qilaman?",
    answer:
      "Siz har doim guruhga yoki o‘qituvchingizga murojaat qilishingiz mumkin. Biz doimiy yordam berishga tayyormiz.",
  },
  {
    question: "Kurs dars jadvali asosida o‘qitiladimi?",
    answer:
      "Ha, kurs qat’iy jadval asosida olib boriladi. Har bir dars oldindan belgilangan vaqtda boshlanadi.",
  },
  {
    question: "Kurs necha oy davom etadi?",
    answer:
      "Kurs odatda 3-6 oy davom etadi, lekin bu kurs turiga qarab farq qiladi.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1280px] mx-auto p-4 text-white bg-blue-900 rounded-md">
      {faqData.map((faq, index) => (
        <div key={index} className="border-t border-white/30">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left py-4 px-2 flex justify-between items-center">
            <span className="font-semibold">{faq.question}</span>
            <span className="text-xl">{openIndex === index ? "✕" : "+"}</span>
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`overflow-hidden transition-all duration-500 ease-in-out px-4 ${
              openIndex === index
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
            style={{ transitionProperty: "max-height, opacity" }}>
            <p className="pb-4 text-sm text-white/80 italic">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
