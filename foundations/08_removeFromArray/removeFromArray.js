// Test 1 - Solution
/* const removeFromArray = function (arr, delVal) {
	let startNum = arr.indexOf(delVal);
	if (startNum === -1) {
		console.log(`${delVal} was not found.`);
	} else {
		arr.splice(startNum, 1);
		return arr;
	}
}; */

const removeFromArray = function (arr, ...delVal) {
	for (const val of delVal) {
		if (arr.includes(val)) {
			for (let i = arr.length - 1; i >= 0; i--) {
				if (arr[i] === val) {
					arr.splice(i, 1);
				}
			}
		} else {
			console.log(`${val} was not found.`);
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
