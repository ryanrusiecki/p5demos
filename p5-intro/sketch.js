function setup() {
    createCanvas(400, 400);
    background(24);
    noFill();
    stroke(196);
}

function draw() {
     strokeWeight(frameCount % 18);
     line (pmouseX, pmouseY, mouseX, mouseY);
     line (width - pmouseX, pmouseY,
           width - mouseX, mouseY);
}
