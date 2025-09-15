import React from "react";
import "../styles/ColHints.css";

export default function ColHints({ puzzle, getColHints }) {
  return (
    <div className="col-hints">
      {Array.from({ length: puzzle.width }).map((_, c) => (
        <div key={c} className="col-hint">
          {getColHints(c).map((num, i) => (
            <div key={i}>{num}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
