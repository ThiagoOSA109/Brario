class Sprites
{   constructor(image, width, height, size, wait)
    {   this.image = new Image();
        this.image.src = image;
        this.width = width;
        this.height = height;
        this.size = size;
        this.wait = wait;
        this.counter = wait;
        this.actualx = 0;
        this.actualy = 0;
    }

    draw(x, y, width,height)
    {   context.drawImage(this.image, this.actualx*this.width, this.actualy, this.width, this.height, x, y, width, height);
    }

    update(velocity)
    {   
        if(velocity == 0)
        {
            this.actualx = 0
        }
        if(velocity > 0)
        {
            if (--this.counter == 0)
            {	this.counter = this.wait;
                this.actualx = (this.actualx+1)%this.size;
            }
            this.actualy = 0
        }
        if(velocity < 0)
        {
            if (--this.counter == 0)
            {	this.counter = this.wait;
                this.actualx = (this.actualx+1)%this.size;
            }
            this.actualy = this.height
        }
    }
}