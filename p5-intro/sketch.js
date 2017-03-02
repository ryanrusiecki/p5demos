function setup() {
    createCanvas(windowWidth, windowHeight);
    background(24);
    noFill();
    stroke(196);
}

function draw() {
    strokeWeight(frameCount % 18);
    line(pmouseX, pmouseY, mouseX, mouseY);
    line(width - pmouseX, pmouseY, width - mouseX, mouseY);
}