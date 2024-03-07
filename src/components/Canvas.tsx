import { useEffect, useRef } from "react";

interface CanvasProps {
	draw: Function;
	width: number;
	height: number;
}

const Canvas = ({ width, height, draw }: CanvasProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas.getContext("2d");  
			if (context) {
				draw(context);
			}
		}
	},[]);

	return <canvas ref={canvasRef} height={height} width={width} />;
};

Canvas.defaultProps = {
	width: window.innerWidth,
	height: window.innerHeight
};

export default Canvas;