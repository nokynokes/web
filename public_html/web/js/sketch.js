
var img;
function preload(){
  img = loadImage("../img/complib.gif");
}

function setup(){
 	var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
 	canvas.parent('myContainer');
 	//ortho(-width, width, height, -height/2, 0.1, 100);

}

function draw(){
	// if(mouseIsPressed){
	// 	fill(0);
	// }
	// else{
	// 	fill(255);
	// }
	// background(255);
	// translate(100,100,-100);
	// box(30);
	// rotateX(radians(45));
	// rotateZ(radians(45));
	// rotateY(radians(45));
	// ellipse(x, height/2, 20, 20);
 //  	x = x + 1;
 	// translate(100,100,-100);
  // 	rotate(PI/4, [1,1,0]);
  // 	box(30,60,100);
  // 	translate(50,50,-50);
  // 	rotate(PI/4, [1,1,0]);
  // 	cone(40,100,100);
  // 	beginShape();
	// vertex(100,23,-100);
	// vertex(200,23,-50);
	// vertex(150, 45,-100);
	// endShape();
	// for(var i = 0; i < 500; i+=100){
 //  		push();
 //  		fill(i * 0.1, 100, 100);

 //  		//line
 //  		translate(0, 100, 0);
 //  		line(-100, 0, i, 100, 0, i);

 //  		//triangles
 //  		translate(0, 100, 0);
 //  		triangle(
 //    	0, sin( i + frameCount * 0.1) * 10, i, 
 //    	60, 60, i, 
 //    	-60, 60, i);

 // 		 //quad
 //  		translate(0, 200, 0);
 //  		quad(
 //    	-100, i, 0,
 //    	100, i, 0,
 //   	 -100, 100, i,
 //    	100, 100, i
 //    	);
 //  		pop();
 //  	}
  background(255);
  texture(img);
  box(45);
}