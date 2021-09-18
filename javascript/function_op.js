function multiply(x, y){
	return x * y;
}
console.log(multiply(3, 5));

//function as an object
multiply.version = 2.0;
console.log(multiply.version);

//function as a return value
function makemultiplier (mulitiplier){
	var myfunc = function(x){
		return x * mulitiplier;
	}
	return myfunc;
}

//creating reference of myfunc function
var multiplyby3 = makemultiplier(3);
console.log(multiplyby3(20));

//passing function as an argument
function do_operation(x, operation){
	return operation(x);
}

console.log(do_operation(20, multiplyby3));