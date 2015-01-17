window.onload = function(){

  var buttons = document.getElementsByClassName('button');
  var calcDisplay = document.getElementById('operator_display');
  var totalUserInputs = [];
  var currentOperator = null;

  resetUI(calcDisplay);

  for (var i = 0; i < buttons.length; i++) {
    var buttonText = buttons[i].innerHTML
    if (buttonText === "CLR" ) {
      buttons[i].addEventListener("click", function() {
        resetUI(calcDisplay);
      });

    } else if (buttonText === "ENT") {
      buttons[i].addEventListener("click", function() {
        output = processEnter(totalUserInputs, currentOperator)
        calcDisplay.innerHTML = output
        totalUserInputs.push(value);
      });

    } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
      buttons[i].addEventListener("click", function(){
        currentOperator = this.innerHTML;
      });

    } else {
      buttons[i].addEventListener("click", function() {
        value = processNumber(totalUserInputs, this.innerHTML, currentOperator);
        calcDisplay.innerHTML = value;
        totalUserInputs.push(value);
      });
    }
  }
}

var resetUI = function(calcDisplay) {
  calcDisplay.innerHTML = "0";
}

