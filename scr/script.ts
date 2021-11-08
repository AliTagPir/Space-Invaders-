"use strict"

function onKeydown(e:KeyboardEvent){
   

    console.log(e);
    if(e.key=="ArrowRight"){
        ship.move(10) 
    }
    else if(e.key=="ArrowLeft"){
        ship.move(-10)

    }

}
window.addEventListener("keydown",onKeydown)

let fleet= new Fleet(5,5,5,10,1)




let ship=new Ship(300)
setInterval(function(){fleet.move()},50)