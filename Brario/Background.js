class Background
{
    constructor()
    {   this.x = 0
        this.y = 0
        this.background = new Image()
        this.background.src = "Sprites/background.png"
    }

    draw()
    {   context.drawImage(this.background,this.x,this.y,250,240,0,0,600,480)
    }

    camera(velocity){
        this.x += velocity - (velocity - velocity/2.5)
    }


}

/*;*/