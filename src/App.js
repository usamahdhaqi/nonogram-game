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
            Kembali ke Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
