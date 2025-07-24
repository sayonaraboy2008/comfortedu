import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditTeacher from "./Components/EditTeacher";
import AdminPanel from "./Components/AdminPanel";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
