// homework assignment 1

//P5 library

function setup(){
    createCanvas (1000,500);
    drawBox();
    drawEars();
    drawFace();
    drawBow();
    drawEyes();
    drawNose();
    drawWhiskers();
}


function drawBox(){

  stroke("black");
  strokeWeight(4);
  fill("lightPink");
  rect(10,50,390,300);
}

function drawEars(){

  noStroke();
  fill("white");
  triangle(60,90,65,155,170,100);
  triangle(330,90,335,155,250,100);
}

function drawFace(){

  fill("white");
  ellipse(200,200,300,220);
}

function drawBow(){

  stroke("black");
  strokeWeight(4)
  fill("Red");
  ellipse(250,110,80,50);
  ellipse(255,110,30,20);
  ellipse(320,150,80,50);
  ellipse(305,145,40,20);
  ellipse(280,130,50,50);
}

function drawEyes(){

  fill("black");
  ellipse(125,220,20,25);
  ellipse(265,220,20,25);
}

function drawNose(){

  stroke("black");
  strokeWeight(4);
  fill("yellow");
  ellipse(200,250,25,17);
}

function drawWhiskers(){

  //left
  line(70,240,20,260);
  line(70,220,30,230);
  line(70,200,20,200);

  //right
  line(370,260,320,240);
  line(370,230,330,220);
  line(370,200,320,200);

}
