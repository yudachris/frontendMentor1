//getting input from the player based on what button the player clicked.
//at the same time, getting the computer choice and start the match.

//checking if there is any data from previous session
var score;
var playerScore = sessionStorage.getItem("storedScore");

if (playerScore == null) {
    score = 0;
} else {
    score = Number(playerScore);
}

document.querySelector("#score-number").innerText = score;

//getting how many buttons with specific class in the HTML
var numberOfButtons = document.querySelectorAll(".choice-button").length;

//cycling all the elements of class choice button and giving it event listener to each.
for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".choice-button")[i].addEventListener("click", function () {

        var playerChoice = this.id;
        var compChoice = computerChoice();
        var result = startMatch(playerChoice, compChoice);

        this.setAttribute("opacity", 0.5);

        $("#game-window-init").fadeOut(500, function () {
            $("#game-window-chosen").fadeIn(500, function () {
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
    var resTxt;

    document.querySelector("#player-choice").innerHTML = "<div class='rps-circle-chosen " + pC + "-color choice-button'>" +
        "<div class='inner-circle'>" +
        "<img src='images/icon-" + pC + ".svg' alt='choose-" + pC + "'>" +
        "</div>" +
        "</div>";

    setTimeout(function () {

        document.querySelector("#com-choice").innerHTML = "<div class='rps-circle-chosen " + cC + "-color choice-button'>" +
            "<div class='inner-circle'>" +
            "<img src='images/icon-" + cC + ".svg' alt='choose-" + cC + "'>" +
            "</div>" +
            "</div>";

        if (result == "user wins") {
            score += 1;

            resTxt = "YOU WIN";
        } else if (result == "com wins") {
            if (score == 0) {
                score = 0;
                resTxt = "YOU LOSE";
            } else {
                score -= 1;
                resTxt = "YOU LOSE";
            }
        } else {
            resTxt = "DRAW";
        }

        if ($(window).width() <= 420) {
            $("#result-txt").text(resTxt);
            $("#end-result").fadeIn();
            document.querySelector("#score-number").innerText = score;
            sessionStorage.setItem("storedScore", score);
        } else {
            $("#players").addClass("relative-position");
            $("#coms").addClass("relative-position");
            $("#players").animate({
                right: '45%'
            }, 1000);
            $("#coms").animate({
                left: '45%'
            }, 1000, function () {
                $("#result-txt").text(resTxt);
                $("#end-result").fadeIn();
                document.querySelector("#score-number").innerText = score;
                sessionStorage.setItem("storedScore", score);
            });
        }

    }, 500);


}

function resetGame() {

    if ($(window).width() <= 420) {
        setTimeout(function () {
            $("#player-choice").html("");
            $("#com-choice").html("");
        }, 250);
    } else {
        setTimeout(function () {
            $("#player-choice").html("");
            $("#com-choice").html("");
            $("#players").removeClass("relative-position");
            $("#coms").removeClass("relative-position");
            $("#players").removeAttr("style");
            $("#coms").removeAttr("style");
        }, 250);
    }

    $("#game-window-chosen").fadeOut("fast", function () {
        $("#end-result").fadeOut(500, function () {
            $("#game-window-init").fadeIn("fast");
        });

    });

}