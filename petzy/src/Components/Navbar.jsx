import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaPaw,
  FaBoxOpen,
  FaDonate,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="logo-container">
        <img src="/logo.png" alt="Petzy Logo" className="logo" />
        <Link to="/" className="title">
          PETZY
        </Link>
      </div>

      <div
        className={`menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home" className="nav-button">
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pet" className="nav-button">
            <FaPaw /> Pet
          </NavLink>
        </li>
        <li>
          <NavLink to="/pet_products" className="nav-button">
            <FaBoxOpen /> Pet Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" className="nav-button">
            <FaSignInAlt /> Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="nav-button">
            <FaUserPlus /> Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" className="nav-button">
            <FaSignOutAlt /> Logout
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
