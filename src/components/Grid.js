import React, { useState } from "react";
import Cell from "./Cell";

export default function Grid({ puzzle, onComplete }) {
  const [grid, setGrid] = useState(
    Array(puzzle.height).fill().map(() => Array(puzzle.width).fill(0))
  );

  const toggleCell = (r, c) => {
    const newGrid = grid.map(row => [...row]);
    newGrid[r][c] = newGrid[r][c] ? 0 : 1;
    setGrid(newGrid);

    // Cek apakah sudah selesai
    if (JSON.stringify(newGrid) === JSON.stringify(puzzle.solution)) {
      onComplete();
    }
  };

  return (
    <div className="grid">
      {grid.map((row, r) =>
        row.map((cell, c) => (
          <Cell
            key={`${r}-${c}`}
            filled={grid[r][c]}
            onClick={() => toggleCell(r, c)}
          />
        ))
      )}
    </div>
  );
}
