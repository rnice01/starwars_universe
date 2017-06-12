const wookie_names = require('../data/names/wookie_names.json');
const human_names = require('../data/names/human_names.json');
const getRandomInt = require('../lib/generator_helper').getRandomInt;
module.exports = {
	
	/* Wookie names are made up from a list of prefixes and suffixes, i.e. Chew and bacca for Chewbacca.*/
	Wookie() {
		var prefixes = wookie_names.prefixes;
  		var suffixes = wookie_names.suffixes;
  		return prefixes[getRandomInt(prefixes.length)] + suffixes[getRandomInt(suffixes.length)];
  	},
  	Human() {
  		var random_name = [];
  	},
  	HumanMale() {
  		var first_names = human_names.male_first_names;
  		var last_names = human_names.last_names;
  		return first_names[getRandomInt(first_names.length)] + ' ' + last_names[getRandomInt(last_names.length)];
  	},
  	HumanFemale() {
  		var first_names = human_names.female_first_names;
  		var last_names = human_names.last_names;
  		return first_names[getRandomInt(first_names.length)] + ' ' + last_names[getRandomInt(last_names.length)];
  	}
}