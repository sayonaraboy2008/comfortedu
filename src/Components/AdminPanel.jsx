// src/pages/AdminPanel.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ENDPOINT = "https://6a81eace9afbeb48.mokky.dev/comfortteachers"; // << o'zingizni endpoint

const AdminPanel = () => {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    ielts: "",
    experience: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);

  // 🔁 Ma’lumotlarni olish
  const fetchTeachers = () => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // 🔄 Form value o‘zgarishi
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ➕ POST – O‘qituvchi qo‘shish
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Yangi o‘qituvchi qo‘shildi!");
      setForm({
        name: "",
        ielts: "",
        experience: "",
        description: "",
        image: "",
      });
      fetchTeachers(); // yangilash
    } else {
      alert("Xatolik yuz berdi!");
    }
  };

  // ❌ O‘chirish
  const handleDelete = async (id) => {
    if (!window.confirm("Aniq o‘chirishni xohlaysizmi?")) return;

    const response = await fetch(`${ENDPOINT}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("O‘chirilgan!");
      fetchTeachers();
    } else {
      alert("O‘chirib bo‘lmadi!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* 🔼 O‘qituvchi qo‘shish formasi */}
      <form
        onSubmit={handleSubmit}
        className="space-y-2 mb-8 bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold">➕ Yangi o‘qituvchi qo‘shish</h2>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Ism"
          required
        />
        <input
          name="ielts"
          value={form.ielts}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="IELTS"
          required
          type="number"
        />
        <input
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Tajriba"
          required
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Tavsif"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Rasm URL (ixtiyoriy)"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Qo‘shish
        </button>
      </form>

      {/* 📃 O‘qituvchilar ro‘yxati */}
      {loading ? (
        <p>⏳ Yuklanmoqda...</p>
      ) : (
        <div className="space-y-3">
          {teachers.map((t) => (
            <div
              key={t.id}
              className="border border-gray-300 rounded p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-600">IELTS: {t.ielts}</p>
              </div>
              <div className="flex gap-2">
                <Link to={`/edit/${t.id}`}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                    Tahrirlash
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                  O‘chirish
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
