// src/pages/AdminPanel.jsx
import { Link } from "react-router-dom";
import { teachers } from "../Components/teachers";

const AdminPanel = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="space-y-3">
        {teachers.map((t) => (
          <div
            key={t.id}
            className="border border-gray-300 rounded p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-600">IELTS: {t.ielts}</p>
            </div>
            <Link to={`/edit/${t.id}`}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                Tahrirlash
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
