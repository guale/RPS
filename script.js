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

function randInt(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//assigns values to the player object based on the player's selection

function playerInput(value) {
	player.input = parseInt(value);

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

//displays the player and computer's moves in the play area and updates the score counter

function display() {
	cpuPlay.innerText = cpu.selection;
	cpuSpace.children[1].src = cpu.img;

	playerPlay.innerText = player.selection;
	playerSpace.children[0].src = player.img;

	win.innerText = playerWins;
	loss.innerText = playerLosses;
	if (playerLosses > 0) ratio.innerText = playerWins / playerLosses; //if statement prevents a divide by 0
}

//determines the winner of the match by subracting the value of each input and comparing them to a table

function determineWinner() {
	playerLastMove = player.input;
	let determinator = cpu.input - player.input;
	switch (determinator) {
		case -2:
		case 1:
			alert("Player wins!");
			playerWins++;
			playerLastWin = true;
			lastDraw = false;
			break;

		case -1:
		case 2:
			alert("Computer wins!");
			playerLosses++;
			playerLastWin = false;
			lastDraw = false;
			break;

		case 0:
			alert("It's a draw");
			playerLastWin = false;
			lastDraw = true;
			break;
		default:
			alert("Something Broke. Unexpected determinator: " + determinator);
	}
}
