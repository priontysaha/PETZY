import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import Logout from "./Logout";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        PETZY
      </Link>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pet">Pet</NavLink>
        </li>
        <li>
          <NavLink to="/pet_products">Pet_Products</NavLink>
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
