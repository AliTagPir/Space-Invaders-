"use strict";
class Ship {
    constructor(x) {
        this.x = x;
        this.updatePosition();
        //this.player=player
    }
    move(distance) {
        //this.x+=distance
        this.x = this.x + distance;
        this.updatePosition();
    }
    updatePosition() {
        document.getElementById("ship").style.left = this.x + "px";
    }
}
class Invader {
    constructor(fleet, row, col) {
        this.row = row;
        this.col = col;
        this.element = document.createElement("div");
        this.element.classList.add("invader");
        document.body.appendChild(this.element);
        this.update(fleet);
    }
    update(fleet) {
        this.element.style.left = fleet.x + this.col * 15 + "px";
        this.element.style.top = fleet.y + this.row * 15 + "px";
    }
}
class Fleet {
    constructor(x, y, rows, cols) {
        this.invaders = [];
        this.x = x;
        this.y = y;
        this.rows = rows;
        this.cols = cols;
        this.invaders = [];
        for (let r = 0; r < this.rows; r++) {
            this.invaders.push([]);
            for (let c = 0; c < this.cols; c++) {
                this.invaders[r][c] = new Invader(this, r, c);
            }
        }
    }
    move(dx) {
        this.x += dx;
        this.update();
    }
    update() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                //  let anInvader=this.invaders [r[c]] 
                //  anInvader.update(this.x,this.y)//pass to each invader the postion of the fleet
                this.invaders[r][c].update(this);
                //pass to each invader the postion of the fleet
            }
        }
    }
}
