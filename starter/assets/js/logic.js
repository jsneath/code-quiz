// When i click on start Quiz, the timer starts and 1st set of questions appear
var startQuiz = document.querySelector("#start")
var myQuestions = document.querySelector("#questions")
var startScreen = document.querySelector("#start-screen")
var timer = document.querySelector("#time")
var questionTitle = document.querySelector("#question-title")
var myChoices = document.querySelector("#choices")
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

 function showQuestions() {
    myQuestions.classList.remove('hide');
    questionTitle.textContent = questions[0].question
 
    listAnswers(questions[0].question)



    function listAnswers() {
        myChoices.innerHTML = '';
        var ol = document.createElement('ol');
    
        for (var i = 0; i < questions[0].answers.length; i++) {
            var answer = questions[0].answers[i];
        
            var li = document.createElement("li");
            
            var button = document.createElement("button")
            button.textContent = answer
            button.setAttribute('data-index', i);
            li.appendChild(button)
            ol.appendChild(li);
        
          }
          myChoices.appendChild(ol);
    
    }


    


}




// do a for loop through all questions array. Questions/answers stored as object?
// if statement for correct answer 0 points - timer reduction
// onto next question

// if user clicks correct answer add 1 point to users score
// if user clicks incorrect answer - minus 10 seconds from timer & 0 points score
// when timer reaches 0 the quiz stops 
// the user is presented with their score and to enter their name
// The users score is updated to high scores and stored