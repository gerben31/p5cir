let balls = [];
var N = 20;
function setup(){
	createCanvas(700,500);
	for(let i = 0 ;i < N;i++){
		balls[i] = new ball();
	}

}
function draw(){
	background(0);
	for( let i = 0 ;i < N;i++ ){
		balls[i].update();
		balls[i].show();
		balls[i].wall();
	}

}
