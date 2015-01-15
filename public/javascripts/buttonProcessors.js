var runButton = function(totalUserInputs, innerHTML, currentOperator) {
  if (totalUserInputs.length === 0) {
    return [innerHTML, innerHTML];
  } else {
    var valueToDisplay = totalUserInputs[0] + innerHTML;
    return [valueToDisplay, valueToDisplay];
  }
}

var hi = function() {
  console.log("hi!");
}
