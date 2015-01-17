describe('processEnter', function() {
  describe('when the user has inputed two inputs', function() {
    it('evaluates the last two inputs with the current operator', function() {
      expect(processEnter(["1", "2"], "+")).toEqual(3);
    });
  });

  describe('when the user has inputed one input', function() {
    it('evaluates the last input to itself with the current operator', function() {
      expect(processEnter(["2"], "+")).toEqual(4);
    });
  });
});
