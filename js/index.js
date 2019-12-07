
//getting input from the player based on what button the player clicked.
//at the same time, getting the computer choice and start the match.
function rockClicked(){
    var userChoice = "rock";
    var compChoice = computerChoice();
    var result = startMatch(userChoice, compChoice);

    console.log("computer has chosen "+compChoice+" and the result is: "+ result);
}

function paperClicked(){
    var userChoice = "paper";
    var compChoice = computerChoice();
    var result = startMatch(userChoice, compChoice);

    console.log("computer has chosen "+compChoice+" and the result is: "+ result);
    
}

function scissorClicked(){
    var userChoice = "scissor";
    var compChoice = computerChoice();
    var result = startMatch(userChoice, compChoice);

    console.log("computer has chosen "+compChoice+" and the result is: "+ result);
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
        var compChoice = "scissor";
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
    //player = paper, com = scissor, com wins
    else if(x === "paper" && y === "scissor"){
        
        result = "com wins";

    }
    //player = paper, com = rock, player wins
    else if(x === "paper" && y === "rock"){
        
        result = "user wins";

    }
    //player = rock, com = scissor, player wins
    else if(x === "rock" && y === "scissor"){
        
        result = "user wins";

    }
    //player = rock, com = paper, com wins
    else if(x === "rock" && y === "paper"){
        
        result = "com wins";

    }
    //player = scissor, com = rock, com wins
    else if(x === "scissor" && y === "rock"){
        
        result = "com wins";

    }
    //player = scissor, com = paper, player wins
    else if(x === "scissor" && y === "paper"){
        
        result = "user wins";

    }

    return result;

}