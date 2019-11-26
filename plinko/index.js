// A queue contain all balls will be played
let listBall = []
// Configuration

const CONFIG = {
	gameContainer: document.body,
	gameWidth: 500,
	gameHeight: 800,
	ballSize: 4
}







/**
 * Plinko Game Class
 */
const Plinko = function () {


	const position = {
		verticalEdges: [],
		horizonalEdges: [],
		pegs: [],
		balls: []
	}


	// Initialize Game Ingredients
	let Engine = Matter.Engine,
		Render = Matter.Render,
		Runner = Matter.Runner,
		Composite = Matter.Composite,
		Composites = Matter.Composites,
		Common = Matter.Common,
		MouseConstraint = Matter.MouseConstraint,
		Mouse = Matter.Mouse,
		Query = Matter.Query,
		World = Matter.World,
		Bodies = Matter.Bodies


	// create engine
	let engine = Engine.create({
		enableSleeping: true
	}),
		world = engine.world


	// create renderer
	let render = Render.create({
		element: CONFIG.gameContainer,
		engine: engine,
		options: {
			width: CONFIG.gameWidth,
			height: CONFIG.gameHeight,
			wireframes: false
		}
	})


	Render.run(render)

	// create runner
	let runner = Runner.create()
	Runner.run(runner, engine)


	const size = CONFIG.ballSize


	// Export function which create a new ball
	let drop = ()=>{

		const circle = Bodies.circle(250 + 50*(-0.5 + Math.random()), -20, size, {
			friction: 0.00001,
			restitution: 0.5,
			density: 0.001,
			frictionAir: 0.05,
			sleepThreshold: 25,
			render: {
				fillStyle: "#ff00ff",
				visible: true
			}
		})


		Matter.Events.on(circle, "sleepStart", () => {
			Matter.Body.setStatic(circle, true)
		})


		World.add(world, circle)


		position.balls.push(circle)


		return circle
	}



	// Add pegs
	const pegs = []
	const spacingY = 35
	const spacingX = 40
	let i, j, lastI
	for (i = 0; i < 13; i++) {
		for (j = 1; j < i; j++) {
			pegs.push(
				Bodies.circle(
					250 + (j * spacingX - i * (spacingX / 2)),
					i * spacingY,
					size,
					{
						isStatic: true,
						render: {
							fillStyle: "#ffffff",
							visible: true
						}
					}
				)
			)
		}
		lastI = i
	}	
	World.add(world, pegs)
	position.pegs = pegs


	// Add balls container (vertical edge)
	for (i = 0; i < 14; i++) {
		World.add(
			world,
			Bodies.rectangle(
				90 - spacingX + (j * spacingX - i * spacingX),
				lastI * spacingY + 165,
				size / 2,
				lastI + 300,
				{
					isStatic: true,
					render: {
						fillStyle: "#ffffff",
						visible: true
					},
					chamfer: {
						radius: [size * 0.4, size * 0.4, 0, 0]
					}
				}
			)
		)
	}

	// Add balls container (bottom edge)
	World.add(
		world,
		Bodies.rectangle(200, lastI * 1.33 * spacingY + 200, 1000, 50, {
			isStatic: true,
			render: {
				fillStyle: "#ffffff",
				visible: true
			}
		})
	)


	



	// Construct Plinko object
	return {
		engine: engine,
		runner: runner,
		render: render,
		canvas: render.canvas,
		stop: function () {
			Matter.Render.stop(render)
			Matter.Runner.stop(runner)
		},
		// MORE ATTRIBUTES
		drop: drop,
		position: position
	}


}



// Game start
const App = Plinko()
// App.drop()

let interval = 0
const loop = () => {
	interval = setInterval(()=>App.drop(), 500)
}

const stopLoop = () => {
	return clearInterval(interval)
}
