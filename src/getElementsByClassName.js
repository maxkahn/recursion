// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	//we're doing this recursively. The base case is if I have no child elements
	//(and what is the element, here?)
	//the recursive case is to use the functions described in the spec to
	//go down and get elements, then call getElementsByClassName on them
  // your code here
  var elemList = [];
  var helper = function(elem) {
  	if (elem.childNodes.length == 0) {
  		if (elem.classList != undefined && 
  			elem.classList.contains(className))
  			elemList.push(elem);
  	}
  	else {
  		//4 cases: is childNodes empty or not / is this element in class or not
  		if (elem.classList != undefined && 
  			elem.classList.contains(className))
  			elemList.push(elem);
  		var childrenArr = Array.prototype.slice.apply(elem.childNodes);
  		childrenArr.forEach(helper);
  	}
  };
  helper(document.body);
  return elemList;
};
