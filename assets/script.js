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
var score = timerSpan

var questions = [
    {
        title: "1. Rachel wrote a letter to Ross after they were on a break. How many pages did the letter have?",
        choices: ["a. 3 pages", "b. 18 pages, FRONT AND BACK", "c. 1 page", "d. 10 pages"],
        answer: "b"
    },
    {
        title: "2. Pheobe carried triplets for someone; who was it?",
        choices: ["a. Monica", "b. Rachel", "c. Her brother", "d. Her sister"],
        answer: "c"
    },
    {
        title: "3. What two pets did Joey and Chandler have?",
        choices: ["a. cat and dog", "b. mouse and spider", "c. lizard and fish", "d. duck and chick"],
        answer: "d"
    },
    {
        title: "4. What was Monica's main profession?",
        choices: ["a. cook", "b. lawyer", "c. doctor", "d. teacher"],
        answer: "a"
    },
    {
        title: "5. How many divorces did Ross have?",
        choices: ["a. 3", "b. 2", "c. 1", "d. 0"],
        answer: "a"
    }
]

startBtn.addEventListener("click", startQuiz)



function startQuiz(){
introDiv.setAttribute("class", "hide");
questionsDiv.removeAttribute("class");

// call start timer function here
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
    
// function submitBtn() {
//     let person = prompt("Please enter your intials to save your score", "")
//     if (person != null) {
//         document.getElementById("submitBtn").innerHTML =
//         "Great Job" + person + "!";
//     }

    // reset the timer to 0 / stop the timer- clear timer?
}

submitBtn.onclick = saveScore;

function saveScore(){
    // handle saving initials and score to localstorage
    // use object to hold initials and score association
    
}


