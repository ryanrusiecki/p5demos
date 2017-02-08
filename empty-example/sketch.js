function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(24);

    // note to self: head
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(mouseX, mouseY+50, 18,18);

    strokeWeight(1);
    fill(0, 255, 0);
    textSize(mouseX);
    text("Hello World!", mouseX, mouseY);
    textSize(24);
    text(frameCount, 150, 50);
}
