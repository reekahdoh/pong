	/**
		This algorithm works on a single plain, the function will need to be called twice to work on two
		plains, ie x and y.
		ballCoordinate - single plain coordinate.
		ballRadius - radius of ball
		board_MIN - min plain value of board.
		board_MAX - max plain value of board.
		Returns true if there is a collision.
	*/
	function hasCollidedWithBoarder(ballCoordinate, ballRadius, board_MIN, board_MAX){
		var collision = false;
		
		if (ballCoordinate - ballRadius < board_MIN || ballCoordinate + ballRadius > board_MAX) {
			collision = true;    
		}
		
		return collision;
	}

	/**
		Function detects that a collision has happened.
		Ball - the ball object
		Paddle - the paddle object.
	*/
	function hasCollidedWithPaddle(ball, paddle){
		var collision = false;
		
		var rect1 = {x: ball.x, y: ball.y, width: ball.radius, height: ball.radius};
		var rect2 = {x: paddle.x, y: paddle.y, width: paddle.width, height: paddle.height};

		if (rect1.x < rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x &&
			rect1.y < rect2.y + rect2.height &&
			rect1.height + rect1.y > rect2.y) {

			collision = true;
		}

		return collision;
	}