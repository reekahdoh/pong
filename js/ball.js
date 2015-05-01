/**
 * Defined in paddles.js
 */
// var gameCanvas = document.getElementById("game-canvas");
// var ctx = gameCanvas.getContext("2d");
// var canvasColour = "white";
var ball = {
	centreX : 500,
	centreY : 300,
	radius : 15,
	colour : "black"
};

/* Function to update the X & Y coordinate of a ball */
var updateBall = function(b, xCoordinate, yCoordinate) {
	// make mouse control centre point of paddles
	b.centreX = xCoordinate;
	b.centreY = yCoordinate;
};

/* Function to draw the ball */
var drawBall = function(b, colour) {
	if (colour === undefined) {
		colour = b.colour;
	}
	ctx.beginPath();
	ctx.arc(b.centreX, b.centreY, b.radius, 0, 2 * Math.PI);
	ctx.fillStyle = colour;
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = colour;
	ctx.stroke();
	ctx.closePath();
};

/*
 * Function to clear ball from current position by painting over it with the canvas background colour
 */
var clearBall = function(b) {
	// TODO: make this work (draw a ball of canvas colour over existing one without leaving a thin outline?)
//	drawBall(b, canvasColour);
	
	// clear a rectangle slightly larger than the size of the drawn ball
	// Note: this cuts part of the paddles away if "collides" with them and ball re-drawn after paddles
	ctx.beginPath();
	ctx.clearRect(b.centreX - b.radius - 1, b.centreY - b.radius - 1, b.radius * 2 + 2, b.radius * 2 + 2);
	ctx.closePath();
};

// Function to handle movement of mouse
function moveBall(event) {
	clearBall(ball);
	updateBall(ball, event.offsetX, event.offsetY);
	drawBall(ball);
}

// Initially draw the ball with default values
drawBall(ball);
