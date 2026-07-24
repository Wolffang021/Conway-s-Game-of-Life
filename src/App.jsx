import React, { useRef, useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'

function App() {
  const rows = 64
  const columns = 64
  const [grid, setGrid] = useState(() => createGrid(rows, columns))

  function createGrid(rows, columns) {
    return Array(rows).fill(null).map(() => Array(columns).fill(false))
  }

  function resetGrid() {
    setGrid(createGrid(rows, columns))
  }

  return (
    <main>
      <div id="title-panel">
        <div className="title"><span>CONWAY'S GAME OF LIFE</span></div>
      </div>

      <Canvas grid={grid} rows={rows} columns={columns}/>
      
      <div id="control-panel">
        <button className="play-pause-button">▶ PLAY / ⏸ PAUSE</button>
        <button className="reset-button" onClick={resetGrid}>↺ RESET</button>
      </div>
    </main>
  )
}

export default App
