const getRandomInt = require('../lib/generator_helper').getRandomInt;
const quotes = require('../data/quotes');

module.exports = {
    
    GetQuote(quoteList) {
        return quoteList[getRandomInt(quoteList.length)];
    },
    Yoda() {
        const yodaQuotes = quotes.yoda;
        return this.GetQuote(yodaQuotes);
    }
}