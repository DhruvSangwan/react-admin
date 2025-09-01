import React from "react";


function Sidebar() {

    const sidebarStyle = {
        width: "200px",
        height: "100vh",
        background: "#1b1b1bff",
        color: "white",
        padding: "20px",
        boxSizing: "border-box"
    };
    return (
        <div style={sidebarStyle}>
            <h3>Menu</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Dashboard</li>
                <li>Users</li>
                <li>Settings</li>
            </ul>
        </div>
    );


}

export default Sidebar;