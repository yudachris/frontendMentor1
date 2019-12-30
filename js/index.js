//getting input from the player based on what button the player clicked.
//at the same time, getting the computer choice and start the match.
var score = 0;

document.querySelector("#score-number").innerText = score;

//getting how many buttons with specific class in the HTML
var numberOfButtons = document.querySelectorAll(".choice-button").length;

//cycling all the elements of class choice button and giving it event listener to each.
for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".choice-button")[i].addEventListener("click", function () {

        var playerChoice = this.id;
        var compChoice = computerChoice();
        var result = startMatch(playerChoice, compChoice);

        $("#game-window-init").fadeOut("fast",function(){
            $("#game-window-chosen").fadeIn(2000, function(){
                showResult(playerChoice, compChoice, result);
            });
        });
        

    });

}

function computerChoice() {

    var randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) {
        var compChoice = "rock";
    } else if (randomNumber == 2) {
        var compChoice = "paper";
    } else if (randomNumber == 3) {
        var compChoice = "scissors";
    }
    return compChoice;
}

//by using choice from the player and also random generated computer choice, the match will start and decide the winner
function startMatch(playerChoice, compChoice) {

    var x = playerChoice;

    var y = compChoice;

    var result = "";

    //draw result
    if (x === y) {
        result = "draw";
    }
    //player = paper, com = scissors, com wins
    else if (x === "paper" && y === "scissors") {

        result = "com wins";

    }
    //player = paper, com = rock, player wins
    else if (x === "paper" && y === "rock") {

        result = "user wins";

    }
    //player = rock, com = scissors, player wins
    else if (x === "rock" && y === "scissors") {

        result = "user wins";

    }
    //player = rock, com = paper, com wins
    else if (x === "rock" && y === "paper") {

        result = "com wins";

    }
    //player = scissors, com = rock, com wins
    else if (x === "scissors" && y === "rock") {

        result = "com wins";

    }
    //player = scissors, com = paper, player wins
    else if (x === "scissors" && y === "paper") {

        result = "user wins";

    }

    return result;

}

function showResult(playerChoice, compChoice, result) {

    var pC = playerChoice;
    var cC = compChoice;

    document.querySelector("#player-choice").innerHTML = "<div class='rps-circle-chosen " + pC + "-color choice-button'>" +
        "<div class='inner-circle'>" +
        "<img src='images/icon-" + pC + ".svg' alt='choose-" + pC + "'>" +
        "</div>" +
        "</div>";

    setTimeout(function(){

        document.querySelector("#com-choice").innerHTML = "<div class='rps-circle-chosen " + cC + "-color choice-button'>" +
        "<div class='inner-circle'>" +
        "<img src='images/icon-" + cC + ".svg' alt='choose-" + cC + "'>" +
        "</div>" +
        "</div>";

        if(result == "user wins"){
            score += 1;
            document.querySelector("#score-number").innerText = score;
        }
        else{
            
        }

    },500);


}