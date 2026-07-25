import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'

function App() {
  const rows = 64
  const columns = 64
  const [grid, setGrid] = useState(() => createGrid(rows, columns))
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing)
      return

    const interval = setInterval(() => {
      setGrid(currentGrid => createNextPassGrid(currentGrid))
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [playing])

  function createGrid(rows, columns) {
    let init = Array(rows).fill(null).map(() => Array(columns).fill(false))
    init[32][32] = true, init[33][33] = true, init[34][31] = true, init[34][32] = true, init[34][33] = true
    return init
  }

  function createNextPassGrid(currentGrid = grid) {
    let newGrid = []

    for (let i = 0; i < rows; i++) {
      newGrid[i] = []

      for (let j = 0; j < columns; j++) {
        newGrid[i][j] = (() => {
          let neighbours = 0

          for (let x = i - 1; x <= i + 1; x++) {
            if (x < 0 || x === rows)
              continue

            for (let y = j - 1; y <= j + 1; y++) {
              if (y < 0 || y === columns)
                continue

              if (x === i && y === j)
                continue

              if (currentGrid[x][y])
                neighbours++
            }
          }

          return currentGrid[i][j] ? neighbours >= 2 && neighbours <= 3 : neighbours === 3
        })()
      }
    }

    return newGrid
  }

  return (
    <main>
      <div id="title-panel">
        <div className="title"><span>CONWAY'S GAME OF LIFE <a className="wiki-link" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">wiki↗</a></span></div>
      </div>

      <Canvas grid={grid} setGrid={setGrid}/>
      
      <div id="control-panel">
        <div className="button-container">
          <button className="play-pause-button" onClick={() => setPlaying(!playing)}>▶ PLAY / ⏸ PAUSE</button>
          <button className="next-pass-button" onClick={() => setGrid(createNextPassGrid())}>⏭ NEXT</button>
          <button className="reset-button" onClick={() => setGrid(createGrid(rows, columns))}>↺ RESET</button>
        </div>
        <p className="warning">* Display not supported for mobile devices</p>
      </div>
    </main>
  )
}

export default App
