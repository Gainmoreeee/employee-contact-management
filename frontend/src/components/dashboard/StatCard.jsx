import React from "react";

export default function StatCard({ title, value, subtitle, icon: Icon, isDark = false }) {
  return (
    <div className={`stat-card ${isDark ? "stat-card-dark" : ""}`}>
      <div className="stat-card-header">
        <span className="stat-card-title">{title}</span>
        {Icon && <Icon size={20} color={isDark ? "#38BDF8" : "#2563EB"} />}
      </div>
      <div className="stat-card-value">{value}</div>
      {subtitle && <span className="stat-card-subtitle">{subtitle}</span>}
    </div>
  );
}