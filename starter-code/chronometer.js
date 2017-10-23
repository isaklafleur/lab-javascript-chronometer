// Constructor
function Chronometer(utils) {
  this.utils = utils;
  this.intervalId;
  this.millisecondsIntervalId;
  this.currentTime = 0;
  this.currentMilliseconds = 0;
}

// Button click events
Chronometer.prototype.startClick = function() {
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
  this.start();
};

Chronometer.prototype.stopClick = function() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";

  clearInterval(this.intervalId);
  clearInterval(this.millisecondsIntervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
  this.currentMilliseconds = 0;

  this.printMinutes(0);
  this.printSeconds(0);
  this.printMilliseconds(0);
  this.clearSplits();
};

Chronometer.prototype.splitClick = function() {
  var minutes = this.getCurrentMinutes();
  var seconds = this.getCurrentSeconds(minutes);
  var milliseconds = this.currentMilliseconds;
  var split =
    this.utils.twoDigitsNumber(minutes) +
    ":" +
    this.utils.twoDigitsNumber(seconds) +
    ":" +
    this.utils.twoDigitsNumber(milliseconds);

  var li = document.createElement("li");
  li.innerHTML = split;
  document.getElementById("splits").appendChild(li);
};

// Behaviour Functions
Chronometer.prototype.start = function() {
  var that = this;
  this.intervalId = setInterval(function() {
    that.currentTime += 1;
    that.printTime();
  }, 1000);

  this.millisecondsIntervalId = setInterval(function() {
    if (that.currentMilliseconds === 99) {
      that.currentMilliseconds = 0;
    }
    that.currentMilliseconds += 1;
    that.printMilliseconds(that.currentMilliseconds);
  }, 10);
};

Chronometer.prototype.printTime = function() {
  var minutes = this.getCurrentMinutes();
  var seconds = this.getCurrentSeconds(minutes);

  minutes > 0 ? this.printMinutes(minutes) : this.printSeconds(seconds);
};

Chronometer.prototype.getCurrentMinutes = function() {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.getCurrentSeconds = function(minutes) {
  return this.currentTime - minutes * 60;
};

Chronometer.prototype.printMinutes = function(minutes) {
  var mins = this.utils.twoDigitsNumber(minutes);

  minDec.innerHTML = mins[0];
  minUni.innerHTML = mins[1];
};

Chronometer.prototype.printSeconds = function(seconds) {
  var secs = this.utils.twoDigitsNumber(seconds);

  secDec.innerHTML = secs[0];
  secUni.innerHTML = secs[1];
};

Chronometer.prototype.printMilliseconds = function(milliseconds) {
  var milli = this.utils.twoDigitsNumber(milliseconds);

  milDec.innerHTML = milli[0];
  milUni.innerHTML = milli[1];
};

Chronometer.prototype.clearSplits = function() {
  document.getElementById("splits").innerHTML = "";
};
