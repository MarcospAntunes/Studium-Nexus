function simpleInterest(values: Array<number>) {
  const [c, t, i] = values;
  const fees = c * i * t;
  const amount = c + fees;

  return [amount, fees];
}

export default simpleInterest;
