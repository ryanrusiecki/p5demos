var img;

function preload() {
    img = loadImage("assets/louis_ghost_sm.png");
}

function setup() {
    createCanvas(96 * 4, 128 * 4);
    frameRate(2);
}

function draw() {
    background(128);
    for (var y = 0; y < height; y += 128) {
        for (var x = 0; x < width; x += 96) {
            tint(random(255), random(255), random(255));
            image(img, x, y, 96, 128);
        }
    }
}