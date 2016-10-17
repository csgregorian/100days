var rect = new Shape.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height],
    strokeColor: 'black'
});
rect.sendToBack();
rect.fillColor = "black";

function onResize(event) {
	rect.point = new Point(0, 0);
	rect.size = new Size(view.size.width, view.size.height);
}


var center = new Point(view.size.width/2, view.size.height/2);

var circle = new Shape.Circle(center, 50);
circle.style.strokeColor = "white";


var line = new Path.Line(center, center + new Point(50, 0));
line.style = circle.style;

var sine_wave1 = new Path();
sine_wave1.style = circle.style;

var sine_wave2 = new Path();
sine_wave2.style = circle.style;

var cos_wave1 = new Path();
cos_wave1.style = circle.style;

var cos_wave2 = new Path();
cos_wave2.style = circle.style;

var sine_wave3 = new Path();
sine_wave3.style = circle.style;

var sine_wave4 = new Path();
sine_wave4.style = circle.style;

var cos_wave3 = new Path();
cos_wave3.style = circle.style;

var cos_wave4 = new Path();
cos_wave4.style = circle.style;

function onFrame(event) {
	var angle = event.count / (5 + (event.count)/120);
	var end_point = center + new Point(Math.sin(angle), Math.cos(angle))*50;	
	line.removeSegments(1);
	line.add(end_point);

	sine_wave1.add(end_point);
	sine_wave1.position += new Point(1, 0);

	cos_wave1.add(end_point);
	cos_wave1.position += new Point(0, 1);

	sine_wave2.add(end_point);
	sine_wave2.position += new Point(-1, 0);

	cos_wave2.add(end_point);
	cos_wave2.position += new Point(0, -1);

	sine_wave3.add(end_point);
	sine_wave3.position += new Point(1, 1);

	cos_wave3.add(end_point);
	cos_wave3.position += new Point(1, -1);

	sine_wave4.add(end_point);
	sine_wave4.position += new Point(-1, 1);

	cos_wave4.add(end_point);
	cos_wave4.position += new Point(-1, -1);
}
