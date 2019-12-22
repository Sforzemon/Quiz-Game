var choiceA = $("<button>").addClass("btn btn-outline-dark btn-lg answerBtn");
var choiceB = $("<button>").addClass("btn btn-outline-dark btn-lg answerBtn");
var choiceC = $("<button>").addClass("btn btn-outline-dark btn-lg answerBtn");
var choiceD = $("<button>").addClass("btn btn-outline-dark btn-lg answerBtn");
var timer = questionsBasic.length * 15;
var currentQuestionIndex = 0;
var finalScore = 0;
var score = 0;
var highScore = 0;
localStorage.setItem("highscore",0);
var initials = document.querySelector("#initials").value;
var questions = -1;
var questionNumber = 0;
var answer = $("<div>");
$("#scoreToBeat").text(highScore);
$("#success").on("click", setUserScore); 
$(".answerBtn").on("click", rightOrWrong);
var countdown = setInterval (function() {
    timer--;
    $("#timer").text("Timer: " + timer);
    console.log(timer)
    if(timer <= 0){
      clearInterval(countdown);
      endGame();
      return;
    }
  }, 1000);


function setUserScore() {
    var user = {
        
    }
    var score = highScore;
    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("score", JSON.stringify(score));
    var newRow = $("<div>").text(user.initials, user.score);
    var hr = $("<hr>");
    $("#leaderboard").prepend(newRow, hr);
    $("#initialsModal").modal('hide');
    $("#highScoreModal").modal('show');
    console.log(user);
}



$(".startBtn").on("click", startGame);

function startGame() {
    $(".startBtn").hide();
    nextQuestion();
//Display Timer and prompt endgame() when it hits 0
    setInterval(countdown);
};


function endGame() {
    finalScore = timer;
    clearInterval(countdown);
    if (finalScore > highScore) {
        highScore = finalScore;
        $("#yourScore").text("Way to go!! You got " + highScore + " points!");
        $("#initialsModal").modal('show');
    }
    else {
        $("#gameOverModal").modal('show');
        $(".yourScore").text("Ouch, that's rough. You got " + finalScore + " points...");
    }
};

function nextQuestion() {
    questions++;
    console.log(questions);
    questionNumber++;
    console.log(questionNumber);
    if (questions < 5){
        $("#cardHeader").text("Question #" + questionNumber);
        $("#cardContent").text(questionsBasic[questions].title);
        $("#questions").append(choiceA, choiceB);
        $("#choices").append(choiceC, choiceD);
        choiceA.text(questionsBasic[questions].choices[0]);
        choiceB.text(questionsBasic[questions].choices[1]);
        choiceC.text(questionsBasic[questions].choices[2]);
        choiceD.text(questionsBasic[questions].choices[3]);
        answer.text(questionsBasic[questions].answer);
    
    function rightOrWrong(){
        if (target = answer) {
        nextQuestion();
        }
        else {
            timer = timer - 15;
            nextQuestion();
        }
    }
    $(".answerBtn").on("click", rightOrWrong);
    }
    else {
        endGame();
    }
    
};


