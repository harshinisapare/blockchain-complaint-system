// src/pages/SubmitComplaint.js
import React, { useState } from "react";
import "./Pages.css";
import API from "../services/api";

function SubmitComplaint() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async () => {
    console.log("Clicked"); // debug

    if (!name || !category || !details) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/submit", {
        name,
        category,
        description: details,
      });

      alert("✅ Complaint submitted!");

      // clear form
      setName("");
      setCategory("");
      setDetails("");

    } catch {
      alert("Backend not connected (OK for now)");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-card">
        <h2>Submit a complaint</h2>
        <p>Your complaint is stored permanently on-chain.</p>

        <div className="form-group">
          <label className="form-label">Full name</label>
          <input
            className="form-input"
            type="text"
            placeholder="e.g. Priya Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option>Fraud</option>
            <option>Harassment</option>
            <option>Corruption</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Complaint details</label>
          <textarea
            className="form-textarea"
            placeholder="Describe the issue in detail..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn-primary"
          style={{ width: "100%", padding: "12px" }}
          onClick={handleSubmit}
        >
          Submit on-chain
        </button>
      </div>
    </div>
  );
}

export default SubmitComplaint;