// When i click on start Quiz, the timer starts and 1st set of questions appear
var startQuiz = document.querySelector("#start")
var myQuestions = document.querySelector("#questions")
var startScreen = document.querySelector("#start-screen")
var timer = document.querySelector("#time")
var questionTitle = document.querySelector("#question-title")
var myChoices = document.querySelector("#choices")
var endScreen = document.querySelector("#end-screen")
// add an event listener for when the user selects start quiz




startQuiz.addEventListener("click", function(event) {
    startScreen.style.display = 'none';
    startTimer(60, timer)
    showQuestions()
    }
)
// Struggled with the timer working so got some help on this
// I obtained help this timer function using google/chat gpt and got this to work in my code. These appear to be a regular requirement in JS. 

function startTimer(duration, display) {
    var timer = duration
    // var minutes
    // var seconds

    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            // You can call a function here to handle what happens when the timer ends
            // e.g., endQuiz();
        }
    }, 1000);
}


var currentQuestionIndex = 0

 function showQuestions() {

    myQuestions.classList.remove('hide');

    console.log("Current index:", currentQuestionIndex, "Total questions:", questions.length);
    if (currentQuestionIndex < questions.length) {
        // Get the current question based on the currentQuestionIndex
        var currentQuestion = questions[currentQuestionIndex];
        console.log("Current question:", currentQuestion);
        // Update the question title and answers
        questionTitle.textContent = currentQuestion.question;
        listAnswers(currentQuestion.answers); // Pass the array of answers for the current question
    } else {
        // No more questions to show, maybe end the quiz here
        console.log('End of the quiz');
        // You could call a function here to handle the end of the quiz
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
        // Use dataset to access data attributes
        var index = parseInt(event.target.dataset.index, 10);
        if (index === questions[currentQuestionIndex].correctAnswerIndex) {
            userScore++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestions(); // Show the next question
        } else {
            // End of quiz logic here
            myQuestions.classList.add('hide');
         endScreen.classList.remove('hide');
            console.log('Quiz finished');
            console.log('Final score: ' + userScore);
        }

    }
})

// showQuestions()




// do a for loop through all questions array. Questions/answers stored as object?
// if statement for correct answer 0 points - timer reduction
// onto next question

// if user clicks correct answer add 1 point to users score
// if user clicks incorrect answer - minus 10 seconds from timer & 0 points score
// when timer reaches 0 the quiz stops 
// the user is presented with their score and to enter their name
// The users score is updated to high scores and stored