import React, { useRef, useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'

function App() {
  const rows = 64
  const columns = 64
  const [grid, setGrid] = useState(() => createGrid(rows, columns))
  const [playing, setPlaying] = useState(false)

  function createGrid(rows, columns) {
    let init = Array(rows).fill(null).map(() => Array(columns).fill(false))
    init[32][32] = true, init[33][33] = true, init[34][31] = true, init[34][32] = true, init[34][33] = true
    return init
  }

  function resetGrid() {
    setGrid(createGrid(rows, columns))
  }

  function playPause() {
    let newGrid = []
    for (let i = 0; i < rows; i++) {
      newGrid[i] = []
      for (let j = 0; j < columns; j++) {
        newGrid[i][j] = ((x, y, value) => {
          return !value
        })(i, j, grid[i][j])
      }
    }
    setGrid(newGrid)
  }

  return (
    <main>
      <div id="title-panel">
        <div className="title"><span>CONWAY'S GAME OF LIFE <a className="wiki-link" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">wiki↗</a></span></div>
      </div>

      <Canvas grid={grid} setGrid={setGrid}/>
      
      <div id="control-panel">
        <div className="button-container">
          <button className="play-pause-button" onClick={playPause}>▶ PLAY / ⏸ PAUSE</button>
          <button className="reset-button" onClick={resetGrid}>↺ RESET</button>
        </div>
        <p className="warning">* Display not supported for mobile devices</p>
      </div>
    </main>
  )
}

export default App
