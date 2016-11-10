var rect = new Shape.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height],
    strokeColor: 'black'
});
rect.sendToBack();
rect.fillColor = "black";

var center = new Point(view.size.width/2, view.size.height/2);

var width = view.size.width;
var height = view.size.height;
console.log(width);

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

var array = [];
for (i = 1; i <= 100; i++) array.push(i);

array = shuffle(array);

function draw_bar(array, n, color) {
	var max_height = Math.max.apply(null, array);
	var length = array.length;
	var x = (n / length) * width;
	var y = height - (array[n] / max_height) * height;
	var bar_width = (1 / length) * width;

	new Shape.Rectangle({
		from: [x, y],
		to: [x + bar_width, height],
		fillColor: color,
		strokeColor: "black"
	});
}

function draw() {
	for (var bar in array) {
		draw_bar(array, bar, "red");
	}
}

var states = [];

function sort() {
	draw();
	var min_index = 0;


	for (i = 0; i < 100; i++) {
		
		min_index = i;

		for (j = i + 1; j < 100; j++) {
			if (array[j] < array[min_index]) {
				min_index = j;
			}
		}


		var temp = array[min_index];
		array[min_index] = array[i];
		array[i] = temp;

		states.push(array.slice());
	}

	states.push(array.slice());
}

sort();

var i = 1;
setInterval(function() {
	array = states[i];
	project.clear();
	draw();
	if (i < states.length - 1)
		i++;
}, 100);

setInterval(function() {
	diff = [];
	for (var j in states[i]) {
		if (states[i-1][j] !== states[i][j]) {
			diff.push(j);
		}
	}

	for (var j in diff) {
		draw_bar(array, diff[j], "purple");
	}
}, 100);
