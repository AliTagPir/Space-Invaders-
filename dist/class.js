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
        document.getElementById("space").appendChild(this.element);
        this.update(fleet);
    }
    update(fleet) {
        this.element.style.left = fleet.x + this.col * 4 + "%";
        this.element.style.top = fleet.y + this.row * 4 + "%";
    }
}
class Fleet {
    constructor(x, y, rows, cols, dx) {
        this.invaders = [];
        this.x = x;
        this.y = y;
        this.rows = rows;
        this.cols = cols;
        this.invaders = [];
        this.dx = dx;
        for (let r = 0; r < this.rows; r++) {
            this.invaders.push([]);
            for (let c = 0; c < this.cols; c++) {
                this.invaders[r][c] = new Invader(this, r, c);
            }
        }
    }
    move() {
        this.x += this.dx;
        this.update();
        // if(this.x>100){
        //     this.dx=-this.dx
        // }
        // else if(this.x<0){
        //     this.dx=-this.dx
        // }
        if (this.x > 100 || this.x < 0) {
            this.dx = -this.dx;
        }
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
