class Player{
    constructor(){      // creating a construtor for spawning multiple players if needed
        this.postion = {
            x: 100,
            y: 100,
        }

        this.velocity = {       //creating a velocity element to simulate acceleration due to gravity
            x:0,
            y:0,
        }

        this.width = 100
        this.height = 100
        this.sides ={                   //defining the sides of background
            bottom: this.postion.y + this.height,
        }
        this.gravity = 1
    }

    draw(){
        c.fillStyle='red'
        c.fillRect(this.postion.x, this.postion.y, this.width, this.height)
    }

    update(){

        this.postion.y += this.velocity.y

        if (this.sides.bottom + this.velocity.y < canvas.height){            //condtion to check if the cube has hit the bottom of background element
            this.velocity.y += this.gravity
            this.sides.bottom = this.postion.y + this.height
        }
        else{
            this.velocity.y = 0
        }
    }
}