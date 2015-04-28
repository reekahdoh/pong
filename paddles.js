		var c = document.getElementById("gameCanvas");
		var ctx = c.getContext("2d");
		
		var paddleLeft = {
			x: 10,
			y: 40,
			width: 8,
			height: 120,
			colour: "black"
		};

		var paddleRight = {
			x: c.width - 18,
			y: 40,
			width: 8,
			height: 120,
			colour: "black"
		};

		var paddles = [paddleLeft, paddleRight];

		
		
		
		/* Function to update the Y coordinate of an array of panels */
		var updatePaddles = function(yCoordinate, paddles) {
			paddles.forEach(function(paddle) {
				//make mouse control centre point of paddles
				paddle.y = yCoordinate - (paddle.height / 2);
				return;
			});
		};

		/* Function to draw the paddles from an array */
		var drawPaddles = function(paddles) {
			paddles.forEach(function(paddle) {
				ctx.fillStyle = paddle.colour;
				ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
			});

		};

		/* Function to clear paddles from their current position 
		by painting over them with the canvas background colour */
		var clearPaddles = function(paddles) {
			ctx.fillStyle = "white"; //TODO: set to canvas colour
			paddles.forEach(function(paddle) {
				ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
			});
		};

		 //Function to handle movement of mouse
		function handleMouseMove(event) {
			clearPaddles(paddles);
			updatePaddles(event.clientY, paddles);
			drawPaddles(paddles);
		}
		
		
		//Initially draw the paddles with default values
		drawPaddles(paddles);
		