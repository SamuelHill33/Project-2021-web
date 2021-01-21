function validate1() { // function to validate first account
    let username = document.getElementById("username1").value; // designating inputted username to a variable
    let password = document.getElementById("password1").value; // designating inputted password to a variable

    if (username === "Saam" && password === "skilled") { // checks if inputs are equal to data specified
        document.getElementById("player1btn").disabled = true; // disables button
    }
}
function validate2() { // function to validate second account --- same as function above but for player 2
    let username = document.getElementById("username2").value
    let password = document.getElementById("password2").value

    if (username === "William" && password === "thick") {
        document.getElementById("player2btn").disabled = true;
    }
}
function validate() {

}