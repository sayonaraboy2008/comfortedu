import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EditTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mokky endpoint
  const ENDPOINT = "https://6a81eace9afbeb48.mokky.dev/comfortteachers";

  useEffect(() => {
    fetch(`${ENDPOINT}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm(data);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${ENDPOINT}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Tahrir muvaffaqiyatli saqlandi!");
      navigate("/admin"); // qaytib yuborish admin sahifaga
    } else {
      alert("Xatolik yuz berdi!");
    }
  };

  if (loading || !form) return <p>Yuklanmoqda...</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">O'qituvchini tahrirlash</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Ism"
        />
        <input
          name="ielts"
          value={form.ielts}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="IELTS"
          type="number"
        />
        <input
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Tajriba"
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Tavsif"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded">
          Saqlash
        </button>
      </form>
    </div>
  );
};

export default EditTeacher;
