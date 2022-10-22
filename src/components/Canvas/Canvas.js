import React from "react";
import {useEffect, useRef} from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  const getContext = () => {
    const canvas = canvasRef.current;

    return canvas.getContext('2d');
  };

  useEffect(() => {
    const ctx = getContext();
    ctx.fillRect(0,0, 10, 10);
    ctx.save();
  })

  return (
    <div>
      <canvas className="canvas" ref={canvasRef} />
    </div>
  );
}

export default Canvas;
