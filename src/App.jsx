import React, { useState } from 'react'
import './App.css'

function App() {
  const [rows, setRows] = useState(8)
  const [columns, setColumns] = useState(8)
  const [grid, setGrid] = useState(() => createGrid(rows, columns))

  function createGrid(rows, columns) {
    return Array(rows).fill(null).map(() => Array(columns).fill(false))
  }

  function resetGrid() {
    setGrid(createGrid(rows, columns))
  }

  return (
    <main>
      <div id="dimension-panel">
        <div className="input-container">
          <p className="label">ROWS:</p>
          <input type="number" className="rows-input" value={rows} min="4" max="32" onChange={(e) => {setRows(e.target.value); setGrid}}/>
        </div>
        <div className="input-container">
          <p className="label">COLUMNS:</p>
          <input type="number" className="column-input" value={columns} min="4" max="32" onChange={(e) => {setColumns(e.target.value); setGrid}}/>
        </div>
      </div>

      <div id="grid-container"></div>
      
      <div id="control-panel">
        <button className="play-pause-button"> ▶ PLAY / ⏸ PAUSE</button>
        <button className="reset-button">↺ RESET</button>
      </div>
    </main>
  )
}

export default App