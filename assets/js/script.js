// var choiceA = $("<button>").addClass("btn btn-outline-dark btn-lg answerBtn");
// var choiceB = $("<button>").addClass("btn btn-outline-dark btn-lg answerBtn");
// var choiceC = $("<button>").addClass("btn btn-outline-dark btn-lg answerBtn");
// var choiceD = $("<button>").addClass("btn btn-outline-dark btn-lg answerBtn");
// var timer = questionsBasic.length * 15;
// var currentQuestionIndex = 0;
// var finalScore = 0;
// var score = 0;
// var highScore = 0;
// localStorage.setItem("highscore",0);
// var initials = document.querySelector("#initials").value;
// var questions = -1;
// var questionNumber = 0;
// var answer = $("<div>");
// $("#scoreToBeat").text(highScore);
// $("#success").on("click", setUserScore); 

// var countdown = setInterval (function() {
//     timer--;
//     $("#timer").text("Timer: " + timer);
//     console.log(timer)
//     if(timer <= 0){
//       clearInterval(countdown);
//       endGame();
//       return;
//     }
//   }, 1000);


// function setUserScore() {
//     var user = {
        
//     }
//     var score = highScore;
//     localStorage.setItem("initials", JSON.stringify(initials));
//     localStorage.setItem("score", JSON.stringify(score));
//     var newRow = $("<div>").text(user.initials, user.score);
//     var hr = $("<hr>");
//     $("#leaderboard").prepend(newRow, hr);
//     $("#initialsModal").modal('hide');
//     $("#highScoreModal").modal('show');
//     console.log(user);
// }



// $(".startBtn").on("click", startGame);

// function startGame() {
//     $(".startBtn").hide();
//     nextQuestion();
// //Display Timer and prompt endgame() when it hits 0
//     setInterval(countdown);
// };


// function endGame() {
//     finalScore = timer;
//     clearInterval(countdown);
//     if (finalScore > highScore) {
//         highScore = finalScore;
//         $("#yourScore").text("Way to go!! You got " + highScore + " points!");
//         $("#initialsModal").modal('show');
//     }
//     else {
//         $("#gameOverModal").modal('show');
//         $(".yourScore").text("Ouch, that's rough. You got " + finalScore + " points...");
//     }
// };
// function nextQuestion() {
//     questions++;
//     console.log(questions);
//     questionNumber++;
//     console.log(questionNumber);
//     if (questions < 5){
//         $("#cardHeader").text("Question #" + questionNumber);
//         $("#cardContent").text(questionsBasic[questions].title);
//         $("#questions").append(choiceA, choiceB);
//         $("#choices").append(choiceC, choiceD);
//         choiceA.text(questionsBasic[questions].choices[0]);
//         choiceB.text(questionsBasic[questions].choices[1]);
//         choiceC.text(questionsBasic[questions].choices[2]);
//         choiceD.text(questionsBasic[questions].choices[3]);
//         answer.text(questionsBasic[questions].answer);
    
//     function rightOrWrong(){
//         if (target = answer) {
//         nextQuestion();
//         }
//         else {
//             timer = timer - 15;
//             nextQuestion();
//         }
//     }
//     $(".answerBtn").on("click", rightOrWrong);
//     }
//     else {
//         endGame();
//     }

// };
var timer = questionsBasic.length * 15;
var choiceA = $("<button>").addClass("btn btnA btn-outline-dark btn-lg answerBtn");
var choiceB = $("<button>").addClass("btn btnB btn-outline-dark btn-lg answerBtn");
var choiceC = $("<button>").addClass("btn btnC btn-outline-dark btn-lg answerBtn");
var choiceD = $("<button>").addClass("btn btnD btn-outline-dark btn-lg answerBtn");
var questions = -1;
var questionNumber = 0;
var answer = $("<div>");
var highScore = 0;
var finalScore = 0;
var score = 0;

let leaderBoard = [];
if (localStorage.getItem('leaderBoard') !== null) {
    leaderBoard = JSON.parse(localStorage.getItem('leaderBoard'));
    $("#scoreToBeat").text(leaderBoard[leaderBoard.length - 1].score);
}
else {
    $("#scoreToBeat").text(0);
}

$('.answerBtn').on('click', rightOrWrong);

$(".startBtn").on("click", startGame); 

