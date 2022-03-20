function computerPlay() {
	//Return randomly Rock, Paper or Scissors i.e return random word from list
	const myArray = ['Rock', 'Paper', 'Scissors'];

	return myArray[Math.floor(Math.random() * 3)];
}

function singleRound (playerChoice, computerSelection) {
	//Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

	var playerSelection = playerChoice.toUpperCase();

	if (playerSelection == 'ROCK') {
		if (computerPlay() == 'Rock') {
			return "It's a tie!"
		}

		else if (computerPlay() == 'Scissors') {
			return "You win! Rock beats Scissors!"
		}

		else if (computerPlay() == 'Paper') {
			return "You lose. Paper beats Rock."
		}

		else {
			return "random"
		}

	}

	else if (playerSelection == 'SCISSORS') {
		if (computerPlay() == 'Rock') {
			return "You lose. Rock beats Scissors"
		}

		else if (computerPlay() == 'Scissors') {
			return "It's a tie!"
		}

		else if (computerPlay() == 'Paper') {
			return "You win! Scissors beats Paper"
		}

	}

	else if (playerSelection == 'PAPER') {
		if (computerPlay() == 'Rock') {
			return "You win! Paper beats Rock"
		}

		else if (computerPlay() == 'Scissors') {
			return "You lose. Scissors beats Paper"
		}

		else if (computerPlay() == 'Paper') {
			return "It's a tie!"
		}

	}

}

function game() {
	for (let i = 0; i < 5; i++) {
		
	}
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();

console.log(singleRound(playerSelection,computerSelection));
console.log(computerPlay())