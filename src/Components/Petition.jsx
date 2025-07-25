import React, { useState } from "react";

function Petition() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" || name === "surname") {
      if (!/^[a-zA-Zа-яА-ЯёЁ\s\-]*$/.test(value)) return;
    }
    if (name === "phone") {
      if (!/^[0-9+]*$/.test(value)) return;
    }
    setForm({ ...form, [name]: value });
  };

  const sendToTelegram = async () => {
    const date = new Date().toLocaleString("uz-UZ");

    const message = `📥 *Yangi Ariza*\n\n👤 Ism: ${form.name}\n👤 Familiya: ${form.surname}\n📞 Telefon: ${form.phone}\n🕒 Sana: ${date}`;

    const token = "8179919914:AAE2Ta0o_5VcKZ0Pk_fjpW02KylvhEOtuLk";
    const chatId = "@comfortpetitions";

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    alert("Arizangiz yuborildi!");
    setForm({ name: "", surname: "", phone: "" });
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h3 className="text-xl font-bold">Ariza Qoldiring</h3>
      <p className="text-sm text-gray-500">
        Ma’lumotlaringizni to‘g‘ri kiriting. Qasddan noto‘g‘ri ma’lumot yuborish
        — jinoiy javobgarlikka olib kelishi mumkin.
      </p>
      <div className="space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ismingiz"
          type="text"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="surname"
          value={form.surname}
          onChange={handleChange}
          placeholder="Familiyangiz"
          type="text"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+998"
          type="tel"
          required
          pattern="^\+998\d{9}$"
          className="w-full border p-2 rounded"
        />
      </div>
      <button
        onClick={sendToTelegram}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
        Jo‘natish
      </button>
    </section>
  );
}

export default Petition;
