import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-light">
    <div className="container bg-light">
      <nav className="navbar flex-column navbar-light bg-light py-3">
        {/* Center Logo */}
        <Link to="/" className="navbar-brand fw-bold fs-2">
          Businessly
        </Link>
        {/* Nav Links */}
        <ul className="navbar-nav flex-row gap-4">
          <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/addblog" className="nav-link">Add Blog</NavLink></li>
          <li className="nav-item"><NavLink to="/manageblog" className="nav-link">Manage Blog</NavLink></li>
        </ul>
      </nav>
    </div>
    </div>
  );
}