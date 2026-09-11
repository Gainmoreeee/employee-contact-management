import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ApprovalActions from "../../components/approvals/ApprovalActions";
import Badge from "../../components/common/Badge";
import { FileCheck, ShieldAlert } from "lucide-react";

const mockApprovals = [
  { id: 1, contractId: "CTR-2026-104", employee: "Chipo Sithole", department: "Operations", role: "Operations Lead", stage: "Head of HR Review", status: "Pending" },
  { id: 2, contractId: "CTR-2026-108", employee: "Kudzai Moyo", department: "Finance", role: "Senior Auditor", stage: "Executive/CEO Sign-off", status: "Pending" },
  { id: 3, contractId: "CTR-2026-112", employee: "Tariro Ndlovu", department: "Engineering", role: "DevOps Engineer", stage: "Legal Compliance", status: "Pending" },
];

export default function Approvals() {
  return (
    <DashboardLayout>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700" }}>Contract Approvals</h1>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
            Review pending contract sign-offs across organizational stages.
          </p>
        </div>
      </div>

      <div className="approval-grid">
        {mockApprovals.map((item) => (
          <div key={item.id} className="approval-card">
            <div>
              <div className="approval-card-header">
                <div>
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "var(--color-accent-blue)", fontFamily: "monospace" }}>
                    {item.contractId}
                  </span>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "4px 0" }}>{item.employee}</h3>
                </div>
                <Badge status={item.status} />
              </div>

              <div className="approval-card-body">
                <div className="approval-meta">
                  <span><strong>Role:</strong> {item.role} ({item.department})</span>
                  <span><strong>Approval Stage:</strong> {item.stage}</span>
                </div>
              </div>
            </div>

            <ApprovalActions
              onApprove={() => alert(`Approved ${item.contractId}`)}
              onReject={() => alert(`Rejected ${item.contractId}`)}
            />
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}