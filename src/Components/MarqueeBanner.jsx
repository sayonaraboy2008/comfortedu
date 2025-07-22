import React from "react";

function MarqueeBanner() {
  return (
    <div className="relative overflow-hidden bg-yellow-300 text-black py-2">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 inline-block font-semibold text-lg">
          🚨 Diqqat! Kursga ro‘yxatdan o‘tish 31-iyulda yakunlanadi! Joylar soni
          cheklangan.
        </span>
        <span className="mx-4 inline-block font-semibold text-lg">
          🚨 Diqqat! Kursga ro‘yxatdan o‘tish 31-iyulda yakunlanadi! Joylar soni
          cheklangan.
        </span>
      </div>
    </div>
  );
}

export default MarqueeBanner;
