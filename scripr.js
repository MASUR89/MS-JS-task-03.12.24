let countdownTime = 10; 
let remainingTime = countdownTime; 
let intervalId = 0; 
let timeoutId = 0; 

const display = document.getElementById("display");
const message = document.getElementById("message");
const startBut = document.getElementById("startBut");
const stopBut = document.getElementById("stopBut");
const resetBut = document.getElementById("resetBut");

function updateDisplay() {
  display.textContent = `Remaining time: ${remainingTime}s`;
}

function startTimer() {
  if (intervalId !== 0) return;

  message.textContent = ""; 

  intervalId = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateDisplay();
    }
  }, 1000);

  timeoutId = setTimeout(() => {
    stopTimer(); 
    message.textContent = "Time's up!";
  }, remainingTime * 1050);
}

function stopTimer() {
  if (intervalId !== 0) {
    clearInterval(intervalId);
    intervalId = 0;
  }
  if (timeoutId !== 0) {
    clearTimeout(timeoutId);
    timeoutId = 0;
  }
  message.textContent = `Timer stopped at ${remainingTime} seconds`;
}

function resetTimer() {
  remainingTime = countdownTime; 
  updateDisplay();
  message.textContent = ""; 
}

startBut.addEventListener("click", startTimer);
stopBut.addEventListener("click", stopTimer);
resetBut.addEventListener("click", resetTimer);

updateDisplay();