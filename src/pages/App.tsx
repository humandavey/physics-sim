import { useEffect, useState } from "react";
import Canvas from "../components/Canvas";
import { FixedBox, Force } from "../data/Types";

const App = () => {
  const g = new Force(9.8, -90);
  const box = new FixedBox(50, 50, 50, 50, 5, 5, [g]);

  const draw = (context: CanvasRenderingContext2D) => {
    box.update(context);
  }

  return (
    <>
      <div>
        <Canvas draw={draw} />
      </div>
    </>
  );
}

export default App;