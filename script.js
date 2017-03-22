function setup() {
	var myCanvas = createCanvas(800,250, WEBGL);
	myCanvas.parent('mySketch');
}

function draw() {
	background(0);
	var dirY = (mouseY / height - 0.5) * 11;
	var dirX = (mouseX / width - 0.5) * 11;

	directionalLight(204, 204, 204, dirX, dirY, 1);
	translate(-2 * (200), 0, 0);
	sphere(200);
	translate(-1.5 * (200), 0, 0);
	sphere(200);
	translate(3 * (200), 0, 0);
	sphere(200);
	translate(-1.5 * (200), 0, 0);
	sphere(200);
	translate(3 * (200), 0, 0);
	sphere(200);
	translate(-1.5 * (200), 0, 0);
	sphere(200);
	translate(3 * (200), 0, 0);
	sphere(200);
	translate(-1.5 * (200), 0, 0);
	sphere(200);
	translate(3 * (200), 0, 0);
	sphere(200);
	translate(-1.5 * (200), 0, 0);
	sphere(200);
}

function myFunction() {
    alert("If you are viewing this prototype in a screen larger than Iphone 6, please change the view in Inspect Element to Iphone 6 before continuing.");
}