$('.clearLeaderBoard').on('click', function() {
    localStorage.removeItem("leaderBoard")
    $("#leaderBoard").empty();
    $("#highScoreModal").modal('hide');
});
$("#highScoreBoard").on("click", showLeaderBoards);
function showLeaderBoards() {
    if (leaderBoard.length === 0) {
        $('#leaderBoard').append("There are no high scores at the moment.");
    }
    else {
        $('#leaderBoard').empty();
        for (let i = 0; i < leaderBoard.length; i++) {
            let newScore = $('<div>').text((i + 1) + '. ' + leaderBoard[i].initials + ' - ' + leaderBoard[i].score);;
            $('#leaderBoard').prepend(newScore);
            $('#leaderBoard').prepend($("<hr>"));
        };
    }
};










function startGame() {
    $(".startBtn").hide();
    timer = questionsBasic.length * 15;
    nextQuestion();      

    var countdown = setInterval (function() {
        timer--;
        $("#timer").text("Timer: " + timer);
        console.log(timer)
        if(timer <= 0){
          clearInterval(countdown);
          endGame();
        }
    }, 1000);

    function nextQuestion() {
        questions = questions + 1;
        console.log(questions);
        questionNumber++;
        console.log(questionNumber);
    
        if (questions < questionsBasic.length){
            $("#cardHeader").text("Question #" + questionNumber);
            $("#cardContent").text(questionsBasic[questions].title);
            $("#choices").append(choiceA, choiceB,choiceC, choiceD);
            choiceA.text(questionsBasic[questions].choices[0]);
            choiceB.text(questionsBasic[questions].choices[1]);
            choiceC.text(questionsBasic[questions].choices[2]);
            choiceD.text(questionsBasic[questions].choices[3]);
            answer.text(questionsBasic[questions].answer);
            console.log(choiceA[0].textContent); 
            console.log(choiceB[0].textContent); 
            console.log(choiceC[0].textContent); 
            console.log(choiceD[0].textContent); 
            console.log(answer[0].textContent);
            $('.answerBtn').on('click', rightOrWrong);  
        }
        else {
            endGame();
        }
    };

    function rightOrWrong(e){
        if (e.target.textContent === questionsBasic[questions].answer) {
            console.log("Correct");
            $("#choices").empty();
            nextQuestion();
        }
        else {
            timer = timer - 15;
            console.log("nope");
            $("#choices").empty();
            nextQuestion();
        }
    };
    
    function endGame() {
        console.log(timer)
        if (timer < 0){
            timer = 0;
        }
        else {
            timer = timer;
        }
        finalScore = timer;
        clearInterval(countdown);
        $(".newQuizBtn").removeClass("d-none");
        $("#cardHeader").empty();
        $("#cardContent").empty();
        if (finalScore > highScore) {
            highScore = finalScore;
            $("#yourScore").text("Way to go!! You got " + highScore + " points!");
            $("#initialsModal").modal('show');
        }
        else {
            $("#gameOverModal").modal('show');
            $(".yourScore").text("Ouch, that's rough. You got " + finalScore + " points...");
            console.log($("#scoreToBeat").textContent)
            // console.log(leaderBoard[leaderBoard.length - 1].score)
        }
    };

    function showLeaderBoards() {
        if (leaderBoard.length === 0) {
            $('#leaderBoard').append("There are no high scores at the moment.");
        }
        else {
            $('#leaderBoard').empty();
            for (let i = 0; i < leaderBoard.length; i++) {
                let newScore = $('<div>').text((i + 1) + '. ' + leaderBoard[i].initials + ' - ' + leaderBoard[i].score);;
                $('#leaderBoard').prepend(newScore);
                $('#leaderBoard').prepend($("<hr>"));
            };
        }
    };

    $('.btn-success').on('click', function(e) {
        let newScore = {
          initials: $('#initials').val(),
          score: finalScore
        }
        leaderBoard.push(newScore);
        localStorage.setItem('leaderBoard', JSON.stringify(leaderBoard));
        $("#initialsModal").modal('hide');
        $("#highScoreModal").modal('show');
        showLeaderBoards();
    });

    if (localStorage.getItem('leaderBoard') !== null) {
        leaderBoard = JSON.parse(localStorage.getItem('leaderBoard'));
        $("#scoreToBeat").text(leaderBoard[leaderBoard.length - 1].score);
    }
    else {
        $("#scoreToBeat").text(0);
    }
};
