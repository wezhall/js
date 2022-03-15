function computerPlay() {
	//Return randomly Rock, Paper or Scissors i.e return random word from list
	const myArray = ['Rock', 'Paper', 'Scissors'];

	return myArray[Math.floor(Math.random() * 3)];
}

function singleRound (playerSelection, computerPlay) {
	//Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

	if (playerSelection == 'Rock') {
		if (computerPlay() == 'Rock') {
			return console.log("It's a tie!")
		}

		else if (computerPlay() == 'Scissors') {
			return console.log("You win! Rock beats Scissors!")
		}

		else if (computerPlay() == 'Paper') {
			return console.log("You lose. Paper beats Rock.")
		}

	}

	else if (playerSelection == 'Scissors') {
		if (computerPlay() == 'Rock') {
			return console.log("You lose. Rock beats Scissors")
		}

		else if (computerPlay() == 'Scissors') {
			return console.log("It's a tie!")
		}

		else if (computerPlay() == 'Paper') {
			return console.log("You win! Scissors beats Paper")
		}

	}

	else if (playerSelection == 'Paper') {
		if (computerPlay() == 'Rock') {
			return console.log("You win! Paper beats Rock")
		}

		else if (computerPlay() == 'Scissors') {
			return console.log("You lose. Scissors beats Paper")
		}

		else if (computerPlay() == 'Paper') {
			return console.log("It's a tie!")
		}

	}

}

singleRound()