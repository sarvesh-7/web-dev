//Pass by value
function myfunc(x){
	console.log("before changing the value", x);
	x = 10;
	console.log("after changing the value", x);
}
var y = 20;
myfunc (y);
console.log("value of y ", y);

//Pass by reference

function myfunc1(valueobj){
	console.log("before changing the value", valueobj);
	valueobj.x = 30;
	console.log("after changing the value", valueobj);
}
var obj = { x: 10 };
myfunc1(obj);
console.log("value of object after calling the function", obj);