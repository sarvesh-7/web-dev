var person = {
name: "Sarvesh",
address :{
	city : "Mumbai",
	state : "Maharashtra",
	"Country of Origin" : "India"
},
age : 22
};

var a = 20;
console.log(person.address.city);

var person1 = new Object();
person1.name = "Mayur";
person1.address = new Object();
person1.address.city = "Mumabi";
person1.address.state = "Maharashtra";
console.log(person1);