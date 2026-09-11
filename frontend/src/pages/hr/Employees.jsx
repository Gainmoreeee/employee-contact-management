import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import EmployeeTable from "../../components/employees/EmployeeTable";
import Button from "../../components/common/Button";
import { UserPlus, Filter } from "lucide-react";

const mockEmployees = [
  { id: 1, name: "John Moyo", initials: "JM", email: "john@company.com", department: "Finance", position: "Financial Analyst", contractType: "Full-Time", status: "Active" },
  { id: 2, name: "Tendai Masika", initials: "TM", email: "tendai@company.com", department: "IT", position: "Software Engineer", contractType: "Fixed-Term", status: "Expiring" },
  { id: 3, name: "Brian Ndlovu", initials: "BN", email: "brian@company.com", department: "HR", position: "HR Officer", contractType: "Full-Time", status: "Active" },
  { id: 4, name: "Chipo Sithole", initials: "CS", email: "chipo@company.com", department: "Operations", position: "Operations Lead", contractType: "Consultant", status: "Pending" },
];

export default function Employees() {
  return (
    <DashboardLayout>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700" }}>Employee Directory</h1>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
            Manage personnel records and contract assignments.
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="secondary" icon={Filter}>Filter</Button>
          <Button variant="primary" icon={UserPlus}>Add Employee</Button>
        </div>
      </div>

      <EmployeeTable employees={mockEmployees} />
    </DashboardLayout>
  );
}