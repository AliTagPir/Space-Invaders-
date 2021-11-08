"use strict";
function onKeydown(e) {
    console.log(e);
    if (e.key == "ArrowRight") {
        ship.move(10);
    }
    else if (e.key == "ArrowLeft") {
        ship.move(-10);
    }
}
window.addEventListener("keydown", onKeydown);
let fleet = new Fleet(20, 20, 5, 10);
alert("hello");
let ship = new Ship(300);
setInterval(function () { fleet.move(1); }, 50);
