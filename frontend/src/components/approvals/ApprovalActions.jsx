import React from "react";
import Button from "../common/Button";
import { Check, X } from "lucide-react";

export default function ApprovalActions({ onApprove, onReject }) {
  return (
    <div className="approval-actions">
      <Button variant="primary" icon={Check} onClick={onApprove} style={{ flex: 1 }}>
        Approve
      </Button>
      <Button variant="secondary" icon={X} onClick={onReject} style={{ flex: 1 }}>
        Reject
      </Button>
    </div>
  );
}