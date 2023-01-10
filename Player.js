class Player{
    constructor(){      // creatinga a construtor for spawning multiple players if needed
        this.postion = {
            x: 100,
            y: 100,
        }

        this.width = 100
        this.height = 100
        this.sides ={                   //defining the sides of background
            bottom: this.postion.y + this.height
        }
    }

    draw(){
        c.fillStyle='red'
        c.fillRect(this.postion.x, this.postion.y, this.width, this.height)
    }

    update(){
        if (this.sides.bottom < canvas.height){            //condtion to check if the cube has hit the bottom of background element
            this.postion.y++
            this.sides.bottom = this.postion.y + this.height
        }
    }
}