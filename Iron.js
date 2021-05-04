class Iron {
    constructor(x,y) {
        var options = {
            isStatic:true
          //  'restitution':0.8,
            //'friction':3,
            //'density':30
        }
        this.body = Bodies.rectangle(x,y,75,50,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        //translate(pos.x,pos.y);
        fill("grey");
        stroke("black");
        strokeWeight(4);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}