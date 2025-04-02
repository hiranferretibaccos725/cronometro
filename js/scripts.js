const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      miliseconds += 10;

      if (miliseconds === 1000) {
        seconds++;
        miliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      milisecondsEl.textContent = formatMilliseconds(miliseconds);
    }
  }, 10);
  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function formatTime(time) {
  return time >= 0 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  resumeBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  miliseconds = 0;

  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  milisecondsEl.textContent = "000";

  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}
