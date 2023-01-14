const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') //specifies that we will we working with 2d attributes only

canvas.width = 64*16  //64pixels used in a 16:9 ratio
canvas.height = 64*9

const backgroundLevel1 = new Sprite({
    position:{
        x:0,
        y:0,
    },
    imageSrc: './img/backgroundLevel1.png',
})

const player = new Player()             //cretaing a new player using constructors

const keys = {
    w: {
        pressed:false,
    },
    d: {
        pressed:false,
    },
    a: {
        pressed:false,
    }

}

//creating an animation loop
function animate(){
    window.requestAnimationFrame(animate)  //calling the function in itself to create a loop
    
  // creating new background every frame

    backgroundLevel1.draw()

    player.velocity.x = 0
    if(keys.d.pressed){                      //giving players movement speed
        player.velocity.x = 5
    }
    else if(keys.a.pressed){
        player.velocity.x = -5
    }

    player.draw()
    player.update()

}

animate()


