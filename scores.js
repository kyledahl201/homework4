function printHighscores() {
    //get scores locally or pushj to empty arrray 

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];


    // sort scores in descending order

    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score){
                // create scoretag for each score

                var scoreTag = document.createElement("li");
                scoreTag.textContent = score.initials + " - " + score.score;

                // put it on page

                var scoreElement = document.getElementById("highscores");
                scoreElement.appendChild(scoreTag);
            
    });
}

function clearHighscores() {
window.localStorage.removeItem("highscores");
window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

//run upon page loading 

printHighscores();