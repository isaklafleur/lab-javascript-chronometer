class Utils {
  // Functions
  hasClass(element, className) {
    return element.className.indexOf(className) > 0;
  }

  twoDigitsNumber(number) {
    return ("0" + number).slice(-2);
  }
}
