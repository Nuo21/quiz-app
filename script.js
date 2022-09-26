//Containers
var viewHighscoresEl = document.getElementById("view_hightscores");
var startingContainerEl = document.getElementById("starting_container");
var questionContainerEl = document.getElementById("question_container");
var highscoreContainerEl = document.getElementById("highscore_container");

var highscoreListEl = document.getElementById("highscore_list");
var initialsEl = document.getElementById("initials");
var scoreMsgEl = document.getElementById("score_msg");
var viewHighscoresEl = document.getElementById("view_highscores");
var questionsEl = document.getElementById("questions");

//Timer
var timerEl = document.getElementById("timer");
timerEl.innerText = 0;

//Buttons
var btnStartEl = document.getElementById("start_game");
var btnClearScoresEl = document.getElementById("clear_highscores");
var btnGoBackEl = document.getElementById("go_back");
var answerButtonsEl = document.getElementById("answer_buttons");

//Beginning score
var score = 0;

//Shuffling questions
var shuffledQuestions = [];
var questionIndex = 0;

//Array of the quiz questions
var questions = [
    {
        q: 'Inside which HTML element do we put the JavaScript?',
        choices: [{choice: '<javascript>'}, {choice: '<js>'}, {choice: '<scripting>'}, {choice: '<script>'}],
        a: '<script>'
    },
    {
        q: 'How do you write "Hello World" in an alert box?',
        choices: [{choice: 'msgBox("Hello World");'}, {choice: 'alert("Hello World");'}, {choice: 'msg("Hello World")'}, {choice: 'alertBox("Hello World");'}],
        a: 'alert("Hello World");'
    },
    {
        q: 'How can you add a comment in a JavaScript?',
        choices: [{choice: '//This is a comment'}, {choice: '<!--This is a comment-->'}, {choice: "'This is a comment"}, {choice: 'None of the above'}],
        a: '//This is a comment'
    },
    {
        q: 'Which event occurs when the user clicks on an HTML element?',
        choices: [{choice: 'onchange'}, {choice: 'onclick'}, {choice: 'onmouseover'}, {choice: 'onmouseclick'}],
        a: 'onclick'
    },
    {
        q: 'Which operator is used to assign a value to a variable?',
        choices: [{choice: 'x'}, {choice: '*'}, {choice: '='}, {choice: '-'}],
        a: '='
    }
]

var startGame = function() {
    //Hides the starting screen and starts showing the quiz and questions
    startingContainerEl.classList.add('hidden');
    startingContainerEl.classList.remove('shown');
    questionContainerEl.classList.remove('hidden');
    questionContainerEl.classList.add('shown');

    console.log("TEST");

    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    
    //Starts timer
    //setTime()
    //Starts quiz
    setQuestion()
}

//Sets the timer
var setTime = function() {

}

var displayQuestion = function(index) {
    questionsEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerButton = document.createElement('button')
        answerButton.innerText = index.choices[i].choice
        answerButton.classList.add('btn')
        answerButton.classList.add('answerbtn')
        answerButton.addEventListener("click", answerCheck)
        answerButtonsEl.appendChild(answerButton)
        }
}

//Checks to see if the answer is correct
var answerCheck = function(event) {
    var userAnswer = event.target;
    if (shuffledQuestions[questionIndex].a === userAnswer.innerText) {
        score = score + 20;
        //Testing
        console.log(score);
        
    } else {
        //Testing timer TEMPORARY (make real timer function)
        var timeRemaining = 40;
        timeRemaining = timeRemaining - 9;
        console.log(timeRemaining);
    }

    questionIndex++;

    //This will check if there are more questions to set or not
    if (shuffledQuestions.length > questionIndex) {
        setQuestion();
    } else {
        console.log("No more questions");
    }

}

//Clears previous answer button choices
var clearAnswers = function() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

var setQuestion = function() {
    clearAnswers();
    displayQuestion(shuffledQuestions[questionIndex]);
}

btnStartEl.addEventListener("click", startGame);