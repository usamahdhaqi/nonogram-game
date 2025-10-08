import React, { useState } from "react";
import PuzzleLoader from "./components/PuzzleLoader";
import puzzles from "./data/puzzles";
import "./App.css";

function App() {
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  const handleSelectPuzzle = (puzzle) => {
    setSelectedPuzzle(puzzle);
  };

  const handleBackToMenu = () => {
    setSelectedPuzzle(null);
  };

  return (
    <div className="App">
      <h1>🧩 Nonogram Game</h1>
      {!selectedPuzzle ? (
        <div className="menu">
          <h2>Pilih Puzzle</h2>
          <div className="puzzle-list">
            {puzzles.map((p) => (
              <button
                key={p.id}
                className="menu-btn"
                onClick={() => handleSelectPuzzle(p)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <PuzzleLoader puzzle={selectedPuzzle} />
          <button className="back-btn" onClick={handleBackToMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="back-icon"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Kembali ke Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
