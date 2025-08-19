// ===== Stopwatch Logic =====
let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

// Update time display
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

// Stopwatch counter
function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();

  // Add pulse effect on update
  let display = document.getElementById("display");
  display.style.transform = "scale(1.1)";
  setTimeout(() => display.style.transform = "scale(1)", 150);
}

// Start
function startTimer() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

// Pause
function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

// Reset
function resetTimer() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
}
