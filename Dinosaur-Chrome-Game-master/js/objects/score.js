
// Fixed all variables from var -> let or const
// Separated variaable instantiations
(function(namespace) {
	const SCORE_FACTOR = 0.1;

	function formatOffset(offset) {
		return Math.floor(offset * SCORE_FACTOR);
	}

	function ScoreBoard(options) {
		this.scale = options.scale;
		this.x = options.left;
		this.y = options.bottom;
		this.colour = options.colour;
	}

	ScoreBoard.prototype = Object.create(GameObject.prototype);
	ScoreBoard.prototype.constructor = ScoreBoard;

	ScoreBoard.prototype.draw = function(context, offset) {
		context.fillStyle = this.colour;
		context.font = "16px Courier";
		context.textAlign = "right"; 
		context.fillText(formatOffset(offset), this.x, this.y);
	};

	namespace.ScoreBoard = ScoreBoard;
})(window);