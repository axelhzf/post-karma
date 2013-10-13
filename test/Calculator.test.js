describe('Calculator', function () {
    it('should add', function () {
        var calculator = new Calculator();
         expect(calculator.add(1, 2)).to.equal(3);
    });
});