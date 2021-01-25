const colours = ["red", "black", "yellow"];
const player1btn = document.getElementById("player1btn");
const player2btn = document.getElementById("player2btn");
const timer = setInterval(cyclingDeckNumber, 50);
const cycleArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let deck = new Array(29);
let player1Deck = new Array(29);
let player2Deck = new Array(29);
let rand;
let i;
let j = 0; // for player1 win array
let k = 0; // for player2 win array
let player1CardNum = 0;
let player2CardNum = 0;
let player1CardCol;
let player2CardCol;
let split;
let player1Wins = 0;
let player2Wins = 0;
let deckNum = 30;
let cycle = 0;
let temp;

function player1NextCard() {
    document.getElementById("card1").style.color = '#000000'; // resets card number to black
    split = deck[i].split(" "); // takes first card in deck and splits it deriving its number and colour
    player1CardNum = parseInt(split[1]); // make variable equal selected card number
    player1CardCol = split[0]; // make variable equal selected card colour
    document.getElementById("card1").innerHTML = player1CardNum.toString(); // send card number to html

    if (player1CardCol === "red") { // determines what data to send to html
        document.getElementById("card1").style.backgroundColor = '#ff3737';
    } else if (player1CardCol === "yellow") {
        document.getElementById("card1").style.backgroundColor = '#fed428';
    } else if (player1CardCol === "black") {
        document.getElementById("card1").style.backgroundColor = '#202020';
        document.getElementById("card1").style.color = '#ffffff';
    } else {
        alert("error - player 2 card colour not equal to either 3 colours"); // error message
    }

    temp = deck[i];
    player2btn.disabled = false; // disable buttons to disallow player from pushing buttons twice
    player1btn.disabled = true;
    i++;
    deckNum--; // tracks round number
    document.getElementById("deckNum").innerHTML = deckNum.toString(); // sends string form of round number to html
    if (deckNum === 0) { // determines whether game has ended - when the end of the deck has been reached
        overallWin();
    }
}

function player2NextCard() {
    document.getElementById("card2").style.color = '#000000';
    split = deck[i].split(" "); // takes first card in deck and splits it deriving its number and colour
    player2CardNum = parseInt(split[1]);
    player2CardCol = split[0];
    document.getElementById("card2").innerHTML = player2CardNum.toString();

    if (player2CardCol === "red") {
        document.getElementById("card2").style.backgroundColor = '#ff3737';
    } else if (player2CardCol === "yellow") {
        document.getElementById("card2").style.backgroundColor = '#fed428';
    } else if (player2CardCol === "black") {
        document.getElementById("card2").style.backgroundColor = '#202020';
        document.getElementById("card2").style.color = '#ffffff';
    } else {
        alert("error - player 2 card colour not equal to either 3 colours");
    }

    colWinCheck(); // checks which players card wins
    player2btn.disabled = true;
    player1btn.disabled = false;
    i++;
    deckNum--; // tracks round number
    document.getElementById("deckNum").innerHTML = deckNum.toString(); // sends string form of round number to html
    if (deckNum === 0) { // determines whether game has ended - when the end of the deck has been reached
        overallWin();
    }
}

function colWinCheck() { // checks which players card colour wins
    if (player2CardCol === "red") {
        if (player1CardCol === "yellow") { // yellow beats red
            player1Win();
        } else if (player1CardCol === "black") { // red beats black
            player2Win();
        } else {
            numWinCheck();
        }
    }

    if (player2CardCol === "yellow") {
        if (player1CardCol === "black") { // black beats yellow
            player1Win();
        } else if (player1CardCol === "red") {
            player2Win();
        } else {
            numWinCheck();
        }
    }

    if (player2CardCol === "black") {
        if (player1CardCol === "red") {
            player1Win();
        } else if (player1CardCol === "yellow") {
            player2Win();
        } else {
            numWinCheck();
        }
    }
}

function numWinCheck() { // checks which players card number wins --- only called if players card colours are the same
    if (player1CardNum > player2CardNum) {
        player1Win();
    } else {
        player2Win();
    }
}

function player1Win() {
    player1Deck[j+1] = deck[i];
    player1Deck[j] = temp;
    player1Wins++; // increments players win count
    j = j + 2;
    document.getElementById("player1-cards").innerHTML = (player1Wins * 2).toString();
    document.getElementById("winMsg").innerHTML = "Player 1 wins!";
}

function player2Win() { // same as player1Win function but for player 2
    player2Deck[k+1] = deck[i];
    player2Deck[k] = temp;
    player2Wins++;
    k = k + 2;
    document.getElementById("player2-cards").innerHTML = (player2Wins * 2).toString();
    document.getElementById("winMsg").innerHTML = "Player 2 wins!";
}

function overallWin() {
    document.getElementById("winningCardsHeader").hidden = false;

    if (player1Wins > player2Wins) { // compares over all player wins and judges final victor based on who had the most wining rounds
        for (i = 0; i < player1Wins * 2; i++) {
            split = player1Deck[i].split(" ");
            colConverter();
            document.getElementById("gridCard" + i).innerHTML = split[1];
        }

        for (i = 0; i < player1Wins; i++) {
            document.getElementsByClassName("pair-container")[i].style.display = 'flex';
        }

        document.getElementById("winningCardsHeader").innerHTML = "Player 1's Cards:";
    } else if (player2Wins > player1Wins) {
        for (i = 0; i < player2Wins * 2; i++) {
            split = player2Deck[i].split(" ");
            colConverter();
            document.getElementById("gridCard" + i).innerHTML = split[1];
        }
        for (i = 0; i < player2Wins; i++) {
            document.getElementsByClassName("pair-container")[i].style.display = 'flex';
        }

        document.getElementById("winningCardsHeader").innerHTML = "Player 2's Cards:";
    } else {
        alert("player 1 wins: " + player1Wins + " --- player 2 wins: " + player2Wins); // output wins in case of error
    }

    player1btn.disabled = true;
    player2btn.disabled = true;
}

function colConverter() {
    if (split[0] === "red") {
        document.getElementById("gridCard" + i).style.backgroundColor = '#ff3737';
    } else if (split[0] === "yellow") {
        document.getElementById("gridCard" + i).style.backgroundColor = '#fed428';
    } else if (split[0] === "black") {
        document.getElementById("gridCard" + i).style.backgroundColor = '#202020';
        document.getElementById("gridCard" + i).style.color = '#ffffff';
    }
}

function cyclingDeckNumber() {
    document.getElementById("cycleNum").innerHTML = cycleArr[cycle];
    cycle++;
    if (cycle === 10) {
        cycle = 0;
    }
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

player2btn.disabled = true; // disables player 2 button so player one has to go first at beginning of round
document.getElementById("winningCardsHeader").hidden = true;
for (i = 0; i < 11; i++) {
    document.getElementsByClassName("pair-container")[i].style.display = 'none';
}
i = 0; // resets i to 0 for round count when game starts