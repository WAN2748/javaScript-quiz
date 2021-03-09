
const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');
const clock =document.getElementById("clock")
const scoreBoard = document.getElementById('score'); 

function ruleBtn() {
    var x = document.getElementById("ruleList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

var questions = [
    {
        question : "Which of these are variables?",
        answerA : "var",
        answerB : "let",
        answerC : "const",
        answerD : "All the Above",
        correct : "D"
    },{
    
        question : "Where should you link your JS in the html?",
        answerA : "In the head div",
        answerB : "At the top of the body div",
        answerC : "At the bottom of the body div",
        answerD : "In between the closing body and html div",
        correct : "C"
    },{
        question : "Can JS be writen in the html file?",
        answerA : "Yes, but it's easier to access in a sperate file",
        answerB : "No, it'll never work",
        answerC : "Yes, that's where it should be",
        answerD : "Yes, we have no bananas",
        correct : "A"
    }

    
];


/*function timer(){
    var timeLeft = 10;
    var timer = setInterval(function(){
        if (sec > 1){
            clock.textContent = timeLeft;
            timeLeft--;
        }else (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}*/

