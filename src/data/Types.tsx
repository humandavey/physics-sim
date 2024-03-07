export class FixedBox {
	width: number;
	height: number;
	x: number;
	y: number;
	xVelo: number;
	yVelo: number;
	forces: Array<Force>;

	constructor(width: number, height: number, x?: number, y?: number, xVelo?: number, yVelo?: number, forces?: Array<Force>) {
		this.width = width;
		this.height = height;
		this.x = x ? x : 0;
		this.y = y ? y : 0;
		this.xVelo = xVelo ? xVelo : 0;
		this.yVelo = yVelo ? -yVelo : 0;
		this.forces = forces ? forces : [];

		console.log(forces);
	}

	update(context: CanvasRenderingContext2D) {
		context.beginPath();
		context.strokeRect(this.x, this.y, this.width, this.height);

		this.forces.forEach(force => {
			this.xVelo += force.magnitude * Math.cos(force.direction) / 100;
			this.yVelo += force.magnitude * Math.sin(force.direction) / 100;
		});

		this.x += this.xVelo;
		this.y += this.yVelo;
	}
}

export class Force {
	magnitude: number;
	direction: number;

	constructor(magnitude: number, direction: number) {
		this.magnitude = magnitude;
		this.direction = direction * -1 * Math.PI / 180;
	}
}