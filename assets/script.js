console.log("were connected!")

currentQuestionIndex = 0;
var correct = 0;
var time = 60;
var timerId;

var startBtn = document.getElementById("startBtn");
var questionsDiv = document.querySelector("#questions");
var introDiv = document.querySelector("#intro");
var choicesDiv = document.querySelector("#choices");
var endScreenDiv = document.querySelector("#end-screen");
var submitBtn = document.querySelector("#submitBtn");
var timerSpan = document.querySelector("#time")

var questions = [
    {
        title: "this is question 1",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "this is question 2",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "this is question 3",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "this is question 4",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "this is question 5",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    }
]

startBtn.addEventListener("click", startQuiz)



function startQuiz(){
introDiv.setAttribute("class", "hide");
questionsDiv.removeAttribute("class");

// youre going to want to call your start timer function here
timerId = setInterval(tickingClock, 1000)
// calling question function
viewQuestion()

}

function tickingClock(){
    time--;
    timerSpan.textContent = time;
}

function viewQuestion(){

    var currentQuestion = questions[currentQuestionIndex]
    var questionTitle = document.querySelector("#question-title")
    questionTitle.textContent = currentQuestion.title;

    choicesDiv.innerHTML = "";

    currentQuestion.choices.forEach(function(choice){
  
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("value", choice)
        choiceButton.textContent = choice;

        choicesDiv.appendChild(choiceButton);

        choiceButton.onclick = handleClick;
    })

}

function handleClick(){
    console.log("this buttons value", this.value)
    if(this.value === questions[currentQuestionIndex].answer){
        // we have the correct answer
        correct++
    }

    currentQuestionIndex++;

    if(currentQuestionIndex === questions.length){
        endQuiz()
    } else {
        viewQuestion()
    }
}

function endQuiz(){
    questionsDiv.setAttribute("class", "hide");
    endScreenDiv.removeAttribute("class");

    // reset the timer to 0 / stop the timer
}

submitBtn.onclick = saveScore;

function saveScore(){
    // handle saving initials and score to localstorage
    // use object to hold initials and score association

}


