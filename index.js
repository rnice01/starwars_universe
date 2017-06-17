const name_generator = require('./generators/names');
const misc_generator = require('./generators/misc');
const quote_generator = require('./generators/quotes');

module.exports = {
	names: {
		Wookie: name_generator.Wookie
	},
	misc: {
		Species: misc_generator.Species
	},
	quotes: {
		Yoda: quote_generator.Yoda
	}
}