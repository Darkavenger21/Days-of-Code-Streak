class Player{
    constructor({collisionBlocks = [] }){      // creating a construtor for spawning multiple players if needed
        this.position = {
            x: 200,
            y: 200,
        }

        this.velocity = {       //creating a velocity element to simulate acceleration due to gravity
            x:0,
            y:0,
        }

        this.width = 25
        this.height = 25
        this.sides ={                   //defining the sides of background
            bottom: this.position.y + this.height,
        }
        this.gravity = 1

        this.collisionBlocks = collisionBlocks
        console.log(this.collisionBlocks)
    }

    draw(){
        c.fillStyle='red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){

        this.position.x += this.velocity.x
        //checking for horizontal collisions
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]

            //if a collision exists
            if(this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height)
                {
                    //collision on the x axis going towards left
                    if(this.velocity.x < 0){
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                        break
                    }

                    if(this.velocity.x > 0){
                        this.position.x = collisionBlock.position.x - this.width - 0.01
                        break
                    }
            }
        }
        
        //apply gravity
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y

        //check vertical collisions
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]

            //if a collision exists
            if(this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height)
                {
                    //collision on the x axis going towards left
                    if(this.velocity.y < 0){
                        this.velocity.y = 0
                        this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                        break
                    }

                    if(this.velocity.y > 0){
                        this.velocity.y = 0
                        this.position.y = collisionBlock.position.y - this.height - 0.01
                        break
                    }
            }
        }
    }
}