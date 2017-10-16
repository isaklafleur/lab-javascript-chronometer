const chronometer = new Chronometer();

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  btnLeft = document.getElementById("btnLeft");
  btnLeft.classList.contains("stop")
    ? chronometer.stopClick()
    : chronometer.startClick();
});

// Reset/Split Button

document.getElementById("btnRight").addEventListener("click", function() {
  btnRight = document.getElementById("btnRight");
  btnRight.classList.contains("split")
    ? chronometer.split()
    : chronometer.reset();
});

// Create the necessary code in the main.js to call the Chronometer startClick method if the button has the start class, or the stopClick method if the button has the stop class applied.
