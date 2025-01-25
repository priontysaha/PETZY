import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      
      <div className="logo-container">
        <img src="/logo.png" alt="Petzy Logo" className="logo" />
        <Link to="/" className="title">
          PETZY
        </Link>
      </div>

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pet">Pet</NavLink>
        </li>
        <li>
          <NavLink to="/pet_products">Pet Products</NavLink>
        </li>
        <li>
          <NavLink to="/donation">Donation</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
