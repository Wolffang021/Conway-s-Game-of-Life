import React, { useEffect, useRef } from "react"

function Canvas({ grid, setGrid }) {
  const cellHeight = 8
  const cellWidth = 8
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        ctx.fillStyle = grid[i][j] ? "rgb(75, 200, 65)" : "rgb(120, 120, 120)"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 0.1

        ctx.fillRect(cellWidth * j, cellHeight * i, cellWidth, cellHeight)
        ctx.strokeRect(cellWidth * j, cellHeight * i, cellWidth, cellHeight)
      }
    }
  }, [grid])

  function markCell(x, y) {
    let newGrid = []

    for (let i = 0; i < grid.length; i++) {
      newGrid[i] = []
      for (let j = 0; j < grid[i].length; j++) {
        newGrid[i][j] = grid[i][j]
      }
    }

    newGrid[x][y] = !grid[x][y]

    return newGrid
  }

  function handleClick(e) {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rect = e.currentTarget.getBoundingClientRect()

    const x = mouseX - rect.left
    const y = mouseY - rect.top

    const i = Math.floor(y / cellHeight)
    const j = Math.floor(x / cellWidth)

    setGrid(markCell(i, j))
  }

  return (
    <div id="grid-container">
      <canvas id="grid" ref={canvasRef} width="512" height="512" onClick={handleClick} />
    </div>
  )
}

export default Canvas
