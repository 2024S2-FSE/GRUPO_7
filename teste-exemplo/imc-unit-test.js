describe('IMCCalculator', () => {
  it('test if imc calc is correct', () => {
    const mockWeight = 70;
    const mockHeight = 1.70;

    const result = IMCCalculator.calculate(mockWeight, mockHeight);
    const expected = mockWeight / (mockHeight ** 2);

    expect(result).toBe(expected);
  })
  it('test if imc classification work properly', () => {
    const imc = 24.3;

    const result = IMCCalculator.getClassification(imc);
    const expected = "Normal";

    expect(result).toBe(expected);
  })
})