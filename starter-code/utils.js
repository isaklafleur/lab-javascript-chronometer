function Utils() {}

// Functions
Utils.prototype.hasClass = function(element, className) {
  return element.className.indexOf(className) > 0;
};

Utils.prototype.twoDigitsNumber = function(number) {
  return ("0" + number).slice(-2);
};
