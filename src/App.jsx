import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Header from "./components/Header";
import Toast from "./components/Toast";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [toast, setToast] = useState(null);

  // Function to show toast
  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const sidebarStyle = {
    width: "240px",
    background: darkMode ? "#1e1e1e" : "#f8f8f8",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "30px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
  };

  const sidebarItemStyle = (page) => ({
    padding: "14px 12px",
    cursor: "pointer",
    fontWeight: activePage === page ? "bold" : "normal",
    color: activePage === page ? "#007bff" : sidebarStyle.color,
    borderRadius: "6px",
    marginBottom: "10px",
    transition: "background 0.3s",
  });

  const layoutStyle = { display: "flex" };
  const mainContentStyle = {
    flex: 1,
    padding: "20px 40px",
    background: darkMode ? "#121212" : "#f1f1f1",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    boxSizing: "border-box",
  };

  // Determine page content
  let content;
  if (!isAuthenticated) {
    content = <Login setIsAuthenticated={setIsAuthenticated} darkMode={darkMode} showToast={showToast} />;
  } else {
    if (activePage === "dashboard") content = <Dashboard darkMode={darkMode} showToast={showToast} />;
    else if (activePage === "users") content = <Users darkMode={darkMode} showToast={showToast} />;
    else if (activePage === "settings")
      content = <Settings darkMode={darkMode} setDarkMode={setDarkMode} showToast={showToast} />;
  }

  return (
    <>
      {isAuthenticated && (
        <Header
          pageTitle={activePage.charAt(0).toUpperCase() + activePage.slice(1)}
          darkMode={darkMode}
          onLogout={() => setIsAuthenticated(false)}
        />
      )}

      <div style={layoutStyle}>
        {isAuthenticated && (
          <div style={sidebarStyle}>
            <h2 style={{ marginBottom: "30px" }}>Admin Panel</h2>
            <ul style={{ listStyle: "none", padding: 0, flex: 1 }}>
              <li
                style={sidebarItemStyle("dashboard")}
                onMouseEnter={(e) => (e.target.style.background = darkMode ? "#2a2a2a" : "#e0e0e0")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}
                onClick={() => setActivePage("dashboard")}
              >
                Dashboard
              </li>
              <li
                style={sidebarItemStyle("users")}
                onMouseEnter={(e) => (e.target.style.background = darkMode ? "#2a2a2a" : "#e0e0e0")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}
                onClick={() => setActivePage("users")}
              >
                Users
              </li>
              <li
                style={sidebarItemStyle("settings")}
                onMouseEnter={(e) => (e.target.style.background = darkMode ? "#2a2a2a" : "#e0e0e0")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}
                onClick={() => setActivePage("settings")}
              >
                Settings
              </li>
            </ul>

            {/* Dark Mode Toggle */}
            <div style={{ marginTop: "15px" }}>
              <label style={{ cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                  style={{ marginRight: "8px" }}
                />
                Dark Mode
              </label>
            </div>
          </div>
        )}

        <div style={mainContentStyle}>
          {content}
          {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </div>
      </div>
    </>
  );
}

export default App;
