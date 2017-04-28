'use strict';
let array;

function isUndefined(array) {
	return array === undefined;
}
function isEmpty(array) {
	return !array.length;
}
function min(array) {
	if (isUndefined(array) || isEmpty(array)) {
		return;
	}
	let filteredArray = array.filter(function (value) {
		return (typeof value === 'number');
	})
	return Math.min.apply(null, filteredArray);
};

function max(array) {
	if (isUndefined(array) || isEmpty(array)) {
		return;
	}
	let filteredArray = array.filter(function (value) {
		return (typeof value === 'number');
	})
	return Math.max.apply(null, filteredArray);
};

function sum() {
	var sumNum = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === "number" && isNaN(arguments[i]) !== true) {
			sumNum += arguments[i];
		}
	};
	return sumNum;
}
