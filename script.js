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
        q: "QUESTIONS",
        choices: [{choice: "1"}, {choice: "2"}, {choice: "3"}, {choice: "4"}],
        a: "ANSWER"
    }
    {
        q: "QUESTIONS",
        choices: [{choice: "1"}, {choice: "2"}, {choice: "3"}, {choice: "4"}],
        a: "ANSWER"
    }
    {
        q: "QUESTIONS",
        choices: [{choice: "1"}, {choice: "2"}, {choice: "3"}, {choice: "4"}],
        a: "ANSWER"
    }
    {
        q: "QUESTIONS",
        choices: [{choice: "1"}, {choice: "2"}, {choice: "3"}, {choice: "4"}],
        a: "ANSWER"
    }
    {
        q: "QUESTIONS",
        choices: [{choice: "1"}, {choice: "2"}, {choice: "3"}, {choice: "4"}],
        a: "ANSWER"
    }
];