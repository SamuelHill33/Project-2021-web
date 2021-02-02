let username1;
let password1;
let username2;
let password2;

function validate1() { // function to validate first account
    username1 = document.getElementById("username1").value;
    password1 = document.getElementById("password1").value;
    if (username1 === "Saam" && password1 === "skilled") { // checks if inputs are equal to data specified
        enableDisable();
    } else {
        alert("wrong username or password");
    }
}

function validate2() { // function to validate second account --- same as function above but for player 2
    username2 = document.getElementById("username2").value;
    password2 = document.getElementById("password2").value;
    if (username2 === "William" && password2 === "thick") {
        window.location.href = "http://localhost:63342/Project-2021-web/game.html?"; // changes html page to that of the game
    } else {
        alert("wrong username or password");
    }
}

function enableDisable() {
    username1 = document.getElementById("username1");
    password1 = document.getElementById("password1");
    username2 = document.getElementById("username2");
    password2 = document.getElementById("password2");

    username1.disabled = true;
    password1.disabled = true; // disables player 1 elements as to make sure the user cant change details after submission
    document.getElementById("player1btn").disabled = true;

    username2.disabled = false;
    password2.disabled = false; // enables player 2 elements
    document.getElementById("player2btn").disabled = false; // disables button
}

document.getElementById("username2").disabled = true;
document.getElementById("password2").disabled = true; // disables player 2 elements so players have to input player 1 details first
document.getElementById("player2btn").disabled = true;