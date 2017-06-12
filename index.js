const name_generator = require('./generators/names');

module.exports = {
	names: {
		Wookie: name_generator.Wookie
	},
	species: function(){return "random species!";}
}