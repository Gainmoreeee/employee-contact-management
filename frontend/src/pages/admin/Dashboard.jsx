import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import Button from "../../components/common/Button";
import { Users, FileText, AlertTriangle, Clock, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700" }}>Welcome back, Sarah</h1>
          <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
            Here is your contract lifecycle summary for today.
          </p>
        </div>
        <Button variant="primary" icon={Plus}>
          New Contract
        </Button>
      </div>

      <div className="dashboard-grid">
        <StatCard
          title="Total Employees"
          value="486"
          subtitle="+12 this month"
          icon={Users}
        />
        <StatCard
          title="Active Contracts"
          value="452"
          subtitle="93% coverage"
          icon={FileText}
          isDark={true}
        />
        <StatCard
          title="Expiring Soon"
          value="18"
          subtitle="Requires attention"
          icon={AlertTriangle}
        />
        <StatCard
          title="Pending Approval"
          value="7"
          subtitle="4 HR, 3 Legal"
          icon={Clock}
        />
      </div>
    </DashboardLayout>
  );
}