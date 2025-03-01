class Walker {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
    }

    //define methods
    show() {
        //stroke(color)
        stroke(random(255), random(255), random(255));
        //point draws a single pixel at given position 
        point(this.x, this.y);
    }

    step() {
        //let vs const: const is immutable
        let choice = floor(random(4));
        ///note triple equal signs 
        if (choice === 0) {
            this.x++; 
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else if (choice === 3) {
            this.y--;
        }

        /*
        old code: 4 possible steps (up, down, left, right)
        */
    }
}
//function runs once 
function setup() {
    createCanvas(400, 400);
    walker = new Walker(); 
    background(255);
}

//function runs continuously after setup 
function draw() {
    walker.step(); 
    walker.show(); 
}