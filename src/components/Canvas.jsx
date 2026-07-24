import React, { useEffect, useRef } from "react"

function Canvas({ grid, rows, columns }) {
  const cellHeight = 8
  const cellWidth = 8
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "rgb(120, 120, 120)"
    ctx.strokeStyle = "white"
    ctx.lineWidth = 0.2

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        ctx.fillRect(8 * j, 8 * i, cellWidth, cellHeight)
        ctx.strokeRect(8 * j, 8 * i, cellWidth, cellHeight)
      }
    }
  }, [grid])

  return (
    <div id="grid-container">
      <canvas id="grid" ref={canvasRef} width="512" height="512" />
    </div>
  )
}

export default Canvas
