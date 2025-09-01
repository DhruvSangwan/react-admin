import React, { useState } from "react";

function Login({ setIsAuthenticated, darkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock credentials
    if (email === "admin@example.com" && password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  const formStyle = {
    background: darkMode ? "#1e1e1e" : "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: darkMode
      ? "0 4px 15px rgba(0,0,0,0.7)"
      : "0 4px 15px rgba(0,0,0,0.1)",
    minWidth: "320px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: darkMode ? "#121212" : "#f1f1f1",
      }}
    >
      <form style={formStyle} onSubmit={handleLogin}>
        <h2 style={{ marginBottom: "20px" }}>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        {error && (
          <p style={{ color: "red", marginTop: "10px", fontSize: "14px" }}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
