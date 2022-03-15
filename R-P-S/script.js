function computerPlay() {
	//Return randomly Rock, Paper or Scissors i.e return random word from list
	const myArray = ['Rock', 'Paper', 'Scissors'];

	return myArray[Math.floor(Math.random() * 3)];
}

function singleRound (playerSelection) {
	//Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

	if (playerSelection == 'Rock') {
		if (computerPlay() == 'Rock') {
			console.log("It's a tie!")
		}

		else if (computerPlay() == 'Scissors') {
			console.log("You win! Rock beats Scissors!")
		}

		else if (computerPlay() == 'Paper') {
			console.log("You lose. Paper beats Rock.")
		}

	}

	else if (playerSelection == 'Scissors') {
		if (computerPlay() == 'Rock') {
			console.log("You lose. Rock beats Scissors")
		}

		else if (computerPlay() == 'Scissors') {
			console.log("It's a tie!")
		}

		else if (computerPlay() == 'Paper') {
			console.log("You win! Scissors beats Paper")
		}

	}

	else if (playerSelection == 'Paper') {
		if (computerPlay() == 'Rock') {
			console.log("You win! Paper beats Rock")
		}

		else if (computerPlay() == 'Scissors') {
			console.log("You lose. Scissors beats Paper")
		}

		else if (computerPlay() == 'Paper') {
			console.log("It's a tie!")
		}

	}

}

singleRound('Paper')