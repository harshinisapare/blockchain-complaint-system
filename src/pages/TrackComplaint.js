// src/pages/TrackComplaint.js
import React, { useState } from "react";
import "./Pages.css";
import API from "../services/api";

function TrackComplaint() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const handleTrack = async () => {
    if (!id) {
      alert("Please enter Complaint ID");
      return;
    }

    try {
      const res = await API.get(`/status/${id}`);
      setData(res.data);

    } catch {
      // fallback demo data
      setData({
        id: "CMP-0x4f3a...9c1d",
        status: "Under Review",
        description: "Sample complaint (demo mode)",
      });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-card">
        <h2>Track your complaint</h2>
        <p>Enter your complaint ID to view live status.</p>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            className="form-input"
            type="text"
            placeholder="e.g. CMP-0x4f3a..."
            style={{ flex: 1 }}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <button
            type="button"
            className="btn-primary"
            onClick={handleTrack}
          >
            Track
          </button>
        </div>

        {/* SHOW RESULT ONLY AFTER CLICK */}
        {data && (
          <div className="track-result">
            <div className="track-id">
              {data.id} · Block #18,432,190
            </div>

            <div className="status-badge">
              <span className="pulse"></span> {data.status}
            </div>

            <div className="timeline">
              <div className="tl-item">
                <div className="tl-dot done"></div>
                <div className="tl-text">
                  <strong>Submitted</strong> · Apr 3, 2026
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-dot done"></div>
                <div className="tl-text">
                  <strong>Verified</strong> · Apr 5, 2026
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-dot active"></div>
                <div className="tl-text">
                  <strong>{data.status}</strong> · In progress
                </div>
              </div>

              <div className="tl-item">
                <div className="tl-dot pending"></div>
                <div className="tl-text dim">
                  <strong>Resolved</strong> · Pending
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrackComplaint;