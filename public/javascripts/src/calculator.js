function Calculator() {
  this.processEnter = function(totalUserInputs, currentOperator) {
    if (totalUserInputs.length === 1) {
      var currentInput = totalUserInputs[totalUserInputs.length - 1];
      return eval(currentInput + currentOperator + currentInput);
    } else {
      return eval(totalUserInputs[totalUserInputs.length - 2] + currentOperator + totalUserInputs[totalUserInputs.length - 1]);
    }
  };

  this.processNumber = function(lastInputs, currentInput, currentOperator) {
    if (lastInputs.length === 0 || currentOperator !== null) {
      return currentInput;
    } else {
      return lastInputs[lastInputs.length - 1] + currentInput;
    }
  }
}
