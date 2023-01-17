class Sprite{
    constructor({position, imageSrc, farmeRate = 1}){
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / this.farmeRate
            this.height = this.image.height
        }
        this.image.src = imageSrc
        this.loaded = false
        this.farmeRate = farmeRate
        this.currentFrame = 0
        this.elapsedFrames = 0
        this.frameBuffer = 4
    }

    draw(){
        if(!this.loaded) return
        const cropbox = {
            position: {
                x: this.width * this.currentFrame,
                 y:0,
             },
            width: this.width,
            height: this.height,
            }
        c.drawImage(this.image,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width, 
            cropbox.height,
            this.position.x, 
            this.position.y,
            this.width,
            this.height
            )
          this.updateFarmes()  
    }

    updateFarmes(){
        this.elapsedFrames++

        if(this.elapsedFrames % this.frameBuffer === 0){
            if(this.currentFrame < this.farmeRate - 1) this.currentFrame++
            else this.currentFrame = 0
        }
    }
}