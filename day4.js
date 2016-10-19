var rect = new Shape.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height],
    strokeColor: 'black'
});
rect.sendToBack();
rect.fillColor = "#664488";

var center = new Point(view.size.width/2, view.size.height/2);

function Person() {
	var height = 100 + Math.floor(10 + Math.random() * view.size.height-200);

	var x = Math.floor(Math.random() * view.size.width);
	var color = new Color(0.5 * Math.random());

	var body = new Shape.Rectangle({
		point: [x, view.size.height - height],
		size: [60, height+50],
		fillColor: color
	});

	var head = new Shape.Circle({
		center: [x + 30, view.size.height - height],
		radius: 30,
		fillColor: color
	});


	var left_eye = new Shape.Ellipse({
		point: [x+ 4, view.size.height - height],
		size: [8, 12],
		fillColor: "white"
	});

	var right_eye = new Shape.Ellipse({
		point: [x + 15 + Math.random() * 8, view.size.height - height],
		size: [8, 12],
		fillColor: "white"
	});

	var eyes = new Group(left_eye, right_eye);
	eyes.position.x += Math.random() * 30

	return new Group(body, head, left_eye, right_eye);
}


function onMouseDown() {
	new Person();
}