// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj == "function" || typeof obj == "undefined")
  	return undefined;
  if (typeof obj == "number")
  	return String(obj);
  else if (typeof obj == "boolean")
  	return String(obj);
  else if (typeof obj == "string")
  	return "\"" + obj + "\"";
  else if (obj == null)
  	return "null";
  else if (Array.isArray(obj)) {
  	var result = "[";
  	for (var i = 0; i < obj.length; i++) {
  		if (!(stringifyJSON(obj[i]) === undefined)) {
  			//if array is one elem long, no comma needed
  			if (i >= 1)
  				result = result + "," + stringifyJSON(obj[i]);
  			else result = result + stringifyJSON(obj[i]);
  		}
  	}
  	result = result + "]";
  	return result;
  }
  else {
  	var result = "{";
  	for (var i in obj) {
  		if ( !(stringifyJSON(i) === undefined) &&
  			!(stringifyJSON(obj[i]) === undefined))
  		result = result + stringifyJSON(i) + ":"
  			+ stringifyJSON(obj[i]) + ",";
  	}
  	if (result.length == 1)
  		result = result + "}";
  	else {
  		result = result.slice(0, -1) + "}";
  	}
  	return result;
  }
};

//exports.stringifyJSON = stringifyJSON;