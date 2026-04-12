import React from "react";
import { Link, useLocation } from "react-router-dom";
import WalletConnect from "./WalletConnect";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-custom">
      {/* Brand */}
      <div className="navbar-brand-custom">
        <div className="brand-icon">⚖</div>
        <span>Complaint System</span>
      </div>

      {/* Nav Links */}
      <div className="nav-links">
        <Link to="/" className={`nav-link-custom ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>
        <Link to="/submit" className={`nav-link-custom ${isActive("/submit") ? "active" : ""}`}>
          Submit
        </Link>
        <Link to="/track" className={`nav-link-custom ${isActive("/track") ? "active" : ""}`}>
          Track
        </Link>
        <Link to="/dashboard" className={`nav-link-custom ${isActive("/dashboard") ? "active" : ""}`}>
          Dashboard
        </Link>
      </div>

      {/* Wallet */}
      <WalletConnect />
    </nav>
  );
}

export default Navbar;