class Rectangle{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw()
    {   context.strokeStyle = "rgb(0,0,0)";
        context.strokeRect(this.x,this.y,this.width,this.height);
    }

    inside(x, y)
    {
    }

    collide(other)
    {
    }

}