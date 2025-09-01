import React, { useState, useEffect } from "react";

function Users({ darkMode, showToast }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedUsername, setEditedUsername] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        showToast("Failed to fetch users", "error");
      });
  }, [showToast]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // Filter users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Table & pagination styles
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    background: darkMode ? "#1e1e1e" : "#fff",
    color: darkMode ? "#fff" : "#000",
    fontFamily: "Arial, sans-serif",
    marginTop: "10px",
  };

  const thStyle = {
    background: darkMode ? "#333" : "#f0f0f0",
    padding: "10px",
    textAlign: "left",
    fontWeight: "bold",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: darkMode ? "1px solid #444" : "1px solid #ccc",
  };

  const rowHover = {
    cursor: "pointer",
    background: darkMode ? "#2a2a2a" : "#f9f9f9",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px" }}>Users List</h2>

      {/* Search */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            borderRadius: "5px",
            border: darkMode ? "1px solid #444" : "1px solid #ccc",
            background: darkMode ? "#1a1a1a" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />
      </div>

      {/* Users table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Username</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr
              key={user.id}
              style={{ ...tdStyle }}
              onMouseEnter={(e) => (e.currentTarget.style.background = rowHover.background)}
              onMouseLeave={(e) => (e.currentTarget.style.background = darkMode ? "#1e1e1e" : "#fff")}
            >
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.username}</td>
              <td style={tdStyle}>
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setEditedName(user.name);
                    setEditedEmail(user.email);
                    setEditedUsername(user.username);
                    setIsModalOpen(true);
                  }}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "5px",
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: "15px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              padding: "5px 12px",
              borderRadius: "5px",
              border: "none",
              background: currentPage === i + 1 ? "#007bff" : "#6c757d",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: darkMode ? "#1e1e1e" : "#fff",
              color: darkMode ? "#fff" : "#000",
              padding: "20px",
              width: "320px",
              borderRadius: "8px",
              boxShadow: darkMode ? "0 0 10px #000" : "0 0 10px #ccc",
            }}
          >
            <h3>Edit User</h3>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              style={{
                width: "100%",
                margin: "8px 0",
                padding: "8px",
                borderRadius: "4px",
                border: darkMode ? "1px solid #444" : "1px solid #ccc",
                background: darkMode ? "#121212" : "#fff",
                color: darkMode ? "#fff" : "#000",
              }}
            />
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              style={{
                width: "100%",
                margin: "8px 0",
                padding: "8px",
                borderRadius: "4px",
                border: darkMode ? "1px solid #444" : "1px solid #ccc",
                background: darkMode ? "#121212" : "#fff",
                color: darkMode ? "#fff" : "#000",
              }}
            />
            <input
              type="text"
              value={editedUsername}
              onChange={(e) => setEditedUsername(e.target.value)}
              style={{
                width: "100%",
                margin: "8px 0",
                padding: "8px",
                borderRadius: "4px",
                border: darkMode ? "1px solid #444" : "1px solid #ccc",
                background: darkMode ? "#121212" : "#fff",
                color: darkMode ? "#fff" : "#000",
              }}
            />
            <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
              <button
                onClick={() => {
                  setUsers(
                    users.map((u) =>
                      u.id === selectedUser.id
                        ? { ...u, name: editedName, email: editedEmail, username: editedUsername }
                        : u
                    )
                  );
                  setIsModalOpen(false);
                  showToast("User updated successfully", "success");
                }}
                style={{
                  padding: "6px 12px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#28a745",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#dc3545",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
