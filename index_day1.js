const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') //specifies that we will we working with 2d attributes only

canvas.width = 64*16  //64pixels used in a 16:9 ratio
canvas.height = 64*9

class Player{
    constructor(){      // creatinga a construtor for spawning multiple players if needed
        this.postion = {
            x: 100,
            y: 100,
        }

        this.width = 75
        this.height = 75
    }

    draw(){
        c.fillStyle='red'
        c.fillRect(this.postion.x, this.postion.y, this.width, this.height)
    }
}

c.fillStyle='white'
c.fillRect(0,0,canvas.width,canvas.height)

let y = 100
const height = 100
let bottom = y+100

//creating an animation loop
function animate(){
    window.requestAnimationFrame(animate)  //calling the function in itself to create a loop
    
    c.fillStyle='white'
    c.fillRect(0,0,canvas.width,canvas.height)  // creating new background every frame

    c.fillStyle='red'
    c.fillRect(50,y,100,height)
    if(bottom < canvas.height){            //condtion to check if the cube has hit the bottom of background element
        y++
        bottom = y+100
    }

}

animate()
