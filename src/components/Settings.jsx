import React, { useState, useEffect } from "react";

function Settings({ darkMode, setDarkMode }) {
  // Local state for notification preferences
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  // Persist notification preferences to localStorage
  useEffect(() => {
    const savedPrefs = localStorage.getItem("notificationPrefs");
    if (savedPrefs) setNotifications(JSON.parse(savedPrefs));
  }, []);

  useEffect(() => {
    localStorage.setItem("notificationPrefs", JSON.stringify(notifications));
  }, [notifications]);

  const handleToggle = (type) => {
    setNotifications({ ...notifications, [type]: !notifications[type] });
  };

  const sectionStyle = {
    background: darkMode ? "#1e1e1e" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: darkMode
      ? "0 4px 10px rgba(0,0,0,0.7)"
      : "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "500px",
  };

  const labelStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    fontSize: "16px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>Settings</h2>

      <div style={sectionStyle}>
        <h3>Theme</h3>
        <label style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            style={{ marginRight: "10px" }}
          />
          Dark Mode
        </label>
      </div>

      <div style={sectionStyle}>
        <h3>Notifications</h3>
        <label style={labelStyle}>
          Email Notifications
          <input
            type="checkbox"
            checked={notifications.email}
            onChange={() => handleToggle("email")}
          />
        </label>
        <label style={labelStyle}>
          SMS Notifications
          <input
            type="checkbox"
            checked={notifications.sms}
            onChange={() => handleToggle("sms")}
          />
        </label>
        <label style={labelStyle}>
          Push Notifications
          <input
            type="checkbox"
            checked={notifications.push}
            onChange={() => handleToggle("push")}
          />
        </label>
      </div>
    </div>
  );
}

export default Settings;
