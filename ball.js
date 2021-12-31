class ball{
	constructor(){
		this.r = int(random(10,100));
		this.x = random(this.r,width) - this.r;
		this.y = random(this.r,height) - this.r;
		this.vx = random(-1,1);
		this.vy = random(-1,1);
		this.color = int(random(4));
	}
	update(){
		this.x += this.vx;
		this.y += this.vy;
	}
	colo(){
		let c = this.color;
		if(c == 0 ){
			fill(255,0,0);
		}
		else if(c == 1 ) {
			fill(0,255,0);
		}
		else if(c == 2 ) {

			fill(0,0,255);
		}
		else if(c == 3 ) {
			fill(0,255,255);
		}
	}
	show(){
		noStroke();
		this.colo();
		ellipse(this.x,this.y,this.r);
	}
	wall(){
		var r = this.r/2;
		if ( this.x -r < 0 || this.x + r > width){ 
			this.vx *= -1;
		}
		if ( this.y -r < 0 || this.y + r> height){
			this.vy *= -1;
		}
	}
}

