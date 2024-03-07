import { useEffect, useRef } from "react";

interface CanvasProps {
	draw: Function;
	width: number;
	height: number;
}

const Canvas = ({ width, height, draw }: CanvasProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			if (canvasRef.current) {
				const canvas = canvasRef.current;
				const context = canvas.getContext("2d");
				if (context) {
					context.beginPath();
					context.fillStyle = "white";
					context.fillRect(0, 0, canvas.width, canvas.height);
					draw(context);
				}
			}
		}, .01 * 1000);

		return () => clearInterval(interval);
	}, [draw]);

	return <canvas ref={canvasRef} height={height} width={width} />;
};

Canvas.defaultProps = {
	width: window.innerWidth - 4,
	height: window.innerHeight - 4
};

export default Canvas;