import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditTeacher from "./Components/EditTeacher";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditTeacher />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
