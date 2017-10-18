var utils = new Utils();
const chronometer = new Chronometer(utils);
btnLeft = document.getElementById("btnLeft");
btnRight = document.getElementById("btnRight");

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  btnLeft.classList.contains("stop")
    ? chronometer.stopClick()
    : chronometer.startClick();
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  btnRight.classList.contains("split")
    ? chronometer.splitClick()
    : chronometer.resetClick();
});
