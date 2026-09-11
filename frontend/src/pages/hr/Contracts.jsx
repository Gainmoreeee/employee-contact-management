import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ContractTable from "../../components/contracts/ContractTable";
import Button from "../../components/common/Button";
import { FilePlus, Search, Filter } from "lucide-react";

const mockContracts = [
  { id: 1, contractId: "CTR-2026-001", employeeName: "John Moyo", type: "Full-Time Permanent", startDate: "2024-01-15", expiryDate: "Indefinite", status: "Active" },
  { id: 2, contractId: "CTR-2026-042", employeeName: "Tendai Masika", type: "Fixed-Term Contract", startDate: "2025-10-01", expiryDate: "2026-09-30", status: "Expiring" },
  { id: 3, contractId: "CTR-2026-089", employeeName: "Brian Ndlovu", type: "Full-Time Permanent", startDate: "2023-06-01", expiryDate: "Indefinite", status: "Active" },
  { id: 4, contractId: "CTR-2026-104", employeeName: "Chipo Sithole", type: "Consultancy Agreement", startDate: "2026-03-01", expiryDate: "2026-12-31", status: "Pending" },
  { id: 5, contractId: "CTR-2025-012", employeeName: "David Khumalo", type: "Part-Time Contract", startDate: "2025-01-01", expiryDate: "2026-01-01", status: "Expired" },
];

export default function Contracts() {
  return (
    <DashboardLayout>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700" }}>Contract Repository</h1>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
            Review, issue, and manage organization agreements.
          </p>
        </div>
        <Button variant="primary" icon={FilePlus}>
          Create Contract
        </Button>
      </div>

      <div className="contract-toolbar">
        <div className="contract-search-box">
          <Search size={16} color="var(--color-text-muted)" />
          <input type="text" placeholder="Search by contract ID or employee..." />
        </div>
        <Button variant="secondary" icon={Filter}>
          Filter Status
        </Button>
      </div>

      <ContractTable contracts={mockContracts} />
    </DashboardLayout>
  );
}