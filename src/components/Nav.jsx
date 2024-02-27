import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg-color">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <h1>John Doe</h1>
        </Link>
        {/* Bouton de bascule pour le menu mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menu de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
