import React, { useState } from "react";
import Grid from "./Grid";
import ColHints from "./ColHints";
import RowHints from "./RowHints";
import "../styles/PuzzleLoader.css";

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
      {!completed ? (
        <div className="puzzle-container">
          <ColHints puzzle={puzzle} getColHints={getColHints} />
          <div className="row-grid-wrapper">
            <RowHints puzzle={puzzle} getRowHints={getRowHints} />
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
