// Extension for array object, to detect arrays
Array.prototype.isArray = true;

// Extension for the string object
String.prototype.compose = function(o){
	
	// Save the initial string
	var s = this;

	// Save the arguments in an array, if it isn't already one
	var a = (o.isArray) ? o : arguments;

	// The replacement logic
	if(a.length > 0){

		var l = a.length;

		// Regular expression to detect the placeholders
		var p = /\{(\d+)\}/g;

		// Alternative regexp for placeholders like $0, $1
		// var p = /\$(\d+)/g;

		// Pass a custom replacement function to the string.replace method
		var s = s.replace(p, function(match, key, value){

			// Check if the key is not out of index, else return the placeholder as is
			if(key < a.length){return a[key];} else {return match;}
		});
	}

	// Result
	return s;
}
