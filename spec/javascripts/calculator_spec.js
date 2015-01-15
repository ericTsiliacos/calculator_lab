describe('runButton', function() {
  describe("when the user has not inputed anything and has not selected an operator", function() {
    it('returns an array with the first item to display and the second item as the user input to add', function() {
      var totalUserInputs = [];
      var innerHTML = "1";
      var currentOperator = null;
      var result = runButton(totalUserInputs, innerHTML, currentOperator);

      expect(result).toEqual(["1","1"]);
    });
  });

  describe("when the user has already inputed a single number and has not selected an opereator", function() {
    it('returns an array with the first item to display and the second item as the user input to add', function() {
      var totalUserInputs = ["1"];
      var innerHTML = "1";
      var currentOperator = null;
      var result = runButton(totalUserInputs, innerHTML, currentOperator)

      expect(result).toEqual(["11", "11"]);
    });
  });

});
