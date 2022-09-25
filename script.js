//Containers
var viewHighscoresEl = document.getElementById("view_hightscores");
var startingContainer = document.getElementById("starting_container");
var questionContainer = document.getElementById("question_container");
var highscoreContainer = document.getElementById("highscore_container");

var highscoreListEl = document.getElementById("highscore_list");
var initials = document.getElementById("initials");
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

//Array of the quiz questions
var questions = [
    {
        q: "Inside which HTML element do we put the JavaScript?",
        choices: [{choice: '<javascript>'}, {choice: '<js>'}, {choice: '<scripting>'}, {choice: '<script>'}],
        a: "<script>"
    }
    {
        q: 'How do you write "Hello World" in an alert box?',
        choices: [{choice: 'msgBox("Hello World");'}, {choice: 'alert("Hello World");'}, {choice: 'msg("Hello World")'}, {choice: 'alertBox("Hello World");'}],
        a: 'alert("Hello World");'
    }
    {
        q: 'How can you add a comment in a JavaScript?',
        choices: [{choice: '//This is a comment'}, {choice: '<!--This is a comment-->'}, {choice: "'This is a comment"}, {choice: 'None of the above'}],
        a: '//This is a comment'
    }
    {
        q: 'Which event occurs when the user clicks on an HTML element?',
        choices: [{choice: 'onchange'}, {choice: 'onclick'}, {choice: 'onmouseover'}, {choice: 'onmouseclick'}],
        a: 'onclick'
    }
    {
        q: 'Which operator is used to assign a value to a variable?',
        choices: [{choice: 'x'}, {choice: '*'}, {choice: '='}, {choice: '-'}],
        a: '='
    }
];