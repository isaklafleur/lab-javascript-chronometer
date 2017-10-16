function Chronometer() {
  this.btnLeft = document.getElementById("btnLeft");
  this.btnRight = document.getElementById("btnRight");
  this.intervalID;
  this.time = 0;
  this.minDec = 0;
  this.minCen = 0;
  this.secDec = 0;
  this.secCen = 0;
}

Chronometer.prototype.startClick = function() {
  // Set the btnLeft button with the text STOP, and the class btn stop.
  this.btnLeft.innerHTML = "STOP";
  this.btnLeft.classList.add("stop");

  // Set the btnRight button with the text SPLIT, and the class btn split.
  this.btnRight.innerHTML = "SPLIT";
  this.btnRight.classList.add("split");

  // Start Chronometer
  this.intervalID = setInterval(() => {
    this.time++;
    this.updateChronometer();
  }, 1000);
};

Chronometer.prototype.stopClick = function() {
  // Set the btnLeft button with the text START, and the class btn start.
  this.btnLeft.innerHTML = "START";
  this.btnLeft.classList.remove("stop");
  // Set the btnRight button with the text RESET, and the class btn reset.
  this.btnRight.innerHTML = "RESET";
  this.btnRight.classList.remove("split");

  // Stop Chronometer
  clearInterval(this.intervalID);
};

Chronometer.prototype.updateChronometer = function() {
  this.secCen = this.time % 10;
  if (this.secCen === 0) {
    this.secDec++;
  }
  if (this.secDec === 6) {
    this.secDec = 0;
    this.minCen++;
  }
  if (this.minCen % 10 === 0 && this.minCen !== 0) {
    this.minCen = 0;
    this.minDec++;
  }

  document.getElementById("minDec").innerHTML = this.minDec;
  document.getElementById("minCen").innerHTML = this.minCen;
  document.getElementById("secDec").innerHTML = this.secDec;
  document.getElementById("secCen").innerHTML = this.secCen;
};

Chronometer.prototype.split = function() {
  const splitTime = document.createElement("li");
  splitTime.innerHTML = `${this.minDec}${this.minCen} : ${this.secDec}${this
    .secCen}`;
  document.getElementById("split-times").appendChild(splitTime);
};

Chronometer.prototype.reset = function() {
  this.time = 0;
  this.minDec = 0;
  this.minCen = 0;
  this.secDec = 0;
  this.secCen = 0;
  document.getElementById("secCen").innerHTML = "0";
  document.getElementById("secDec").innerHTML = "0";
  document.getElementById("minCen").innerHTML = "0";
  const splits = document.getElementById("split-times");
  while (splits.firstChild) {
    splits.removeChild(splits.firstChild);
  }
};
