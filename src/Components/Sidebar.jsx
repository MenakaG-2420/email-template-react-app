// Sidebar.js
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="sidebar">
      <Link to="/compose">
        <button> Compose</button>
      </Link>
      <Link
        to="/"
        className={path == "/" ? "sidebar-link active" : "sidebar-link"}
      >
        <span className="sidebar-icon">📥</span>
        Inbox
      </Link>
      <Link
        to="/sent"
        className={path == "/sent" ? "sidebar-link active" : "sidebar-link"}
      >
        <span className="sidebar-icon">📤</span>
        Sent
      </Link>
      <Link
        to="/drafts"
        className={path == "/drafts" ? "sidebar-link active" : "sidebar-link"}
      >
        <span className="sidebar-icon">📄</span>
        Drafts
      </Link>
      {/* Add more folders/labels as needed */}
    </div>
  );
};

export default Sidebar;
