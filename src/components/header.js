import "../style/css/header.css";
import React from "react";

export default function header({ title, subtitle }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
}
