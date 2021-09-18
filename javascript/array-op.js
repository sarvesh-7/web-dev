//Creating array using array object
var arr = new Array();
arr[0] = "Sarvesh";
arr[1] = 22;
arr[2] = "Mumbai";
console.log(arr[0]);

//Create array using array literal

var arr = ["Sarvesh", function(age){console.log(age);}, {city : "Mumbai", state : "Maharashtra"}];
console.log(arr);
arr[1](22);
console.log(arr[2].city);

for(var i = 0; i<arr.length; i++)
{
	console.log(arr[i]);
}

var obj = { course : "HTML/css/javascript",
platform : "Coursera",
Mentor : "Yakoov"};
//printing name value pair of object using for loop
for ( var prop in obj){
	console.log(prop + ":" + obj[prop]);
}

//printing name value pair of array as same as object
for(var prop in arr){
	console.log(prop + ":" + arr[prop]);
}

arr.degree = "IT";
for(var prop in arr){
	console.log(prop + ":" + arr[prop]);
}