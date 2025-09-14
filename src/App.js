import React from "react";
import PuzzleLoader from "./components/PuzzleLoader";
import puzzles from "./data/puzzles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>🧩 Nonogram Game</h1>
      <PuzzleLoader puzzle={puzzles[0]} />
    </div>
  );
}

export default App;
