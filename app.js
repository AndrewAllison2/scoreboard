// console.log("It works");

let initialHomeScore = 0

let initialAwayScore = 0



let userInput = ""



function increaseHomeScore() {
  initialHomeScore++
  console.log('This is the home score:', initialHomeScore);

  draw()
}

function increaseAwayScore() {
  initialAwayScore++
  console.log('This is the away score:', initialAwayScore);
  draw()
}

function resetScoreboard() {
  initialHomeScore = 0
  initialAwayScore = 0

  draw()
}

function bigIncreaseHomeScore() {
  increaseHomeScore()
  increaseHomeScore()
  increaseHomeScore()
  console.log('Big Points bby');
  draw()
}

function bigIncreaseAwayScore() {
  increaseAwayScore()
  increaseAwayScore()
  increaseAwayScore()
  draw()
}


function draw() {
  // @ts-ignore
  document.getElementById('homeStartScore').innerText = initialHomeScore
  // @ts-ignore
  document.getElementById('awayStartScore').innerText = initialAwayScore
}

draw()