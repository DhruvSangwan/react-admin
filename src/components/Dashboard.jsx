import React from "react";

function Dashboard({ darkMode }) {
  const sectionStyle = {
    background: darkMode ? "#1e1e1e" : "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: darkMode
      ? "0 4px 10px rgba(0,0,0,0.7)"
      : "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={sectionStyle}>
          <h1>Welcome to Dashboard</h1>
          <p>This is the main content area.</p>
        </div>
        <div style={sectionStyle}>
          <h2>Quick Stats</h2>
          <p>Placeholder for stats or widgets.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
