
/* Notes to Reviwer: This is a Hubot script called "versus" that will allow the 
	user to create super heroes, call them to battle, declare a victor among themselves
	and add wins to the heroes win total.

	Per last commit on 12/9, users can create heroes, which are stored to a heroes array.
	When typing the word versus, the bot will reply with "who will win?"

	Upcoming Tasks to Complete v1 of Game:
	  - figure out why the "show all" command doesn't work in slack but will run in the console
	  - return the number of wins a hero has when a hero in the heroes array is searched and found
*/

//function to make the hero name upper case (and all other letters in the name lower case)
function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

//array in which heroes are storedd
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
			heroes.push(this);
		}
}
	
// //function that calls hero wins
// function heroRecord(hero) {
// 	console.log(hero.wins)
// }

// //functions that calls hero and record
// function heroAndRecord(hero) {
// 	console.log(hero.name + ", " + hero.wins);
// }

//function that searches and array for a hero and returns the hero record it finds (index in heroes array)://
function search(hero, heroes) {
	for (var i=0; i < heroes.length; i ++) {
		if (heroes[i].name === hero) {
			return heroes[i];
		}
	}
}


//Test Data://

// var ironman = new Hero ("ironman");
// var batman = new Hero ("batman");
// ironman.saveHero(ironman);
// batman.saveHero(batman);
// ironman.addWin();
// batman.addWin();
// batman.addWin();


//Console Tests that Passed://

// console.log(batman);
// console.log(search(batman.name, heroes));
// console.log("You just added a win to " + batman.name + ". He now has " + batman.wins + " win(s).");
// console.log(heroes);
// console.log(heroes[0].name + ", " + heroes[0].wins);
// console.log(heroes);
// console.log(heroes.length);
// heroAndRecord(heroes[0]);
// heroAndRecord(ironman);	
// console.log(heroes[1].wins);
// console.log(heroes[0].wins);
// for (var i = 0; i < heroes.length; i ++) {
// 	console.log(heroes[i].name + " : " + heroes[i].wins + ", ");
// }


//Slackbot starts://

module.exports = function(robot) {
//Hear for versus //
  	robot.hear(/versus/i, function(res) {
    	return res.send("Who would win?");	
  	});

//New Hero://
	return robot.respond(/new hero (.*)/i, function(res) {
		var name = res.match[1];
		name = new Hero(name);
		name.saveHero(name);
		return res.send("You just created " + name.name);
		console.log(name);
	});

// Add win: //
	return robot.hear(/add win to (.*)/i, function(res) {
		var userInput = res.match[1]; 
		var userInput = capitalize(userInput);
		var hero = search(userInput, heroes);
			hero.addwin();
			return res.send("sweet");
			// return res.send("You just added a win to " + hero.name + ". He now has " + hero.wins + " wins.");
	});

// List all Superheroes://
	robot.hear(/show all/i, function(res) {
		console.log("heroes:" + heroes);
		for (var h = 0; h < heroes.length; h++) {
			return res.send(heroes[h].name + " : " + heroes[h].wins + ", ");
    	}	
  	});
};