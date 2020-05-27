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

//update title with question

var titleEl = document.getElementById("question-title");
titleEl.textContent = curremtQuestion.title;

// clear old question choices

choicesEl.innerHTML = "";

//loop over answers

currentQuestion.choices.forEach(function(choice, i) {
    // create button for each answer
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value",choice);

    choiceNode.textContent = i + 1 + "." + choice;

    //attach click event listener to answers
    choiceNode.onclick = questionClick;

    //display on page
    choicesEl.appendChild(choiceNode);
});

}

//questionclick function

function questionClick() {

//check if the answer is wrong 

if (this.value !== questions[currentQuestionIndex].answer) {
//time penalty 
time -= 15;

if (time < 0) {
time = 0;

}
 
//display new time 
timerEl.textContent = time;

feedbackEl.textContent = "Wrong!";

}

// flash right or wrong
feedbackEl.setAttribute("class", "feedback");
setTimeout(function(){
    feedbackEl.setAttribute("class", "feedback hide");
    
}, 1000);

//add to loop to go to next question

currentQuestionIndex++;

//check if there are more questions

if (currentQuestionIndex === questions.length) {
    quizEnd();
} else {
    getQuestion();
}





}



function quizEnd() {
    // stop timer 
    clearInterval(timerId);

    //show final screen

    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    //show final score

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    //hide questions section 
    questionsEl.setAttribute("class", "hide");

    }

    //function that saves score

    function saveHighscore() {

        // get value of input box

        var initials = initialsEl.value.trim();

        // make sure value wasn't empty 
        if (initials !== "")  {
//get saved scores or set to an array

var highscores = 
JSON.parse(window.localStorage.getItem("highscores")) || [];

//format the new object for the current player

var newScore = {
    score: time,
    initials: initials
}
// save to localstorage
highscores.push(newScore);
window.localStorage.setItem("highscores", JSON.stringify(highscores));

//redirect to next page
window.location.href = "highscores.html";

        }

    }


    function checkForEnter(event) {
            if (event.key === "Enter") {
                saveHighscore();
            }
    }

    //click button to submit initials 

    submitBtn.onclick = saveHighscore;

    // user clicks button to start the quiz

    startBtn.onclick = startQuiz;

    initialsEl.onkeyup = checkForEnter;





