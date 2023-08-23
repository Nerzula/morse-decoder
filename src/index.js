const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	const morse = getMorse(expr);

	function getMorse(str) {
		const getChanks = splitStringIntoChunks(str, 10);
		const res = getChanks.map(chank => {
			if (chank == '**********') {
				return ' ';
			}
			const morse = splitStringIntoChunks(chank, 2).reduce((acc, val) => {
				if (val == 10) {
					acc += '.';
				} else if (val == 11) {
					acc += '-';
				}
				return acc;
			}, '');
			return morse;
		});
		return res;
	}
	function splitStringIntoChunks(string, chunkSize) {
		const regex = new RegExp(`.{1,${chunkSize}}`, 'g');
		return string.match(regex);
	}

	return morse.map(a => MORSE_TABLE[a] || ' ').join('');
}

module.exports = {
	decode,
};
