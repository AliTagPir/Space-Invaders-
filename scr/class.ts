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
       document.getElementById("ship")!.style.left=this.x+"%"
    }
    shoot(){
        new Bullet(this.x+2,90,0,-1)
    }
}


class Invader{
    row:number
    col:number
    element:HTMLDivElement
    alive:boolean=true
    constructor (fleet:Fleet,row:number,col:number){
        this.row=row
        this.col=col
        this.element=document.createElement("div")
        this.element.classList.add("invader")
        document.getElementById("space")!.appendChild(this.element)
        this.update(fleet)
        
    }
    update(fleet:Fleet){
        //need to check alive property and hide dead invaders
        this.element.style.left= fleet.x + this.col*7 + "%" 
        this.element.style.top= fleet.y + this.row*7 + "%"
        
        
    }
    checkHit(){
        //check whether any bullet has hit this invader
        let ix= fleet.x + this.col*7
        let iy= fleet.y + this.row*7
        let wi= 4.5 
        let hi= 4.5 
        for (let i=0; i<bullets.length; i++){
            let bullet=bullets[i]
            //if(bullet.x==ix && bullet.y==iy)
            if(bullet.live==true){
                if(bullet.x>ix &&bullet.x<ix+wi){
                    if(bullet.y>iy && bullet.y<iy+hi){
                        
                        if(this.alive){
                          bullet.deadBullet()  
                          this.kill() //kill this invader 
                        }
                       
                    }
                }
            }
            // if(ix<=bullet.x<=wi && iy<=bullet.y<hi){
            //     alert("shot")
            // }
        }
    }
    kill(){
        this.alive=false
        this.element.style.display= "none";

    }
}

class Fleet{
    //invaders:any=[] <-----Bad way of making an array with type any
    //const someOtherVariable: Array<Array<AnyTypeYouWant>>; <----general form 2 dimensional arrays of type class
    invaders: Array<Array<Invader>>
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
        
        if(this.x>=32 || this.x<=0){
            this.dx=-this.dx
            this.y+=7
        }
        

    }
    
    checkHits(){
        for(let r=0; r<this.rows; r++){
            for(let c=0; c<this.cols; c++){

              this.invaders [r][c].checkHit()
  
            }
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


class Bullet{
    element:HTMLDivElement
    x:number
    y:number
    dx:number
    dy:number
    live:boolean=true
    constructor(x:number,y:number,dx:number,dy:number){
        this.x=x
        this.y=y
        this.dx=dx
        this.dy=dy
        this.element=document.createElement("div")
        this.element.classList.add("bullet")
        document.getElementById("space")!.appendChild(this.element)
        this.update()
        bullets.push(this)

    }
    update(){
        this.element.style.left=this.x+"%"
        this.element.style.top=this.y+"%"
    }
    //add a move method to the bullet class
    //in the method - move (this) bullet by dx, dy

    move(){ 
        //moves bullet by dx and dy, returns false if bullet leaves "space"
        this.x+=this.dx
        this.y+=this.dy
        if(this.y<0){
            this.kill() //kill this bullet
            return false
        }
        return true
    }
    kill(){
        document.getElementById("space")!.removeChild(this.element)

    }
    deadBullet(){
        this.element.style.display= "none";
        this.live=false
    }
}