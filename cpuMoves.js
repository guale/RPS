let playerLastWin = false;
let lastDraw = true;
let playerLastMove;

//generates a random selection for the cpu and assigns values to the cpu object

function cpuInput() {
	//the first hand and all hands following a draw are random
	if (lastDraw) cpuRandom();
	//if the player did not win the previous hand returns cpuWinResponse two out of three times and cpuRandom one out of three times
	else if (!playerLastWin) {
		if (randInt(3, 1) !== 1) cpuWinResponse();
		else cpuRandom();
	}

	//if the player won the previous hand returns cpuLossResponse two out of three times and cpuRandom one out of three times
	else if (playerLastWin) {
		if (randInt(3, 1) !== 1) cpuLossResponse();
		else cpuRandom();
	}

	else {
		cpuRandom();
		console.log("Something went wrong");
	}

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

//If a human player lost previously they are most likely to play the thing that would beat what they lost to, so the computer chooses the move that will beat that, i.e. the move the player just made
function cpuWinResponse() {
	switch (playerLastMove) {
		case 1:
			cpu.input = 1;
			break;
		case 0:
			cpu.input = 0;
			break;
		case -1:
			cpu.input = -1;
			break;
	}
	console.log("win");
}

//If a human player won previously they are most likely to repeat their move, so the computer chooses the move that would beat the player's last move
function cpuLossResponse() {
	switch (playerLastMove) {
		case 1:
			cpu.input = 0;
			break;
		case 0:
			cpu.input = -1;
			break;
		case -1:
			cpu.input = 1;
			break;
	}
	console.log("loss");
}

//returns a random value for the computer's move
function cpuRandom() {
	cpu.input = randInt(1, -1);
	console.log("random");
}
