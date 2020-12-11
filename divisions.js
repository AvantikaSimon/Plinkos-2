class Divisions {
    constructor(x, y, w, h) {
        var options = {
           isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = this.width;
        this.height = 200;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, this.w, this.h);
    }
};