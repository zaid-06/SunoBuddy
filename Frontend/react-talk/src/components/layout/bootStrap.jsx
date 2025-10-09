import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { icon: <FaHome />, text: "Home" },
    { icon: <FaUser />, text: "Profile" },
    { icon: <FaCog />, text: "Settings" },
    { icon: <FaSignOutAlt />, text: "Logout" },
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-dark text-white d-flex flex-column align-items-${
          expanded ? "start" : "center"
        } p-3 vh-100 position-fixed`}
        style={{
          width: expanded ? "200px" : "70px",
          transition: "width 0.3s",
          borderRadius: "0 10px 10px 0",
        }}
      >
        <button
          className="btn btn-light mb-4 d-flex align-items-center justify-content-center"
          onClick={() => setExpanded(!expanded)}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            backgroundColor: "#007bff",
            border: "none",
          }}
        >
          <FaBars color="white" />
        </button>

        {/* Menu Items */}
        <div className="d-flex flex-column w-100">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center mb-3 p-2 rounded"
              style={{
                cursor: "pointer",
                backgroundColor: "rgba(255,255,255,0.1)",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")
              }
            >
              <div style={{ fontSize: "20px" }}>{item.icon}</div>
              {expanded && (
                <span className="ms-3" style={{ fontSize: "16px" }}>
                  {item.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: expanded ? "200px" : "70px",
          transition: "margin-left 0.3s",
        }}
      >
        {/* Top Navbar */}
        <Navbar bg="light" className="shadow-sm">
          <Container fluid>
            <Navbar.Brand>MyWebsite</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Page Content */}
        <div className="p-4">
          <h2>Welcome!</h2>
          <p>This is your main content area.</p>
        </div>
      </div>
    </div>
  );
}

export default MyNavbar;
