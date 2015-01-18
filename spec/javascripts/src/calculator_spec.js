describe('calculator', function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe('processEnter', function() {
    describe('when the user has inputed two inputs', function() {
      it('evaluates the last two inputs with the current operator', function() {
        expect(calculator.processEnter(["1", "2"], "+")).toEqual(3);
      });
    });

    describe('when the user has inputed one input', function() {
      it('evaluates the last input to itself with the current operator', function() {
        expect(calculator.processEnter(["2"], "+")).toEqual(4);
      });
    });
  });

  describe('processNumber', function() {
    describe("when the user has not inputed anything and has not selected an operator", function() {
      it('returns the inputed number as the number to display', function() {
        var lastInputs = [];
        var currentInput = "1";
        var currentOperator = null;

        var result = calculator.processNumber(lastInputs, currentInput, currentOperator);
        expect(result).toEqual("1");
      });
    });

    describe("when the user has already inputed numbers and has not selected an opereator", function() {
      it('concatenates the last user input with the current input', function() {
        var lastInputs = ["2", "1"];
        var currentInput = "1";
        var currentOperator = null;

        var result = calculator.processNumber(lastInputs, currentInput, currentOperator)
        expect(result).toEqual("11");
      });
    });

    describe("when the user has inputed a single number and has selected an operator", function() {
      it('returns the inputed number as the number to display', function() {
        var lastInputs = ["1"];
        var currentInput = "1";
        var currentOperator = "+";

        var result = calculator.processNumber(lastInputs, currentInput, currentOperator);
        expect(result).toEqual("1");
      });
    });
  });
});

