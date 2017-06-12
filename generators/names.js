let wookie_names = require('../data/names/wookie_names.json');
let getRandomInt = require('../lib/generator_helper').getRandomInt;
module.exports = {
	
	/* Wookie names are made up from a list of prefixes and suffixes, i.e. Chew and bacca for Chewbacca.*/
	Wookie() {
		var prefixes = wookie_names.prefixes;
  		var suffixes = wookie_names.suffixes;
  		return prefixes[getRandomInt(prefixes.length)] + suffixes[getRandomInt(suffixes.length)];
  	},
  	Human() {

  	},
}