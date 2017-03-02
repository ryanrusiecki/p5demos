var img;

function preload() {
    img = loadImage("assets/louis_ghost_sm.png");
    imageMode(CENTER);
}

function setup() {
    createCanvas(500, 500);
    background(128);
}

function draw() {
    translate(mouseX, mouseY);
    rotate(radians(frameCount));
    tint(random(255), 128, 128);
    image(img,0, 0, 96, 128);
}
