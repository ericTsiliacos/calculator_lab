window.onload = function(){

  var numberElements = document.getElementsByClassName('number');
  var operatorElements = document.getElementsByClassName('operator');
  var clearElement = document.getElementById('clear');
  var enterElement = document.getElementById('enter');
  var calcDisplay = document.getElementById('operator_display');

  var totalUserInputs = [];
  var currentOperator = null;

  resetUI(calcDisplay);

  _.each(numberElements, function(numberElement) {
    numberElement.addEventListener("click", function() {
      value = processNumber(totalUserInputs, this.innerHTML, currentOperator);
      calcDisplay.innerHTML = value;
      totalUserInputs.push(value);
    });
  });

  _.each(operatorElements, function(operatorElement) {
    operatorElement.addEventListener("click", function(){
      currentOperator = this.innerHTML;
    });
  });

  clearElement.addEventListener("click", function() {
    resetUI(calcDisplay);
  });

  enterElement.addEventListener("click", function() {
    output = processEnter(totalUserInputs, currentOperator)
    calcDisplay.innerHTML = output
    totalUserInputs.push(value);
  });
}

var resetUI = function(calcDisplay) {
  calcDisplay.innerHTML = "0";
}

