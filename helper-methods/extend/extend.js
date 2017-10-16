/**
 * Merge two or more objects together.
 * @param   {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
 * @param   {Object}   objects  The objects to merge together
 * @returns {Object}            Merged values of defaults and options
 */
extend = function () {

	// Variables
	var extended = {};
	var deep = false;
	var i = 0;

	// Check if a deep merge
	if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
	    deep = arguments[0];
	    i++;
	}

	// Merge the object into the extended object
	var merge = function (obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				// If property is an object, merge properties
				if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
					extended[prop] = extend(extended[prop], obj[prop]);
				} else {
					extended[prop] = obj[prop];
				}
			}
		}
	};

	// Loop through each object and conduct a merge
	for (; i < arguments.length; i++) {
		var obj = arguments[i];
		merge(obj);
	}

	return extended;

};