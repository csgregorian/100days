var rect = new Shape.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height],
    strokeColor: '#277a45'
});
rect.sendToBack();
rect.fillColor = "#277a45";

var border = new Shape.Rectangle({
	point: [0, 0],
	size: [view.size.width, view.size.height],
	strokeColor: '#553311',
	strokeWidth: 120,
	shadowColor: "#222222",
	shadowBlur: 40,
	shadowOffset: new Point(20, 20)
});

var pockets = [];


function onResize(event) {
	rect.point = new Point(0, 0);
	rect.size = new Size(view.size.width, view.size.height);
}

var center = new Point(view.size.width/2, view.size.height/2);

var balls = [];

var ball = new Shape.Circle({
	center: center,
	radius: 30,
	// strokeColor: "white",
	fillColor: "orange",
	shadowColor: "#222222",
	shadowBlur: 20,
	shadowOffset: new Point(10, 10)
});

ball.velocity = new Point(0, 0);

function onFrame(event) {
	ball.position += ball.velocity;
	ball.velocity *= 0.99;

	var x = ball.position.x;
	var y = ball.position.y;

	var border = 90;

	if (x - border < 0 || x + border > view.size.width)
		ball.velocity.x *= - 1;

	if (y - border < 0 || y + border > view.size.height)
		ball.velocity.y *= - 1;

	if (ball.velocity.length < 0.5)
		ball.velocity = new Point(0, 0);
}

var trajectory = new Path({
	from: ball.position,
	strokeColor: "white"
});

function onMouseDrag(event) {
	trajectory.removeSegments(0);
	trajectory.add(ball.position);
	trajectory.add(event.point);
}

function onMouseUp(event) {
	if (event.type === 'mouseup') {
		ball.velocity = (ball.position - event.point)/10;
	}
}














