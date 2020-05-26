//write variables to keep track of the quiz

var currentQuestionIndex = 0:
var time = questions.length * 15;
var timerId;

//variables to reference elements in the dom

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//function to start quiz
function startQuiz() {
//hide begin screen
var startScreenEl = document.getElementById("start-screen");
startScreenEl.setAttribute("class", "hide");

//show questions

questionsEl.removeAttribute("class");


//start timer
timerId = setInterval(clockTick, 1000);

// show starting time
timerEl.textContent = time;

getQuestion();


}

function getQuestion() {

//get the current question object 
var curremtQuestion = questions[currentQuestionIndex];







}