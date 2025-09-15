import React from "react";
import "../styles/RowHints.css";

export default function RowHints({ puzzle, getRowHints }) {
  return (
    <div className="row-hints">
      {puzzle.solution.map((row, i) => (
        <div key={i} className="row-hint">
          {getRowHints(row).map((num, j) => (
            <span key={j}>{num}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
