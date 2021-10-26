describe ('calculateMonthlyPayment', function () {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({ amount : 5995, years: 5, rate: 8.09})).toEqual('121.82');
    expect(calculateMonthlyPayment({ amount : 0, years: 5, rate: 8.09})).toEqual('0.00');
  });


  it('should return a result with 2 decimal places', function() {
    expect(typeof calculateMonthlyPayment({ amount : 5995, years: 5, rate: 8.09})).toBe('string'); //no idea why this isn't working. i double-checked the syntax on the documentation for jasmine, and i'm still getting the following:
    //TypeError: expect(...).toBeInstanceOf is not a function in file:///home/aaron/Documents/springboard/unit%207/jasmine-testing-exercises/calculator/calculator-test.js (line 9)
  });
});