const name_generator = require('../generators/names');
const should = require('chai').should();

describe('Name generator', function() {
    it('should have a Wookie method that returns a string of alphabetic characters', function() {
        name_generator.should.have.property('Wookie');
        var wookie_name = name_generator.Wookie();
        wookie_name.should.match(/^(\w+)$/);
    }),
    it('should have a Human method that returns a string of singular spaced alphabetic characters', function() {
         name_generator.should.have.property('Human');
         var human_name = name_generator.Human();
         human_name.should.match(/^(\w+\s\w+)$/);
    }),
    it('should have a HumanMale method that returns a string of singular spaced alphabetic characters', function() {
         name_generator.should.have.property('HumanMale');
         var human_male_name = name_generator.HumanMale();
         human_male_name.should.match(/^(\w+\s\w+)$/);
    }),
    it('should have a HumanFemale method that returns a string of singular spaced alphabetic characters', function() {
         name_generator.should.have.property('HumanFemale');
         var human_female_name = name_generator.HumanFemale();
         human_female_name.should.match(/^(\w+\s\w+)$/);
    });
});