const species = require('../data/misc/species.json');
const getRandomInt = require('../lib/generator_helper').getRandomInt;
module.exports = {
	Species() {
		var species_names = species.species_names;
  		return species_names[getRandomInt(species_names.length)];
  	}
}