import React from "react";
import "./Cell.css";

export default function Cell({ filled, onClick }) {
  return (
    <div
      className={`cell ${filled ? "filled" : ""}`}
      onClick={onClick}
    ></div>
  );
}
