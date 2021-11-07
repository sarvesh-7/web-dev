document.addEventListener("DOMContentLoaded", function (event){
function A (event) {
	console.log(event);
	console.log(this);
	this.textContent = "Submitted";
var name = document.getElementById("Name").value;

var message = "<h2>Hello" + name + "!</h2>";
document.getElementById("content").innerHTML = message;

if (name === "Student"){
	var title = document.querySelector("#title").textContent;
	console.log(title);
	title = title + "hello students";
	document.getElementById("title").textContent = title;
}
}


//document.querySelector("button").addEventListener("click", A);
document.querySelector("button").onclick = A;
document.querySelector("body").addEventListener("mousemove", function (event){
	if(event.shiftKey === true){
		console.log(event);
	console.log("X:" + event.clientX);
	console.log("Y:" + event.clientY);
	}
	
});
})
