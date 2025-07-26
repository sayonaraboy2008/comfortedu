// src/pages/AdminPanel.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TEACHERS_ENDPOINT = "https://6a81eace9afbeb48.mokky.dev/comfortteachers";
const TESTIMONIALS_ENDPOINT = "https://6a81eace9afbeb48.mokky.dev/testimonials";

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

  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    position: "",
    comment: "",
    image: "",
  });
  const [testimonials, setTestimonials] = useState([]);

  // 🔁 Ma’lumotlarni olish
  const fetchTeachers = () => {
    fetch(TEACHERS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
        setLoading(false);
      });
  };

  const fetchTestimonials = () => {
    fetch(TESTIMONIALS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  };

  useEffect(() => {
    fetchTeachers();
    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTestimonialChange = (e) => {
    setTestimonialForm({ ...testimonialForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(TEACHERS_ENDPOINT, {
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
      fetchTeachers();
    } else {
      alert("Xatolik yuz berdi!");
    }
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(TESTIMONIALS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testimonialForm),
    });

    if (response.ok) {
      alert("Fikr qo‘shildi!");
      setTestimonialForm({ name: "", position: "", comment: "", image: "" });
      fetchTestimonials();
    } else {
      alert("Fikrni qo‘shishda xatolik!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Aniq o‘chirishni xohlaysizmi?")) return;
    const response = await fetch(`${TEACHERS_ENDPOINT}/${id}`, {
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
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

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
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full sm:w-auto">
          Qo‘shish
        </button>
      </form>

      {loading ? (
        <p>⏳ Yuklanmoqda...</p>
      ) : (
        <div className="space-y-3">
          {teachers.map((t) => (
            <div
              key={t.id}
              className="border border-gray-300 rounded p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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

      <form
        onSubmit={handleTestimonialSubmit}
        className="space-y-2 mt-12 bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold">➕ Yangi fikr qo‘shish</h2>
        <input
          name="name"
          value={testimonialForm.name}
          onChange={handleTestimonialChange}
          className="border p-2 w-full"
          placeholder="Ism"
          required
        />
        <input
          name="position"
          value={testimonialForm.position}
          onChange={handleTestimonialChange}
          className="border p-2 w-full"
          placeholder="Lavozim"
          required
        />
        <input
          name="image"
          value={testimonialForm.image}
          onChange={handleTestimonialChange}
          className="border p-2 w-full"
          placeholder="Rasm URL"
        />
        <textarea
          name="comment"
          value={testimonialForm.comment}
          onChange={handleTestimonialChange}
          className="border p-2 w-full"
          placeholder="Fikr"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto">
          Fikrni qo‘shish
        </button>
      </form>

      <div className="mt-6 space-y-3">
        <h3 className="text-xl font-semibold">Yuklangan fikrlar:</h3>
        {testimonials.map((t) => (
          <div key={t.id} className="border p-3 rounded bg-gray-50">
            <p className="font-bold">
              {t.name} ({t.position})
            </p>
            <p className="italic">{t.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
