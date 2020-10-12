let rad = 60;
  let xpos,ypos;
  let xspeed = 3.8;
  let yspeed=3.2;
  let xdirection=(-2,-1,1,2);
  let ydirection=(-2,-1,1,2);
function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  frameRate(30);
  rectMode(RADIUS);
  xpos = width / 2;
  ypos= height/2 ;
}
function draw() {
  let bleu = color(0,127,255);
  let jaune =color(247,227,95);
  let rouge =color(187,11,11);
  let vert = color(34,120,15);
  let taille = random(80);
  let orange=color(255,127,0);
  let blanc =color(255,255,255);
  let taille1 = random(30);
  let taille2 = random(8);
  let black = color(0,0,0);
  let white = color (255,255,255);
  let bleuclair=color(119,181,254);
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  if(mouseIsPressed === true){
    background(bleuclair);
    stroke(blanc);
    fill(blanc);
    ellipse(80+taille2,150+taille2,65,55);
    ellipse(140+taille2,150+taille2,65,55);
    ellipse(110+taille2,150+taille2,65,55);
    ellipse(95+taille2,125+taille2,65,55);
    ellipse(125+taille2,125+taille2,65,55);
    ellipse(460+taille2,550,105,90);
    ellipse(580+taille2,550,105,90);
    ellipse(510+taille2,550,105,90);
    ellipse(485+taille2,515,105,90);
    ellipse(545+taille2,515,105,90);
    fill(jaune);
    ellipse (700,100,100,100);
       if (xpos>width - rad|| xpos<rad){
        xdirection*=-1;
      }
      if ( ypos>height - rad || ypos<rad){
        ydirection*=-1;
      }
     stroke(black);
     strokeWeight (2);
     fill (white);
       quad(xpos+10, ypos+31+taille1, xpos+86, ypos+20,xpos+ 69,ypos+ 63+taille1,xpos+ 30,ypos+76);
       quad(xpos+38, ypos+31+taille1, xpos+86, ypos+20,xpos+ 69,ypos+ 63+taille1,xpos+ 30,ypos+76);
       frameRate(10);
  }
  else {
      if(keyIsPressed === true) {
            background(orange);
            stroke(blanc);
            fill(blanc);
            ellipse(pmouseX,pmouseY,taille+30,taille+100);
            ellipse(pmouseX,pmouseY,taille+100,taille+30);
            fill(jaune);
            ellipse(pmouseX,pmouseY,40,40);
      }
      else{
      if(pmouseX>300 && pmouseY>300){
      background(255);
      stroke(jaune);
      fill(bleu);
      ellipse(mouseX, mouseY, taille, taille);
      } else if(pmouseX<300 && pmouseY<300){
      background(0);
        stroke(orange);
        strokeWeight(8);
        fill(rouge);
      rect(mouseX,mouseY, taille, taille);
      } else if (pmouseX<300 && pmouseY>300){
        background(rouge);
        fill(jaune);
        strokeWeight(4);
        stroke(vert);
      triangle(mouseX+60+taille,mouseY-80,mouseX+70,mouseY+60,mouseX-50,mouseY-60);
      }else if (pmouseX>300 && pmouseY<300) {
        background(jaune);
        fill(vert);
        strokeWeight(2);
        stroke(rouge);
        quad(mouseX+taille+5,mouseY-50,mouseX-95,mouseY-80, mouseX-60, mouseY+8+taille, mouseX+100, mouseY+90);
      }
       else {
        background(orange);
       stroke(blanc);
        fill(blanc);
        ellipse(pmouseX,pmouseY,taille+30,taille+100);
        ellipse(pmouseX,pmouseY,taille+100,taille+30);
         fill(jaune);
        ellipse(pmouseX,pmouseY,40,40);
      }
      }
      frameRate(7);
    xpos = width / 2 ;
    ypos = height / 2 ;
  }
}
