import React, { useEffect } from "react";

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Auto close in 3 sec
    return () => clearTimeout(timer);
  }, [onClose]);

  const toastStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "15px 20px",
    borderRadius: "8px",
    background: type === "success" ? "#28a745" : "#dc3545",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 9999,
    fontWeight: "bold",
  };

  return <div style={toastStyle}>{message}</div>;
}

export default Toast;
