function Circle(radius){
	this.radius = radius;
}
Circle.prototype.getArea = function (){
	return Math.PI * Math.pow (this.radius, 2);
};
var mycircle = new Circle(25);
console.log(mycircle);
console.log(mycircle.getArea());

///this keyword in object literal

var objCircle = {
	radius : 10,
	 
	getArea1 : function(){
		var self = this;
		var inner_func = function(){
			self.radius = 20;
			console.log(window.radius);
		}
		inner_func();
		console.log(this.radius);
	}
};

objCircle.getArea1();