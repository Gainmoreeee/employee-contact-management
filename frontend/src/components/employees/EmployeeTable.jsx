import React from "react";
import Badge from "../common/Badge";
import { MoreVertical } from "lucide-react";

export default function EmployeeTable({ employees }) {
  return (
    <div className="table-card">
      <table className="custom-table">
        <thead>
          <tr>
            <th>EMPLOYEE</th>
            <th>DEPARTMENT</th>
            <th>POSITION</th>
            <th>CONTRACT TYPE</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>
                <div className="user-cell">
                  <div className="user-avatar-sm">{emp.initials}</div>
                  <div>
                    <strong style={{ display: "block" }}>{emp.name}</strong>
                    <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{emp.email}</span>
                  </div>
                </div>
              </td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
              <td>{emp.contractType}</td>
              <td>
                <Badge status={emp.status} />
              </td>
              <td>
                <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                  <MoreVertical size={16} color="var(--color-text-muted)" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}