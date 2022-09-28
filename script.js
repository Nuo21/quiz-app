//Containers
var viewHighscoresEl = document.getElementById("view_hightscores");
var startingContainerEl = document.getElementById("starting_container");
var questionContainerEl = document.getElementById("question_container");
var endingContainerEl = document.getElementById("ending_container");
var highscoreContainerEl = document.getElementById("highscore_container");

var highscoreListEl = document.getElementById("highscore_list");
var initialsEl = document.getElementById("initials");
var scoreMsgEl = document.getElementById("score_msg");
var viewHighscoresEl = document.getElementById("view_highscores");
var questionsEl = document.getElementById("questions");
var highscores = [];

//Timer
var timerEl = document.getElementById("timer");
timerEl.innerText = 0;
var timeRemaining = 0;

var gameOver;

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

//Game start
var startGame = function() {
    //Hides the starting screen and starts showing the quiz and questions
    startingContainerEl.classList.add('hidden');
    startingContainerEl.classList.remove('shown');
    questionContainerEl.classList.remove('hidden');
    questionContainerEl.classList.add('shown');

    console.log("TEST");

    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    
    //Starts timer
    setTime()
    //Starts quiz
    setQuestion()
}

//Sets the timer
var setTime = function () {
    timeRemaining = 40;

var timerCheck = setInterval(function() {
    timerEl.innerText = timeRemaining;
    timeRemaining--

    if (gameOver) {
        clearInterval(timerCheck);
    }
   
    if (timeRemaining < 0) {
        showScore();
        timerEl.innerText = 0;
        clearInterval(timerCheck);
    }

    }, 1000)
}

//Displays the questions
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
        
    } /*else {
        //Testing timer TEMPORARY (make real timer function)
        var timeRemaining = 40;
        timeRemaining = timeRemaining - 9;
        console.log(timeRemaining);
    }*/ else {
        timeRemaining = timeRemaining - 9;
    }

    questionIndex++;

    //This will check if there are more questions to set or not
    if (shuffledQuestions.length > questionIndex + 1) {
        setQuestion();
    } else {
        gameOver = true;
        console.log("No more questions");
        showScore();
    }
}

//Clears previous answer button choices
var clearAnswers = function() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

//Sets the questions
var setQuestion = function() {
    clearAnswers();
    displayQuestion(shuffledQuestions[questionIndex]);
}

//Shows the score
var showScore = function() {
    questionContainerEl.classList.add("hidden");
    endingContainerEl.classList.remove("hidden");
    endingContainerEl.classList.add("shown");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Quiz completed! Your final score is " + score + "/100");
    scoreMsgEl.appendChild(scoreDisplay);
}

btnStartEl.addEventListener("click", startGame);