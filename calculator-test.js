describe ('calculateMonthlyPayment', function () {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({ amount : 5995, years: 5, rate: 8.09})).toEqual('121.82');
    expect(calculateMonthlyPayment({ amount : 0, years: 5, rate: 8.09})).toEqual('0.00');
  });


  it('should return a result with 2 decimal places', function() {
    expect(typeof calculateMonthlyPayment({ amount : 5995, years: 5, rate: 8.09})).toBe('string');
    expect(calculateMonthlyPayment({ amount : 5995, years: 5, rate: 8.09})).toContain('.82');
    expect(calculateMonthlyPayment({ amount : 5995, years: 5, rate: 8.09})).not.toContain('.815');
  });
});