//listeners for the player's input

//Defines page elements

let cpuSpace = document.querySelector("#cpuSpace");
let cpuPlay = document.querySelector("#cpuPlay");

let playerSpace = document.querySelector("#playerSpace");
let playerPlay = document.querySelector("#playerPlay");

let win = document.querySelector("#win");
let loss = document.querySelector("#loss");
let ratio = document.querySelector("#ratio");

//Defines the buttons on the page
let button = {
	rock: document.querySelector("#selectRock"),
	paper: document.querySelector("#selectPaper"),
	scissors: document.querySelector("#selectScissors"),
};

//Responds to button clicks and executes functions to assign the correct value for the player's selection
button.rock.addEventListener("click", pressTheButton);
button.paper.addEventListener("click", pressTheButton);
button.scissors.addEventListener("click", pressTheButton);

//Responds to button touches and executes functions to assign the correct value for the player's selection
// button.rock.addEventListener("touchstart", pressTheButton);
// button.paper.addEventListener("touchstart", pressTheButton);
// button.scissors.addEventListener("touchstart", pressTheButton);

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
		document.querySelector("#scoreTitle").innerText = "Cheater Score";
		keysPressed = "";
	}
});
