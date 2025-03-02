//exercise: make walker that has higher tendency of going to the right
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
        let r = random(1);
        ///note triple equal signs 
        if (r < 0.4) {
            this.x++; 
        } else if (r < 0.6) {
            this.x--; 
        } else if (r < 0.8) {
            this.y++; 
        } else {
            this.y--; 
        }

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