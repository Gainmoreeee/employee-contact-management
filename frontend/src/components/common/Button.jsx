import React from "react";

export default function Button({ children, variant = "primary", icon: Icon, onClick, className = "" }) {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {Icon && <Icon size={16} />}
      <span>{children}</span>
    </button>
  );
}