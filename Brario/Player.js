class Player extends Rectangle
{   constructor(){
        super(60,385,32,32);
        this.velocity = 0;
        this.sprites = new Sprites("Sprites/Brario.png", 64, 64, 3, 2);
    }

    draw(){
        this.sprites.draw(this.x, this.y, this.width, this.height);
    }

    update(){
        this.x += this.velocity
        this.sprites.update(this.velocity)

        if(this.x > canvas.width/2 && this.velocity > 0){
            //console.log(this.velocity)
            background.camera(this.velocity)
            this.x -= this.velocity
        }

        if(this.velocity > 0)
        {
            this.velocity -= 1
        }
        if(this.velocity < 0)
        {
            this.velocity += 1
        }
    }
}