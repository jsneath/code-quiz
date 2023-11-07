
// Shows scores of all previous players

var highscoresList = document.querySelector("#highscores");
var clearScores = document.querySelector("#clear")

var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

// Sorts the scorers in highest score first

highScores.sort(function(a, b) {
    return b.score - a.score; 
  });

//   takes each score and converts to an li. Appends to the list
highScores.forEach(function(score) {
    var scoreEntry = document.createElement("li");
    scoreEntry.textContent = score.initials + " - " + score.score;
    highscoresList.appendChild(scoreEntry);
    
});

// Clears the list when uset clicks 'clear highscores' 

clearScores.addEventListener("click", function(event){
    localStorage.clear();
    highscoresList.classList.add('hide');

})

