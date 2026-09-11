import React from "react";

export default function Badge({ status }) {
  const normalized = status?.toLowerCase() || "pending";

  return (
    <span className={`status-badge status-badge-${normalized}`}>
      ● {status}
    </span>
  );
}