import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

function Home() {
  return (
    <div className="page-wrapper">
      <div className="hero">
        <h1>File Complaints<br /><span className="gradient-text">On the Blockchain</span></h1>
        <p>Tamper-proof, transparent, and decentralized. Every complaint is immutable and verifiable on-chain.</p>
        <div className="hero-btns">
          <Link to="/submit" className="btn-primary">Submit Complaint</Link>
          <Link to="/track" className="btn-outline">Track Status</Link>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-num purple">1,284</div>
          <div className="stat-label">Total Complaints</div>
        </div>
        <div className="stat-card">
          <div className="stat-num green">963</div>
          <div className="stat-label">Resolved</div>
        </div>
        <div className="stat-card">
          <div className="stat-num blue">321</div>
          <div className="stat-label">In Progress</div>
        </div>
      </div>
    </div>
  );
}

export default Home;