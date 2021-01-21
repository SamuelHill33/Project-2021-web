const colours = ["red", "black", "yellow"];
const player1btn = document.getElementById("player1btn");
const player2btn = document.getElementById("player2btn");
let deck = new Array(29);
let rand;
let i;
let player1CardNum;
let player2CardNum;
let player1CardCol;
let player2CardCol;
let split;
let player1Wins = 0;
let player2Wins = 0;
let roundNum = 0;

function nextCard() {
    split = deck[i].split(" ");

    if (i % 2 === 0 || undefined) {
        document.getElementById("player1CardNum").innerHTML = "Card Number 1";
        document.getElementById("player2CardNum").innerHTML = "Card Number 2";
        document.getElementById("player1CardCol").innerHTML = "Card Colour 1";
        document.getElementById("player2CardCol").innerHTML = "Card Colour 2";
        player1CardNum = split[1];
        player1CardCol = split[0];
        document.getElementById("player1CardNum").innerHTML = player1CardNum;

        if (player1CardCol === "red") {
            // document.getElementById("player1CardRed").visible = true;
            document.getElementById("player1CardCol").innerHTML = "red";
        } else if (player1CardCol === "yellow") {
            // document.getElementById("player1CardYellow").visible = true;
            document.getElementById("player1CardCol").innerHTML = "yellow";
        } else if (player1CardCol === "black") {
            // document.getElementById("player1CardBlack").visible = true;
            document.getElementById("player1CardCol").innerHTML = "black";
        } else {
            alert("error - player 2 card colour not equal to either 3 colours");
        }

        player2btn.disabled = false;
        player1btn.disabled = true;
        i++;
    } else if (i % 2 === 1) {
        player2CardNum = split[1];
        player2CardCol = split[0];
        document.getElementById("player2CardNum").innerHTML = player2CardNum;

        if (player2CardCol === "red") {
            // document.getElementById("player2CardRed").visible = true;
            document.getElementById("player2CardCol").innerHTML = "red";
        } else if (player2CardCol === "yellow") {
            // document.getElementById("player2CardYellow").visible = true;
            document.getElementById("player2CardCol").innerHTML = "yellow";
        } else if (player2CardCol === "black") {
            // document.getElementById("player2CardBlack").visible = true;
            document.getElementById("player2CardCol").innerHTML = "black";
        } else {
            alert("error - player 2 card colour not equal to either 3 colours");
        }

        colWinCheck();
        if (player1CardCol === player2CardCol) {
            numWinCheck();
        }
        player2btn.disabled = true;
        player1btn.disabled = false;
        i++;
        roundNum++;
        document.getElementById("roundNum").innerHTML = roundNum.toString();
    } else {
        alert("error - i is not functioning correctly");
    }

    if (i === 30) {
        if (player1Wins > player2Wins) {
            alert("Player 1 wins with " + player1Wins + " wins!");
        } else if (player2Wins > player1Wins) {
            alert("Player 2 wins with " + player2Wins + " wins!");
        } else {
            alert("player 1 wins: " + player1Wins + " --- player 2 wins: " + player2Wins);
        }

        player1btn.disabled = true;
        player2btn.disabled = true;
    }
}

function colWinCheck() {
    if (player2CardCol === "red") {
        if (player1CardCol === "yellow") {
            player1Win();
        } else if (player1CardCol === "black") {
            player2Win();
        }
    }

    if (player2CardCol === "yellow") {
        if (player1CardCol === "black") {
            player1Win();
        } else if (player1CardCol === "red") {
            player2Win();
        }
    }

    if (player2CardCol === "black") {
        if (player1CardCol === "yellow") {
            player1Win();
        } else if (player1CardCol === "red") {
            player2Win();
        }
    }
}

function numWinCheck() {
    if (player1CardNum > player2CardNum) {
        player1Win();
    } else if (player2CardNum > player1CardNum) {
        player2Win();
    } else {
        document.getElementById("winlbl").innerHTML = "Draw!";
    }
}

function player1Win() {
    player1Wins++;
    document.getElementById("winlbl").innerHTML = "Player 1 wins!";
}

function player2Win() {
    player2Wins++;
    document.getElementById("winlbl").innerHTML = "Player 2 wins!";
}

for (i = 0; i < 3; i++) { // for loop which designates the colour of the cards
    for (i = 0; i < 10; i++) { // for loop where the cards are designated a number
        deck[i] = colours[0] + " " + (i+1); // creates 10 red cards
        deck[i+10] = colours[1] + " " + (i+1); // creates 10 black cards
        deck[i+20] = colours[2] + " " + (i+1); // creates 10 yellow cards
    }
}

for (i = 0; i < 30; i++) { // for loop where the cards are shuffled 30 times
    rand = Math.floor(Math.random() * 29); // random number is created between 0 and 29
    let temp = deck[i];
    deck[i] = deck[rand]; // takes a random card in the deck and replaces that card's position with the selected card
    deck[rand] = temp;
}

player2btn.disabled = true;
i = 0;