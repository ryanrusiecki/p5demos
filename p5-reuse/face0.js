function setup() {
    createCanvas(500, 500);
    background(128);

    translate(250, 250);
    
    // draw your character relative to (0,0)
    fill(196);
    stroke(64);
    strokeWeight(2);
    ellipse(0, 0, 45, 70);

    fill(24);
    noStroke();
    ellipse(-8, -18, 10, 10);
    ellipse(8, -18, 10, 10);
    
    stroke(24);
    strokeWeight(1);
    line(-11, -24, -4, -30);
    line(4, -30, 11, -24);

    beginShape();
    vertex(-10, 5);
    vertex(0, 22);
    vertex(10, 10);
    endShape(CLOSE);
}
