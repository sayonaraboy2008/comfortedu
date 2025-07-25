import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditTeacher from "./Components/EditTeacher";
import AdminPanel from "./Components/AdminPanel";
import Petition from "./Pages/Petition";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Foydalanuvchi uchun */}
          <Route path="/admin" element={<AdminPanel />} />
          {/* Admin sahifasi */}
          <Route path="/edit/:id" element={<EditTeacher />} />
          {/* Tahrirlash */}
          <Route path="/ariza" element={<Petition />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
