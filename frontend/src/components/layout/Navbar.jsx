import React from "react";
import { Search, Bell } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-container">
      {/* Global Search Bar */}
      <div className="navbar-search-wrapper">
        <Search size={16} color="var(--color-text-muted)" />
        <input
          type="text"
          placeholder="Search contracts, employees, or documents..."
          className="navbar-search-input"
        />
      </div>

      {/* Action Area & Profile */}
      <div className="navbar-actions">
        <button className="navbar-icon-btn" aria-label="Notifications">
          <Bell size={18} color="var(--color-text-main)" />
          <span className="navbar-notification-dot" />
        </button>

        <div className="navbar-profile">
          <div className="navbar-avatar">SD</div>
          <div className="navbar-user-info">
            <h4 className="navbar-user-name">Sarah Dube</h4>
            <span className="navbar-user-role">HR Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}