// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Usar el contexto del tema
import "../styles/Navbar.css";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Obtener el estado y la función para cambiarlo

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className={`navbar-links ${isDarkMode ? "dark" : "light"}`}>
        <Link className={` ${isDarkMode ? "dark" : "light"}`} to="/">
          Home
        </Link>
        <Link className={` ${isDarkMode ? "dark" : "light"}`} to="/about">
          About
        </Link>
      </div>
      <button
        className={`theme-toggle-btn ${isDarkMode ? "dark" : "light"}`}
        onClick={toggleTheme}
      >
        {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
