var hours = document.getElementById("hours"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    mlseconds = document.getElementById("mlseconds"),

    startBtn = document.getElementById("start-btn"),
    pauseBtn = document.getElementById("pause-btn"),
    stopBtn = document.getElementById("stop-btn"),
    resetBtn = document.getElementById("reset-btn"),

    setTime,
    currentTime,
    difference,
    timer = 0,
    interval;

var start = function() {
  setTime = Date.now();
  interval = setInterval(update, 10);
};

var pause = function() {
  clearInterval(interval);
};

var stop = function() {
  clearInterval(interval);
  timer = 0;
};

var reset = function() {
  timer = 0;
  updateScreen();
};

var update = function() {
  currentTime = Date.now();
  difference = currentTime - setTime;
  timer += difference;

  updateScreen();
  setTime = currentTime;
};

var updateScreen = function() {
  var timeRaw = timer/1000,
      timeMiliSeconds = parseInt((timeRaw % 1) * 100),
      timeSeconds = Math.floor(timeRaw),
      timeMinutes = Math.floor(timeSeconds/60),
      timeHours = Math.floor(timeMinutes/60);

  mlseconds.innerText = twoDigiter(timeMiliSeconds);
  seconds.innerText = twoDigiter(processSixty(timeSeconds));
  minutes.innerText = twoDigiter(processSixty(timeMinutes));
  hours.innerText = twoDigiter(timeHours);
};

var twoDigiter = function(number) {
  var numString = number.toString();
  if(numString.length < 2) {
    return "0" + numString;
  } else {
    return numString;
  }
};

var processSixty = function(number) {
  var divisibleBySixty = Math.floor(number/60);

  if(number/60 >= divisibleBySixty) {
    return number - 60 * divisibleBySixty;
  }
};

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
