const convertToCelsius = function (degreeInFar) {
	return Number(((degreeInFar - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function (degreeInCel) {
	return Number((degreeInCel * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
