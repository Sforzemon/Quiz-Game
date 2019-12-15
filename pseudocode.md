The first screen you see should be a large button.
I feel the easiest way to do this would be to have a div holding a button that is removedset to desiplay none once you start the quiz
I plan to do the bonus, so I think a second html div will be displayed when the first one is hidden.

Initial button div display-block - set to display-none when clicked
quiz selector div dislplay-none - set to display-block and give choices for what type of quiz they would like
When the quiz is chosen from the previous list all current screen objects will be set to display-none and js will create elements to populate the quiz

Objects needed for quiz
Timer - displayed in corner and counting (Would like to add color changes for the last 10 seconds and audio)
There should be a link that will allow the user to see the highschool. (This should be a new screen)
The quiz itself
    Header showing question number
    The question
        (I would like these to populate randomly.. we shall see)
    4 buttons containing the possible choices
        (These should be populated at random... well it would be nice)
        one will need to be marked as correct
        
    correct answer will proceed to next quiestion (next question)
    incorrect answer will decrement timer by 15 seconds and proceed to next question (timer-15, next question) 
    game should end when the timer runs out (if timer = 0 then endgame())
        or when you answer the last question (probably just endgame())

End of quiz should show the players score and have a form field to enter their initials
    Hide Quiz
    New Header with score
    Form to input initials
    Submit button
Initials and score should be saved to local data
Screen should change to show high scores, and have a button to play again
    Header for High Scores
    Ordered list with Initials and acommapnying score
    Button to reinitialize the game sequence

Initial Page
    Uppper left should be high scores link and perhaps the best score should be displayed
        (I believe that putting this on the Nav bar would likely be the easiest method
         Though, there might be issues depending on which quiz is chose for scores...)

    Big button
        startgame()
        set display-none
        set quiz choice display-block

smaller buttons to pick quiz
    depending on the quiz chosen with load questions from respective question bank
        choosing coding should using coding-questions.js
        choosing volleyball volleyball-questions.js
            etc
    set display-none

for (each question in bank) {
    add 15 seconds to total time;
        setTimeout(endGame, (questions.lenth*15))
    create elements 
        (<div>
            <h1>Question #i,</h1>
            <p>The actual question</p>
            <button>answer 1</button>
            <button>answer 2</button>
            <button>answer 3</button>
            <button>answer 4</button>)
    if (answer === true) {
        nextQuestion()
    };
    else {
        timer - 15
        nextQuestion()
    }
    if (nextQuestion = null) {
        endGame()
    }
}
Show score
    Header with score
    Form for the user to enter initials
    localStorage.setItem(inital, score)

Highscore Screen
    Header 
    ordered list of initials and scores
    button to start the game over again


