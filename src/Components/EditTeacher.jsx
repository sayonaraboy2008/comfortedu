// src/pages/EditTeacher.jsx
import { useParams } from "react-router-dom";
import { teachers } from "../Components/teachers";
import { useState } from "react";

const EditTeacher = () => {
  const { id } = useParams();
  const teacher = teachers.find((t) => t.id === parseInt(id));
  const [form, setForm] = useState({ ...teacher });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tahrirlandi (lekin hozircha real saqlash yo‘q)");
  };

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
