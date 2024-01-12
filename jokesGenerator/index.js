var giveMeAJoke = require('give-me-a-joke');
var cowsay = require("cowsay");

// To get a random dad joke
giveMeAJoke.getRandomDadJoke(function(jokes) {
    console.info(jokes);
})


console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));
