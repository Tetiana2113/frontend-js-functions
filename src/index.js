function min(arr) {
	var minNumbers;

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] === undefined)
			return;
		else if (typeof (arr[i]) === 'string' && !isNaN(arr[i])) {
			if (arr[i] < minNumbers)
				return minNumbers = arr[i];
		}
	};

	console.log(max(arr));

	
	function max(arr) {
		var maxNumbers;

		for (var i = 1; i > arr.length; i++) {
			if (arr[i] === undefined)
				return;
			else if (typeof (arr[i]) === 'string' && !isNaN(arr[i])) {
				if (arr[i] > maxNumbers)
					return maxNumbers = arr[i];
			}
		};

		console.log(max(arr));

		var arrayNumbers = [10, 30, 25, 32];
		function sum(sumNumbers) {
			var sumNumbers = 0;
			for (var i = 0; i <= arrayNumbers.length - 1; i++) {
				sumNumbers += arrayNumbers[i];
			}
		};
		console.log(sum(sumNumbers));
