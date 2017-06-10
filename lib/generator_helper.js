module.exports = {
  getRandomInt(max) {
    var min = 0;
    return Math.floor((Math.random() * (max - min))) + min;
  }
}