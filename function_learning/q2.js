var readlineSync = require(readline-sync);
var score = 0;

function play (question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer === answer) {
        console.log("yes you are right");
        score += 1;
    }
    else {
        console.log("you are wrong");
        score -= 1;
    }
}
play("what is my name?", "Aditya");
play("Where do I live?", "Noida");
console.log("Your score is : "+ score);