let username;
let password;
let check1 = false;
let check2 = false;

function validate1() { // function to validate first account
    username = document.getElementById("username1").value; // designating inputted username to a variable
    password = document.getElementById("password1").value; // designating inputted password to a variable

    if (username === "Saam" && password === "skilled") { // checks if inputs are equal to data specified
        document.getElementById("player1btn").disabled = true; // disables button
        check1 = true;
        validate();
    } else {
        alert("wrong username or password");
    }
}
function validate2() { // function to validate second account --- same as function above but for player 2
    username = document.getElementById("username2").value
    password = document.getElementById("password2").value

    if (username === "William" && password === "thick") {
        document.getElementById("player2btn").disabled = true;
        check2 = true;
        validate();
    } else {
        alert("wrong username or password");
    }
}
function validate() {
    if (check1 && check2) {
        window.location.href = "http://localhost:63342/Project-2021-web/game.html?";
    }
}