"use strict";
function onKeydown(e) {
    console.log(e);
    if (e.key == "ArrowRight") {
        ship.move(1);
    }
    else if (e.key == "ArrowLeft") {
        ship.move(-1);
    }
    else if (e.key == " ") {
        ship.shoot();
    }
}
window.addEventListener("keydown", onKeydown);
let fleet = new Fleet(5, 5, 5, 10, 0.3);
let bullets = [];
let ship = new Ship(50);
setInterval(function () {
    fleet.move();
    moveBullets();
}, 50);
function moveBullets() {
    //move every bullet by its dx dy
    for (let i = bullets.length - 1; i >= 0; i--) {
        //n moveBullets() invoke move() and update() on every bullet
        bullets[i].update();
        if (bullets[i].move()) {
            bullets.splice(i, 1);
        }
    }
}
