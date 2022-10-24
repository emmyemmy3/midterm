let ball;
let slider;
let answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now", "Cannot predict now.", ""]


function setup() {
  createCanvas(700, 500);
  slider = createSlider(1, 3, 2);
  ball = new eightBall();
}

function draw() {
  background(150);
 
//shake the magic 8 ball using the slider
 if (slider.value() == 1){
   ball.leftBall();
} 
 if (slider.value() == 3){
  ball.rightBall();
} 
 if (slider.value() == 2){
  ball.show();
}
}

   
   
class eightBall{
  constructor (){   
  }
  
 show () { 
//THE WHOLE BALL
//outer circle
  noStroke();
  fill(20);
  ellipse(350, 300, 350);
//inner circle
  fill(220);
  noStroke();
  ellipse(350, 300, 190);
//number 8
  stroke(20);
  strokeWeight(8);
//top line
  line(325, 250, 375, 250); 
//top diagonals
  line(325, 250, 318, 260);
  line(375, 250, 382, 260); 
//top verticals
  line(318, 260, 318, 290);
  line(382, 260, 382, 290); 
//middle line
  line(325, 300, 375, 300); 
//middle diagonals
  line(325, 300, 318, 290);
  line(375, 300, 382, 290);
  line(325, 300, 318, 310);
  line(375, 300, 382, 310);
//bottom line
  line(325, 350, 375, 350);
 //bottom diagonals
  line(325, 350, 318, 340);
  line(375, 350, 382, 340); 
 //bottom verticals
  line(318, 310, 318, 340);
  line(382, 310, 382, 340);
 } 
  
  
leftBall () {
  //THE WHOLE BALL
//outer circle
  noStroke();
  fill(20);
  ellipse(250, 300, 350);
//inner circle
  fill(220);
  noStroke();
  ellipse(250, 300, 190);
//number 8
  stroke(20);
  strokeWeight(8);
//top line
  line(225, 250, 275, 250); 
//top diagonals
  line(225, 250, 218, 260);
  line(275, 250, 282, 260); 
//top verticals
  line(218, 260, 218, 290);
  line(282, 260, 282, 290); 
//middle line
  line(225, 300, 275, 300); 
//middle diagonals
  line(225, 300, 218, 290);
  line(275, 300, 282, 290);
  line(225, 300, 218, 310);
  line(275, 300, 282, 310);
//bottom line
  line(225, 350, 275, 350);
 //bottom diagonals
  line(225, 350, 218, 340);
  line(275, 350, 282, 340); 
 //bottom verticals
  line(218, 310, 218, 340);
  line(282, 310, 282, 340);
}
  
  rightBall () {
//outer cirlce
  noStroke();
  fill(20);
  ellipse(450, 300, 350); 
//inner circle
  fill(220);
  noStroke;
  ellipse(450, 300, 190);
//number 8
  stroke(20);
  strokeWeight(8);
//top line
  line(425, 250, 475, 250); 
//top diagonals
  line(425, 250, 418, 260);
  line(475, 250, 482, 260); 
//top verticals
  line(418, 260, 418, 290);
  line(482, 260, 482, 290); 
//middle line
  line(425, 300, 475, 300); 
//middle diagonals
  line(425, 300, 418, 290);
  line(475, 300, 482, 290);
  line(425, 300, 418, 310);
  line(475, 300, 482, 310);
//bottom line
  line(425, 350, 475, 350);
 //bottom diagonals
  line(425, 350, 418, 340);
  line(475, 350, 482, 340); 
 //bottom verticals
  line(418, 310, 418, 340);
  line(482, 310, 482, 340);
  }
}

