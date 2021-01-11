class Food{
    constructor(){
        this.foodStock=20;
        this.lastfed;
        this.image = loadImage("images/Milk.png");

    }

    updateFoodStock(Foodstock){
        this.foodStock= foodStock;
    }

    getFedTime(lastFed){
        this.lastFed = lastFed;
    }
    
    deductFood(){
        if(this.foodStock > 0)(
           thsi.foodStock = foodStock -1
        )
        return this.foodStock
    }

    getfoodStock(){
        return this.foodStock
    }

    display(){
        var x = 80 , y = 100;

        imageMode(center)
            image(this.image,720,220,70,70);

            if(this.foodStock != 0 ){
                for(var i=0; i<this.foodStock;i++){
                    if(i%10==0){
                        x = 80;
                        y=y+50
                    }
   
   image(this.image,x,y,50,50);
   x=x+30;
                }
            }
        }
    }
             




