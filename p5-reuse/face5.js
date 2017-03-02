function setup() {
    createCanvas(50 * 10, 80 * 8);
    rectMode(CENTER);
    frameRate(2);
    background(128);
}

var y = 40;

function draw() {
    if (y < height){
	var x = 25;
	while (x < width) {
            face(x, y);
            x = x + 50;
	}
	y = y + 80;
    }
}

function face(x, y) {
    push();
    translate(x, y);
    fill(random(160, 255));
    stroke(64);
    strokeWeight(2);
    var sz = random(4, 12);
    var ar = random(0.75, 1.25);
    ellipse(0, 0, 45, 70);

    fill(24);
    noStroke();
    ellipse(-8, -18, sz, sz * ar);
    ellipse(8, -18, sz, sz * ar);

    stroke(24);
    strokeWeight(random(3));
    var y1 = random(-30, -20);
    line(-11, random(-30, -20), -4, y1);
    line(4, y1, 11, random(-30, -20));

    strokeWeight(random(2, 3));
    var y1 = random(20);
    beginShape();
    vertex(-10, random(20));
    vertex(0, y1);
    vertex(10, random(20));
    endShape(CLOSE);
    pop();
}
