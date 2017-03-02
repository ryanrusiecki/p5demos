var img;
var x = 0;
var y = 0;

function preload() {
    img = loadImage("assets/louis_ghost_sm.png");
}

function setup() {
    createCanvas(96*4, 128*4);
    frameRate(2);
    background(128);
}

function draw() {
    if (x == 0 && y == 0){
        background(196);
    }

    tint(random(255), random(255), random(255));
    
    image(img, x, y, 96, 128);
    x = x + 96;
    // on the right hand side of the canvas?
    if (x >= width){
        y += 128;
        x = 0;
        if (y >= height){
            y = 0;
        }
    }
}
