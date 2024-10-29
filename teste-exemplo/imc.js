class IMCCalculator {
  static calculate(weight, height) {
    return (weight) / (height ** 2)
  }

  static getClassification(imc) {
    if (imc < 18.5) return 'Magreza';
    if (imc < 25) return 'Normal';
    if (imc < 30) return 'Sobrepeso';
    if (imc < 40) return 'Obesidade';

    return 'Obesidade Grave';
  }
}