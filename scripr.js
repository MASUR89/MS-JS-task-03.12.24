let countdownTime = 10; 
let remainingTime = countdownTime; 
let intervalId = 0; 

const timerDisplay = document.getElementById("display");
const messageDisplay = document.getElementById("message");
const startButton = document.getElementById("startBut");
const stopButton = document.getElementById("stopBut");
const resetButton = document.getElementById("resetBut");

function updateDisplay() {
  timerDisplay.textContent = `Remaining ${remainingTime}s`;
}

function startTimer() {
  if (intervalId !== 0) return;

  messageDisplay.textContent = ""; 

  intervalId = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateDisplay();
    } else {
      stopTimer();
      messageDisplay.textContent = "Time's up!";
    }
  }, 1000);
}

function stopTimer() {
  if (intervalId !== 0) {
    clearInterval(intervalId);
    intervalId = 0;
    messageDisplay.textContent = `Timer stopped at ${remainingTime} seconds`;
  }
}

function resetTimer() {
  remainingTime = countdownTime;
  updateDisplay();
  messageDisplay.textContent = "";
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();