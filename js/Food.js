class Milk  {

    constructor(x,y) {
    
this.foodStock=0;
this.lastFed; 

this.image=loadImage("images/Milk.png")
    
    }

    display(){
       
    var x=80,y=100;

    if(this.foodStock!=0){

        for(var i=0;i<this.foodStock;i++){
        
        if(i%10==0){
        
        x=80;
        y=y+50;
        
        }
        
        image(this.image,x,y,50,50);
        x=x+30;
        
        }
        
            }

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    

    }

    bedroom(){

       background(bedroom,750, 1000)
       imageMode(CENTER);

    }

    garden(){

        background(garden,750, 1000)
        imageMode(CENTER)

}

washroom(){

      background(washroom,750, 1000)

}



}



