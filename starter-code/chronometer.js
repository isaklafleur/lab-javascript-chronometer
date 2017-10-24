// Constructor
class Chronometer {
  constructor(utils) {
    this.utils = utils;
    this.millisecondsIntervalId;
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }
  // Button click events
  startClick() {
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
    this.start();
  }

  stopClick() {
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";

    clearInterval(this.millisecondsIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    this.printMinutes(0);
    this.printSeconds(0);
    this.printMilliseconds(0);
    this.clearSplits();
  }

  splitClick() {
    const minutes = this.getCurrentMinutes();
    const seconds = this.getCurrentSeconds(minutes);
    const milliseconds = this.currentMilliseconds;
    const split =
      this.utils.twoDigitsNumber(minutes) +
      ":" +
      this.utils.twoDigitsNumber(seconds) +
      ":" +
      this.utils.twoDigitsNumber(milliseconds);

    const li = document.createElement("li");
    li.innerHTML = split;
    document.getElementById("splits").appendChild(li);
  }

  // Behaviour Functions
  start() {
    var that = this;

    this.millisecondsIntervalId = setInterval(function() {
      if (that.currentMilliseconds === 99) {
        that.currentMilliseconds = 0;
        that.currentTime += 1;
        that.printTime();
      }
      that.currentMilliseconds += 1;
      that.printMilliseconds(that.currentMilliseconds);
    }, 10);
  }

  printTime() {
    const minutes = this.getCurrentMinutes();
    const seconds = this.getCurrentSeconds(minutes);
    minutes > 0 ? this.printMinutes(minutes) : this.printSeconds(seconds);
  }

  getCurrentMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getCurrentSeconds(minutes) {
    return this.currentTime - minutes * 60;
  }

  printMinutes(minutes) {
    const mins = this.utils.twoDigitsNumber(minutes);
    minDec.innerHTML = mins[0];
    minUni.innerHTML = mins[1];
  }

  printSeconds(seconds) {
    const secs = this.utils.twoDigitsNumber(seconds);

    secDec.innerHTML = secs[0];
    secUni.innerHTML = secs[1];
  }

  printMilliseconds(milliseconds) {
    const milli = this.utils.twoDigitsNumber(milliseconds);
    milDec.innerHTML = milli[0];
    milUni.innerHTML = milli[1];
  }

  clearSplits() {
    document.getElementById("splits").innerHTML = "";
  }
}
