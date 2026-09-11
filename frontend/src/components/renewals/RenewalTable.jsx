import React from "react";
import Badge from "../common/Badge";
import Button from "../common/Button";
import { RefreshCcw, AlertCircle } from "lucide-react";

export default function RenewalTable({ renewals }) {
  return (
    <div className="table-card">
      <table className="custom-table">
        <thead>
          <tr>
            <th>EMPLOYEE</th>
            <th>DEPARTMENT</th>
            <th>EXPIRY DATE</th>
            <th>DAYS REMAINING</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {renewals.map((item) => (
            <tr key={item.id}>
              <td>
                <strong>{item.employee}</strong>
              </td>
              <td>{item.department}</td>
              <td>{item.expiryDate}</td>
              <td>
                <span className={`days-badge ${item.daysRemaining <= 30 ? "days-badge-urgent" : ""}`}>
                  {item.daysRemaining} Days
                </span>
              </td>
              <td>
                <Badge status={item.status} />
              </td>
              <td>
                <Button variant="primary" icon={RefreshCcw}>
                  Initiate Renewal
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}