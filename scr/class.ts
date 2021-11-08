class Ship{
    x:number
    constructor (x:number){
        this.x=x
        this.updatePosition()
        //this.player=player
    }
    move(distance:number){                     
        //this.x+=distance
        this.x=this.x+distance
        this.updatePosition()
    }
    updatePosition(){
       document.getElementById("ship")!.style.left=this.x+"px"
    }
}


class Invader{
    row:number
    col:number
    element:HTMLDivElement
    constructor (fleet:Fleet,row:number,col:number){
        this.row=row
        this.col=col
        this.element=document.createElement("div")
        this.element.classList.add("invader")
        document.getElementById("space")!.appendChild(this.element)
        this.update(fleet)
        
    }
    update(fleet:Fleet){
        this.element.style.left= fleet.x + this.col*4 + "%"
        this.element.style.top= fleet.y + this.row*4 + "%"
        
        
    }
}

class Fleet{
    invaders:any=[]
    x:number //left (of fleet)
    y:number //top (of fleet)
    rows:number
    cols:number
    dx:number
    constructor (x:number,y:number,rows:number,cols:number,dx:number){
        this.x=x
        this.y=y
        this.rows=rows
        this.cols=cols
        this.invaders=[]
        this.dx=dx
        for(let r=0; r<this.rows; r++){
            this.invaders.push([])
            for(let c=0; c<this.cols; c++){
                this.invaders[r][c] = new Invader(this,r,c)
            }
        }
    }
    move(){
        this.x+=this.dx
        this.update()

        // if(this.x>100){
        //     this.dx=-this.dx
        // }
        // else if(this.x<0){
        //     this.dx=-this.dx
        // }

        if(this.x>100 || this.x<0){
            this.dx=-this.dx
        }

    }
    update(){
        for(let r=0; r<this.rows; r++){
            for(let c=0; c<this.cols; c++){
              //  let anInvader=this.invaders [r[c]] 
              //  anInvader.update(this.x,this.y)//pass to each invader the postion of the fleet
              this.invaders [r][c].update(this)
             //pass to each invader the postion of the fleet
            }
        }
    }
}