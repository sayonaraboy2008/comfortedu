import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#112DA8] text-white relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="#" className="hover:text-orange-400">
            Biz Haqimizda
          </Link>
          <Link to="#" className="hover:text-orange-400">
            Kurs
          </Link>
          <Link to="#" className="hover:text-orange-400">
            O’qituvchilarimiz
          </Link>
          <Link to="#" className="hover:text-orange-400">
            Muhim savollar
          </Link>
          <Link
            to="#"
            className="px-4 py-1 border border-orange-400 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white transition">
            Ariza topshirish
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Side Drawer – 70% width */}
      <div
        className={`fixed top-0 left-0 h-full w-[70vw] bg-blue-900 text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex justify-between items-center mb-6">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col space-y-4">
          <Link to="#" onClick={toggleMenu} className="hover:text-orange-400">
            Biz Haqimizda
          </Link>
          <Link to="#" onClick={toggleMenu} className="hover:text-orange-400">
            Kurs
          </Link>
          <Link to="#" onClick={toggleMenu} className="hover:text-orange-400">
            O’qituvchilarimiz
          </Link>
          <Link to="#" onClick={toggleMenu} className="hover:text-orange-400">
            Muhim savollar
          </Link>
          <Link
            to="#"
            onClick={toggleMenu}
            className="mt-4 px-4 py-1 border border-orange-400 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white transition w-fit">
            Ariza topshirish
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
