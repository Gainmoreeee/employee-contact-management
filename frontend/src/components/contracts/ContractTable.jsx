import React from "react";
import Badge from "../common/Badge";
import { Eye, Download, MoreVertical } from "lucide-react";

export default function ContractTable({ contracts }) {
  return (
    <div className="table-card">
      <table className="custom-table">
        <thead>
          <tr>
            <th>CONTRACT ID</th>
            <th>EMPLOYEE</th>
            <th>TYPE</th>
            <th>START DATE</th>
            <th>EXPIRY DATE</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>
                <strong style={{ fontFamily: "monospace", color: "var(--color-accent-blue)" }}>
                  {contract.contractId}
                </strong>
              </td>
              <td>
                <strong>{contract.employeeName}</strong>
              </td>
              <td>{contract.type}</td>
              <td>{contract.startDate}</td>
              <td>{contract.expiryDate}</td>
              <td>
                <Badge status={contract.status} />
              </td>
              <td>
                <div style={{ display: "flex", gap: "4px" }}>
                  <button className="action-btn-ghost" title="View Details">
                    <Eye size={16} />
                  </button>
                  <button className="action-btn-ghost" title="Download PDF">
                    <Download size={16} />
                  </button>
                  <button className="action-btn-ghost">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}