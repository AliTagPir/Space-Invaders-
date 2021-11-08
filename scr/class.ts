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
        document.body.appendChild(this.element)
        this.update(fleet)
        
    }
    update(fleet:Fleet){
        this.element.style.left= fleet.x + this.col*15 + "px"
        this.element.style.top= fleet.y + this.row*15 +"px"
        
        
    }
}

class Fleet{
    invaders:any=[]
    x:number //left (of fleet)
    y:number //top (of fleet)
    rows:number
    cols:number
    constructor (x:number,y:number,rows:number,cols:number){
        this.x=x
        this.y=y
        this.rows=rows
        this.cols=cols
        this.invaders=[]
        for(let r=0; r<this.rows; r++){
            this.invaders.push([])
            for(let c=0; c<this.cols; c++){
                this.invaders[r][c] = new Invader(this,r,c)
            }
        }
    }
    move(dx:number){
        this.x+=dx
        this.update()

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