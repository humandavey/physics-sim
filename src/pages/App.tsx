import Canvas from "../components/Canvas";

const App = () => {

  const draw = (context: CanvasRenderingContext2D) => {
    context.beginPath();
    context.strokeRect(50, 50, 50, 50);
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