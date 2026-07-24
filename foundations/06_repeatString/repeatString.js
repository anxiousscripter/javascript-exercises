const repeatString = function (string, num) {
	let fullStr = '';

	if (num < 0) {
		return 'ERROR';
	}

	for (let i = 1; i <= num; i++) {
		fullStr += string;
	}
	console.log(fullStr);

	return fullStr;
};

// Do not edit below this line
module.exports = repeatString;
