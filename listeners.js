//listeners for the player's input

//Defines page elements

let cpuSpace = document.querySelector("#cpuSpace");
let cpuPlay = document.querySelector("#cpuPlay");

let playerSpace = document.querySelector("#playerSpace");
let playerPlay = document.querySelector("#playerPlay");

let win = document.querySelector("#win");
let loss = document.querySelector("#loss");
let ratio = document.querySelector("#ratio");

let buttons = document.querySelector("#selectionBox");

//Responds to button clicks and executes functions to assign the correct value for the player's selection

buttons.addEventListener("click", (event) => {
	if (event.target.matches("input")) {
		value = event.target.value;
		playerInput(value);
		cpuInput();
		determineWinner();
		display();
	}
});

//Responds to button touches and executes functions to assign the correct value for the player's selection

function pressTheButton() {
	value = this.value;
	playerInput(value);
	cpuInput();
	determineWinner();
	display();
}

//This is not for you.

let keysPressed = "";

document.querySelector("body").addEventListener("keydown", (event) => {
	keysPressed += event.key;
	if (
		keysPressed.substr(keysPressed.length - 72, keysPressed.length) ===
		"ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"
	) {
		playerWins += 99;
		win.innerText = playerWins;
		if (playerLosses > 0) ratio.innerText = playerWins / playerLosses; //if statement prevents a divide by 0
		document.querySelector("#scoreTitle").innerText = "Cheater Score";
		keysPressed = "";
	}
});
