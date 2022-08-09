function createScoreBoard() {
  return { "The Best Ever": 1000000 };
}

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

function updateScore(scoreBoard, player, points) {
  let newScore = scoreBoard[player];
  scoreBoard[player] = newScore += points;
  return scoreBoard;
}

function applyMondayBonus(scoreBoard) {
  let bonus = 100;
  for (let key in scoreBoard) {
    scoreBoard[key] += bonus;
  }

  return scoreBoard;
}

function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}
