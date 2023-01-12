window.addEventListener('keydown', () => {

    switch (event.key){
        case 'w':
            if(player.velocity.y === 0){
                player.velocity.y = -10  //negative values are used because our co-ordinate system starts at top left cornor on or page.
            }
            break
        
        case 'a':
            keys.a.pressed = true
            break

        case 'd':
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', () => {

    switch (event.key){
        
        case 'a':
            keys.a.pressed = false
            break

        case 'd':
            keys.d.pressed = false
            break
    }
})