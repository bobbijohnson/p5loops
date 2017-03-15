function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    strokeWeight(6);
    stroke(255);
    
    var x = 0;
    while(x<width){
        fill(20,10,200);
        rect(x,100,25,25);
        x = x + 50;
    }
    var x = 0;
    while(x<width){
        fill(200,10,20);
        ellipse(x,350,25,25);
        x = x + 10;
    }
    var x = 0;
    while(x<width){
        fill(200,10,200);
        rect(x,220,25,25);
        x = x + 50;
    }
}