let timeLeft;
let score = 0;
let playerName;

const randomWordElement = document.getElementById("random-word");
const userInput = document.getElementById("user-input");
const startButton = document.getElementById("start-button");
const scoreValue = document.getElementById("score-value");
const timeLeftElement = document.getElementById("time-left");
const nameInput = document.getElementById("name-input");

function startGame() {
  playerName = nameInput.value.trim();
  if (playerName === "") {
    alert("Please enter your name to start the game.");
    return;
  }

  clearInterval(timer);
  userInput.value = "";
  userInput.disabled = false;
  randomWord = getRandomWord();
  randomWordElement.textContent = randomWord;
  score = 0;
  scoreValue.textContent = score;
  timeLeft = 10;
  timeLeftElement.textContent = timeLeft;

  timer = setInterval(updateTime, 1000);
}

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function updateTime() {
  timeLeft--;
  timeLeftElement.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timer);
    userInput.disabled = true;
    alert(`Time's up, ${playerName}! Your final score is ${score}.`);
  }
}

userInput.addEventListener("input", function () {
  if (userInput.value.trim().toLowerCase() === randomWord) {
    score++;
    scoreValue.textContent = score;
    userInput.value = "";
    randomWord = getRandomWord();
    randomWordElement.textContent = randomWord;
  }
});

startButton.addEventListener("click", startGame);
