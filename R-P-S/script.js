function computerPlay() {
	//Return randomly Rock, Paper or Scissors i.e return random word from list
	const myArray = ['Rock', 'Paper', 'Scissors'];

	return myArray[Math.floor(Math.random() * 3)];
}

function singleRound (playerSelection, computerPlay) {
	//Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

	if (playerSelection == 'Rock') {
		if (computerPlay() == 'Rock') {
			console.log("It's a tie!")
		}

	}

	else if (playerSelection == 'Scissors') {
	
	}

	else if (playerSelection == 'Paper') {
	
	}

}

console.log(computerPlay())