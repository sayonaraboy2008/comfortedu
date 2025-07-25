// src/components/TeacherCard.jsx
import { Link } from "react-router-dom";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="bg-orange-500 text-white rounded-lg overflow-hidden shadow-md w-64 flex flex-col">
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="font-semibold text-lg">{teacher.name}</h2>
          <p>IELTS darajasi: {teacher.ielts}</p>
          <p>{teacher.experience}</p>
          <p>{teacher.description}</p>
        </div>
        <Link
          to="/ariza"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center inline-block">
          Ariza topshirish
        </Link>
      </div>
    </div>
  );
};

export default TeacherCard;
