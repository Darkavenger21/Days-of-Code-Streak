const player = new Player({         
    collisionBlocks,
    imageSrc: './img/king/idlef.png',
    frameRate: 11,

    animations: {
        idleRight: {
            frameRate: 8,
            farmeBuffer: 4,
            loop: true,
            imageSrc: './img/king/idlef.png',
        },
        idleLeft: {
            frameRate: 8,
            farmeBuffer: 4,
            loop: true,
            imageSrc: './img/king/idleLeftf.png',
        },
        runRight: {
            frameRate: 8,
            farmeBuffer: 4,
            loop: true,
            imageSrc: './img/king/runRight.png',
        },
        runLeft: {
            frameRate: 8,
            farmeBuffer: 4,
            loop: true,
            imageSrc: './img/king/runLeft.png',
        },
    }
})                                  

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
    collisionBlocks.forEach((collisionBlock) =>{
        collisionBlock.draw()
    })

    player.velocity.x = 0
    if(keys.d.pressed){       //giving players movement speed
        player.switchSprite('runRight')              
        player.velocity.x = 5
        player.lastDirection = 'right'
    }
    else if(keys.a.pressed){
        player.switchSprite('runLeft') 
        player.velocity.x = -5
        player.lastDirection = 'left'
    } else{
        if(player.lastDirection === 'left') player.switchSprite('idleLeft')
        else player.switchSprite('idleRight')
    }

    player.draw()
    player.update()

}

switchSprite(name) {
    if (this.image === this.animations[name].image) return
    this.currentFrame = 0
    this.image = this.animations[name].image
    this.frameRate = this.animations[name].frameRate
    this.frameBuffer = this.animations[name].frameBuffer
}
