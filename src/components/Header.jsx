import React from "react";

function Header({ pageTitle, darkMode, onLogout }) {
  const headerStyle = {
    width: "100%",
    padding: "20px 40px",
    background: darkMode ? "#1e1e1e" : "#fff",
    color: darkMode ? "#fff" : "#000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: darkMode
      ? "0 2px 6px rgba(0,0,0,0.7)"
      : "0 2px 6px rgba(0,0,0,0.1)",
    borderBottom: darkMode ? "1px solid #333" : "1px solid #ddd",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const logoutButtonStyle = {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "none",
    background: "#dc3545",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={headerStyle}>
      <h2>{pageTitle}</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <span>Welcome Admin</span>
        <button style={logoutButtonStyle} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
