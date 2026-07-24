import React, { useRef } from "react"

function Canvas() {
  const canvasRef = useRef(null)

  return (
    <div id="grid-container">
      <canvas id="grid" ref={canvasRef} width="512" height="512" />
    </div>
  )
}

export default Canvas
