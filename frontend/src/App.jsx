import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Employees from "../pages/hr/Employees";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      
      {/* Placeholders */}
      <Route path="/contracts" element={<Dashboard />} />
      <Route path="/approvals" element={<Dashboard />} />
      <Route path="/signatures" element={<Dashboard />} />
      <Route path="/renewals" element={<Dashboard />} />
      <Route path="/reports" element={<Dashboard />} />
      <Route path="/intelligence" element={<Dashboard />} />
      <Route path="/settings" element={<Dashboard />} />
    </Routes>
  );
}