module.exports = function(str, number) {
	return " ".repeat(Math.max(0, number - str.length)) + str;
};
