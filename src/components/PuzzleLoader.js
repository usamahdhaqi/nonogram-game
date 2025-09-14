import React, { useState } from "react";
import Grid from "./Grid";
import "./PuzzleLoader.css";

export default function PuzzleLoader({ puzzle }) {
  const [completed, setCompleted] = useState(false);

  const getRowHints = (row) => {
    return row.join("").split("0").filter(Boolean).map(x => x.length);
  };

  const getColHints = (colIndex) => {
    const col = puzzle.solution.map(r => r[colIndex]);
    return col.join("").split("0").filter(Boolean).map(x => x.length);
  };

  return (
    <div>
      <h2>Nonogram Puzzle</h2>
      {!completed ? (
        <div className="puzzle-container">
          {/* Kolom hints di atas */}
          <div className="col-hints">
            {Array.from({ length: puzzle.width }).map((_, c) => (
              <div key={c} className="col-hint">
                {getColHints(c).map((num, i) => (
                  <div key={i}>{num}</div>
                ))}
              </div>
            ))}
          </div>

          <div className="row-grid-wrapper">
            {/* Row hints di kiri */}
            <div className="row-hints">
              {puzzle.solution.map((row, i) => (
                <div key={i} className="row-hint">
                  {getRowHints(row).map((num, j) => (
                    <span key={j}>{num}</span>
                  ))}
                </div>
              ))}
            </div>

            {/* Grid utama */}
            <Grid puzzle={puzzle} onComplete={() => setCompleted(true)} />
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>🎉 Puzzle Selesai!</h3>
          <img src={puzzle.image} alt="reveal" width="150" />
        </div>
      )}
    </div>
  );
}
