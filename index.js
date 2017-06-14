const name_generator = require('./generators/names');
const misc_generator = require('./generators/misc');

module.exports = {
	names: {
		Wookie: name_generator.Wookie
	},
	misc: {
		Species: misc_generator.Species
	}
}