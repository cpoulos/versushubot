
/* OVERVIEW: This is a Hubot script called "versus" that will allow the 
	user to create super heroes, call them to battle, declare a victor
	and capture the number of wins each hero has.
*/

//function to make the hero name upper case (and all other letters in the name lower case
function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

var heroes = new Array;

//constructer function for new hero
function Hero(name, wins) {
	this.name = capitalize(name);
	this.wins = parseFloat(wins);
	this.wins = 0;	
		this.addWin = function(){
			this.wins ++ ;
		}
		this.saveHero = function(hero) {
			hero = hero;
			heroes.push(hero);
		}
}
	
//function that calls hero wins
function heroRecord(hero) {
	console.log(hero.wins)
}

//functions that calls hero and record
function heroAndRecord(hero) {
	console.log(hero.name + ", " + hero.wins);
}

//Test Data: //
// var ironman = new Hero ("ironman");
// var batman = new Hero ("batman");
// ironman.saveHero(ironman);
// batman.saveHero(batman);
// ironman.addWin();
// batman.addWin();
// batman.addWin();

// console.log(heroes);
// console.log(heroes[0].name + ", " + heroes[0].wins);

//Slackbot starts://

module.exports = function(robot) {
// Hear for versus //
  	robot.hear(/versus/i, function(res) {
    	return res.send("Please enter in 2 heroes by typing new hero then the hero name, for each hero you woud like to create.");
  	});

//New Hero://
	return robot.respond(/new hero (.*)/i, function(res) {
		var name = res.match[1];
		name = new Hero(name);
		name.saveHero(name);
		return res.send("You just created " + name.name);
	});

// List all Superheroes://
	robot.hear(/all heroes/i, function(res) {
    	for (var i = 0; i < heroes.length; i ++) {
    		return res.send(heroes[i].name + ", " + heroes[i].wins);
    	}
  	});
};

//Fight://
	// return robot.respond(/fight!/, 


//Test in Console: //
// heroAndRecord(heroes[0]);
// heroAndRecord(ironman);	
// console.log(heroes[1].wins);
// console.log(heroes[0].wins)


