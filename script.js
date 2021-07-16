let playerWins = 0;
let playerLosses = 0;
let playerRatio = playerWins / playerLosses;

class Play {
	constructor() {
		this.selection = "";
		this.img = "assets/images/blank.svg";
		this.input = 0;
	}
}

let player = new Play();
let cpu = new Play();

//assigns values to the player object based on the player's selection

function playerInput(value) {
	player.input = value * 1; //if you remove the *1 everything breaks

	switch (player.input) {
		case 1:
			player.selection = "Rock!";
			player.img = "assets/images/rock.svg";
			break;
		case 0:
			player.selection = "Paper!";
			player.img = "assets/images/paper.svg";
			break;
		case -1:
			player.selection = "Scissors!";
			player.img = "assets/images/scissors.svg";
			break;
		default:
			alert("Something Broke. Unexpected value: " + player.value);
	}
}

//generates a random selection for the cpu and assigns values to the cpu object

function cpuInput() {
	cpu.input = Math.floor(Math.random() * 3 - 1);

	switch (cpu.input) {
		case 1:
			cpu.selection = "Rock!";
			cpu.img = "assets/images/rock.svg";
			break;
		case 0:
			cpu.selection = "Paper!";
			cpu.img = "assets/images/paper.svg";
			break;
		case -1:
			cpu.selection = "Scissors!";
			cpu.img = "assets/images/scissors.svg";
			break;
	}
}

//displays the player and computer's moves in the play area and updates the score counter

function display() {
	cpuPlay.innerText = cpu.selection;
	cpuSpace.children[1].src = cpu.img;

	playerPlay.innerText = player.selection;
	playerSpace.children[0].src = player.img;

	win.innerText = playerWins;
	loss.innerText = playerLosses;
	if (playerLosses>0)ratio.innerText = playerWins / playerLosses; //if statement prevents a divide by 0
}

//determines the winner of the match by subracting the value of each input and comparing them to a table

function determineWinner() {
	let determinator = cpu.input - player.input;
	switch (determinator) {
		case -2:
		case 1:
			alert("Player wins!");
			playerWins++;
			break;

		case -1:
		case 2:
			alert("Computer wins!");
			playerLosses++;
			break;

		case 0:
			alert("It's a draw");
			break;
		default:
			alert("Something Broke. Unexpected determinator: " + determinator);
	}
}
