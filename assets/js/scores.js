var highscoresList = document.querySelector("#highscores");
var clearScores = document.querySelector("#clear")

var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

highScores.sort(function(a, b) {
    return b.score - a.score; 
  });

highScores.forEach(function(score) {
    var scoreEntry = document.createElement("li");
    scoreEntry.textContent = score.initials + " - " + score.score;
    highscoresList.appendChild(scoreEntry);
    
});

clearScores.addEventListener("click", function(event){
    localStorage.clear();
    highscoresList.classList.add('hide');

})

