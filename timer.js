var seconds;
var timerRunning;
var clockDisplay = document.getElementById("inner");

window.onload = function() {
  seconds = 1500;
  displayTime();
};

function displayTime() {
  let timeString = "";
  let hr = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;
  timeString += hr.toString() + ":";
  if (min < 10) {
    timeString += "0"
  }
  timeString += min.toString() + ":";
  if (sec < 10) {
    timeString += "0"
  }
  timeString += sec.toString();
  clockDisplay.innerHTML = timeString;
}

function runTimer() {
  if (timerRunning && seconds >= 0) {
    displayTime();
    seconds--;
    setTimeout(runTimer, 1000);
  }
}

function start() {
  timerRunning = true;
  runTimer();
}

function stop() {
  timerRunning = false;
}

function addFiveMinutes() {
  seconds += 300;
  displayTime();
}

function subtractFiveMinutes() {
  if (seconds >= 300) {
    seconds -= 300;
  } else {
    seconds = 0;
  }
  displayTime();
}

function reset() {
  timerRunning = false;
  seconds = 0;
  displayTime();
}