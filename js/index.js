
//getting input from the player based on what button the player clicked.
//at the same time, getting the computer choice and start the match.
var score = 0;

document.querySelector("#score-number").innerText = score;

function rockClicked(){
    var userChoice = "rock";
    var compChoice = computerChoice();
    var result = startMatch(userChoice, compChoice);

    showResult(compChoice, result);
}

function paperClicked(){
    var userChoice = "paper";
    var compChoice = computerChoice();
    var result = startMatch(userChoice, compChoice);

    showResult(compChoice, result);
    
}

function scissorsClicked(){
    var userChoice = "scissors";
    var compChoice = computerChoice();
    var result = startMatch(userChoice, compChoice);

    showResult(compChoice, result);
}

function computerChoice(){

    var randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1){
       var compChoice = "rock";
    }
    else if(randomNumber == 2){
        var compChoice = "paper";
    }
    else if(randomNumber == 3){
        var compChoice = "scissors";
    }
    return compChoice;
}

//by using choice from the player and also random generated computer choice, the match will start and decide the winner
function startMatch(userChoice, compChoice){

    var x = userChoice;

    var y = compChoice;

    var result = "";

    //draw result
    if(x === y){
        result = "draw";
    }
    //player = paper, com = scissors, com wins
    else if(x === "paper" && y === "scissors"){
        
        result = "com wins";

    }
    //player = paper, com = rock, player wins
    else if(x === "paper" && y === "rock"){
        
        result = "user wins";

    }
    //player = rock, com = scissors, player wins
    else if(x === "rock" && y === "scissors"){
        
        result = "user wins";

    }
    //player = rock, com = paper, com wins
    else if(x === "rock" && y === "paper"){
        
        result = "com wins";

    }
    //player = scissors, com = rock, com wins
    else if(x === "scissors" && y === "rock"){
        
        result = "com wins";

    }
    //player = scissors, com = paper, player wins
    else if(x === "scissors" && y === "paper"){
        
        result = "user wins";

    }

    return result;

}

function showResult(compChoice, result){
    alert("computer has chosen "+compChoice+" and the result is: "+ result);
}