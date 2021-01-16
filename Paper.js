class Paper {
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }
    
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.image = loadImage("DustinbinImage.png");
    
        World.add(world,this.body);
    }
    
    display(){
    
        ellipseMode(R);
    
        fill("green");
    
        circle(this.body.position.x,this.body.position.y,this.r);
    
    }
    }