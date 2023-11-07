// When i click on start Quiz, the timer starts and 1st set of questions appear
var startQuiz = document.querySelector("#start")
var myQuestions = document.querySelector("#questions")
var startScreen = document.querySelector("#start-screen")
var timer = document.querySelector("#time")
var questionTitle = document.querySelector("#question-title")
var myChoices = document.querySelector("#choices")
var endScreen = document.querySelector("#end-screen")
var finalScore = document.querySelector("#final-score")
var feedBack = document.querySelector("#feedback")
var submitScore = document.querySelector("#submit")
var userInitials = document.querySelector("#initials")
var finalScore = document.querySelector("#final-score")
// add an event listener for when the user selects start quiz

var setTimer = 10

startQuiz.addEventListener("click", function(event) {
    startScreen.style.display = 'none';
    myQuestions.classList.remove('hide');
    feedBack.classList.remove('hide')
    showQuestions()
    timer.textContent = setTimer

    interval = setInterval(function() {
        setTimer -= 1; 
        timer.textContent = setTimer; 
        if (setTimer <= 0) {
            clearInterval(interval); 
            
            endQuiz();
        }
    }, 1000);
    }
)

var currentQuestionIndex = 0

 function showQuestions() {

    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
        questionTitle.textContent = currentQuestion.question;
        listAnswers(currentQuestion.answers); 
    } 
}

function listAnswers(answers) {
    myChoices.innerHTML = '';
    var ol = document.createElement('ol');
    for (let i = 0; i < answers.length; i++) {
        var li = document.createElement("li");
        var button = document.createElement("button")
        button.textContent = answers[i]
        button.setAttribute('data-index', i);
        li.appendChild(button)
        ol.appendChild(li);
      }
      myChoices.appendChild(ol);
}

var userScore = 0

myChoices.addEventListener("click",function(event){
    if (event.target.tagName === 'BUTTON') {
       
        var index = parseInt(event.target.dataset.index, 10);

        if (index !== questions[currentQuestionIndex].correctAnswerIndex){
            feedBack.textContent = "Wrong!"
            setTimer -= 10
            timer.textContent = setTimer;
        }

        if (setTimer <= 0) {
            endQuiz()
        }

        if (index === questions[currentQuestionIndex].correctAnswerIndex) {
            userScore++;
            feedBack.textContent = "Correct!"
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestions(); 
        } else {
            endQuiz()
        }
    }
})

function endQuiz() {
    myQuestions.classList.add('hide');
    endScreen.classList.remove('hide');
    feedBack.classList.add('hide')
    finalScore.textContent = userScore;
    setTimer = 1

}


submitScore.addEventListener("click", function(event) {
    event.preventDefault(); 

    var initials = userInitials.value.trim();
    var finalScore = userScore

    var newScore = {
        initials: initials,
        score: finalScore
    };
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

    highScores.push(newScore);
    

    localStorage.setItem("highscores", JSON.stringify(highScores));
    
    window.location.href = 'highscores.html'
});









// do a for loop through all questions array. Questions/answers stored as object?
// if statement for correct answer 0 points - timer reduction
// onto next question

// if user clicks correct answer add 1 point to users score
// if user clicks incorrect answer - minus 10 seconds from timer & 0 points score
// when timer reaches 0 the quiz stops 
// the user is presented with their score and to enter their name
// The users score is updated to high scores and stored