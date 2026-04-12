// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import "./Pages.css";
import API from "../services/api";

function Dashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    API.get("/list")
      .then((res) => setComplaints(res.data))
      .catch(() => {
        // fallback demo data (your original)
        setComplaints([
          { id: "CMP-001", category: "Fraud", date: "Apr 3", status: "review" },
          { id: "CMP-002", category: "Harassment", date: "Apr 5", status: "open" },
          { id: "CMP-003", category: "Corruption", date: "Apr 7", status: "resolved" },
          { id: "CMP-004", category: "Other", date: "Apr 9", status: "resolved" },
        ]);
      });
  }, []);

  return (
    <div className="page-wrapper">
      {/* STATS (unchanged) */}
      <div className="dash-stats">
        <div className="dash-card">
          <div className="dash-card-label">Total filed</div>
          <div className="dash-card-val" style={{ color: "#a78bfa" }}>1,284</div>
        </div>

        <div className="dash-card">
          <div className="dash-card-label">Resolved</div>
          <div className="dash-card-val" style={{ color: "#34d399" }}>963</div>
        </div>

        <div className="dash-card">
          <div className="dash-card-label">Avg resolution</div>
          <div className="dash-card-val">4.2 days</div>
        </div>

        <div className="dash-card">
          <div className="dash-card-label">Open rate</div>
          <div className="dash-card-val" style={{ color: "#60a5fa" }}>25%</div>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-wrap">
        {complaints.length === 0 ? (
          <p>No complaints found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {complaints.map((c) => (
                <tr key={c.id}>
                  <td><span className="mono">{c.id}</span></td>
                  <td>{c.category}</td>
                  <td>{c.date}</td>

                  {/* 🔥 STATUS STYLING */}
                  <td>
                    <span className={`pill ${c.status}`}>
                      {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;