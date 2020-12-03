class ground extends baseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }
    display(){
        strokeWeight(2);
        stroke('rgb(0,0,0)');
        super.display();
    }
}