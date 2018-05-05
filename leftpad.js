module.exports = function(str, number) {
	if (number > str.length) {
		return " ".repeat(number - str.length) + str;
	} else {
		return str;
	}
};
