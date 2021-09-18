( function(window){ 
var obj1 = {};
obj1.name = 'Sarvesh';
var greeting = "Hi";
obj1.s =  function(){
console.log ( greeting +obj1.name);
}
window.obj1 = obj1;
	})(window);
 
