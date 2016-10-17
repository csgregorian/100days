// Background
var rect = new Path.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height],
    strokeColor: 'white'
});
rect.sendToBack();
rect.fillColor = '#3b4759';

var drop = new Path();
drop.style = {
	strokeColor: "grey",
	dashArray: [7, 3],
	strokeWidth: 1
}

var splash = new Shape.Circle({
	radius: 0,
	center: new Point(50, 0)
});
splash.style = {
	strokeColor: "#ABCDEF",
	strokeWidth: 2
}

var drops = [];
var splashes = [];

function onFrame(event) {
	if (event.count % 60 === 0) {
		var new_drop = drop.clone();
		new_drop.x = Math.random() * view.size.width;
		new_drop.target = Math.random() * view.size.height;
		new_drop.y = 0;
		new_drop.add(new Point(new_drop.x, 0));
		new_drop.dashArray = [Math.random() * 10 + 1, Math.random() * 7 + 1]
		drops.push(new_drop);
	}

	for (var d in drops) {
		if (drops[d].y < drops[d].target) {
			drops[d].add(new Point(drops[d].x, drops[d].y++));
		} else if (drops[d].y < drops[d].target+1) {
			drops[d].y++;
			console.log("asdf");
			var new_splash = new Shape.Circle({
				radius: 0,
				center: new Point(drops[d].x, drops[d].y)
			});
			new_splash.style = splash.style;
			splashes.push(new_splash);
		} else {
			drops[d].strokeColor.alpha -= 0.00133333;
		}
	}

	for (var s in splashes) {
		console.log(s);
		splashes[s].radius = splashes[s].radius + 0.3;
		splashes[s].strokeColor.alpha = (200-splashes[s].radius)/200
	}


}