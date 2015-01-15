window.onload = function(){

  var buttons = document.getElementsByClassName('button');
  var calcDisplay = document.getElementById('operator_display');
  var totalUserInputs = [];
  var currentOperator = null;

  for (var i = 0; i < buttons.length; i++) {
    var buttonText = buttons[i].innerHTML
      // console.log(buttonText)
    if (buttonText === "CLR" ) {
      buttons[i].addEventListener("click", function() {
        calcDisplay.innerHTML = '';
      });

    } else if (buttonText === "ENT") {
      buttons[i].addEventListener("click", function() {
        expression = totalUserInputs[0] + currentOperator + totalUserInputs[1]
        console.log(expression)
        output = eval(expression)
        calcDisplay.innerHTML = output
      });
    } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
      buttons[i].addEventListener("click", function(){
        currentOperator = this.innerHTML;
      });
    } else {
      buttons[i].addEventListener("click", function() {
        // value = runButton(totalUserInputs, this.innerHTML, currentOperator);
        // calcDisplay.innerHTML = value[0];
        // userInput.push(value[1]);
      });
    }

  }





}
